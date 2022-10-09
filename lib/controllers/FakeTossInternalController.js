"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakeTossInternalController = void 0;
var express_1 = __importDefault(require("express"));
var nestia_helper_1 = __importDefault(require("nestia-helper"));
var nest = __importStar(require("@nestjs/common"));
var FakeTossStorage_1 = require("../providers/FakeTossStorage");
var FakeTossUserAuth_1 = require("../providers/FakeTossUserAuth");
var FakeTossWebhookProvider_1 = require("../providers/FakeTossWebhookProvider");
var FakeTossInternalController = /** @class */ (function () {
    function FakeTossInternalController() {
    }
    /**
     * 웹훅 이벤트 더미 리스너.
     *
     * `internal.webhook` 은 실제 토스 페이먼츠의 결제 서버에는 존재하지 않는 API 로써,
     * `fake-toss-payments-server` 의 {@link Configuration.WEBHOOK_URL} 에 아무런 URL 을
     * 설정하지 않으면, `fake-toss-payments-server` 로부터 발생하는 모든 종류의 웹훅
     * 이벤트는 이 곳으로 전달되어 무의미하게 사라진다.
     *
     * 따라서 `fake-toss-payments-server` 를 사용하여 토스 페이먼츠 서버와의 연동을 미리
     * 검증코자 할 때는, 반드시 {@link Configuration.WEBHOOK_URL} 를 설정하여 웹훅
     * 이벤트가 귀하의 백엔드 서버로 제대로 전달되도록 하자.
     *
     * @param input 웹훅 이벤트 정보
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossInternalController.prototype.webhook = function (input) {
        var payment = FakeTossStorage_1.FakeTossStorage.payments.get(input.data.paymentKey);
        payment.status = input.data.status;
        FakeTossStorage_1.FakeTossStorage.webhooks.set(input.data.paymentKey, input);
    };
    /**
     * 가상 계좌에 입금하기.
     *
     * `internal.virtual_accounts.deposit` 은 실제 토스 페이먼츠의 결제 서버에는 존재하지
     * 않는 API 로써, 가상 계좌 결제를 신청한 고객이, 이후 가상 계좌에 목표 금액을 입금하는
     * 상황을 시뮬레이션할 수 있는 함수이다.
     *
     * 즉 `internal.virtual_accounts.deposit` 는 고객이 스스로에게 가상으로 발급된 계좌에
     * 입금을 하고, 그에 따라 토스 페이먼츠 서버에서 webhook 이벤트가 발생하여 이를 귀하의
     * 백엔드 서버로 전송하는 일련의 상황을 테스트하기 위한 함수인 셈이다.
     *
     * @param paymentKey 대상 가상 계좌 결제 정보의 {@link ITossPayment.paymentKey}
     * @returns 입금 완료된 가상 꼐좌 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossInternalController.prototype.deposit = function (request, paymentKey) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var payment = FakeTossStorage_1.FakeTossStorage.payments.get(paymentKey);
        if (payment.method !== "가상계좌")
            throw new nest.UnprocessableEntityException("Invalid target.");
        payment.virtualAccount.settlementStatus = "COMPLETED";
        payment.approvedAt = new Date().toString();
        payment.status = "DONE";
        FakeTossWebhookProvider_1.FakeTossWebhookProvider.webhook({
            eventType: "PAYMENT_STATUS_CHANGED",
            data: {
                paymentKey: payment.paymentKey,
                orderId: payment.orderId,
                status: "DONE",
            },
        }).catch(function () { });
        return payment;
    };
    __decorate([
        nestia_helper_1.default.TypedRoute.Post("webhook"),
        __param(0, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FakeTossInternalController.prototype, "webhook", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Get(":paymentKey/deposit"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedParam("paymentKey", "string")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Object)
    ], FakeTossInternalController.prototype, "deposit", null);
    FakeTossInternalController = __decorate([
        nest.Controller("internal")
    ], FakeTossInternalController);
    return FakeTossInternalController;
}());
exports.FakeTossInternalController = FakeTossInternalController;
//# sourceMappingURL=FakeTossInternalController.js.map