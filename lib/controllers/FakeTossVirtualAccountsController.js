"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.FakeTossVirtualAccountsController = void 0;
var express_1 = __importDefault(require("express"));
var nestia_helper_1 = __importDefault(require("nestia-helper"));
var nest = __importStar(require("@nestjs/common"));
var uuid_1 = require("uuid");
var DateUtil_1 = require("../utils/DateUtil");
var FakeTossPaymentProvider_1 = require("../providers/FakeTossPaymentProvider");
var FakeTossStorage_1 = require("../providers/FakeTossStorage");
var FakeTossUserAuth_1 = require("../providers/FakeTossUserAuth");
var FakeTossWebhookProvider_1 = require("../providers/FakeTossWebhookProvider");
var FakeTossVirtualAccountsController = /** @class */ (function () {
    function FakeTossVirtualAccountsController() {
    }
    /**
     * 가상 계좌로 결제 신청하기.
     *
     * `virtual_accounts.store` 는 고객이 결제 수단을 가상 계좌로 선택하는 경우에 호출되는
     * API 함수이다. 물론 고객이 이처럼 가상 계좌를 선택한 경우, 고객이 지정된 계좌에 돈을
     * 입금하기 전까지는 결제가 마무리된 것이 아니기에, {@link ITossPayment.status} 값은
     * `WAITING_FOR_DEPOSIT` 이 된다.
     *
     * 참고로 `virtual_accounts.store` 는 클라이언트 어플리케이션이 토스 페이먼츠가
     * 자체적으로 제공하는 결제 창을 사용하는 경우, 귀하의 백엔드 서버가 이를 실 서비스에서
     * 호출하는 일은 없을 것이다. 다만, 고객이 가상 계좌로 결제를 진행하는 상황을
     * 시뮬레이션하기 위하여, 테스트 자동화 프로그램 수준에서 사용될 수는 있다.
     *
     * 그리고 `virtual_accounts.store` 이후에 고객이 지정된 계좌에 금액을 입금하거든, 토스
     * 페이먼츠 서버로부터 웹훅 이벤트가 발생되어 귀하의 백엔드 서버로 전송된다. 만약 연동
     * 대상 토스 페이먼츠 서버가 실제가 아닌 `fake-toss-payments-server` 라면,
     * {@link internal.virtual_accounts.deposit} 를 호출하여, 고객이 가상 계좌에 입금하는
     * 상황을 시뮬레이션 할 수 있다.
     *
     * @param input 가상 결제 신청 정보.
     * @returns 가상 계좌 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossVirtualAccountsController.prototype.store = function (request, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var payment = __assign(__assign({}, FakeTossPaymentProvider_1.FakeTossPaymentProvider.get_common_props(input)), { method: "가상계좌", type: "NORMAL", status: "WAITING_FOR_DEPOSIT", approvedAt: null, secret: (0, uuid_1.v4)(), virtualAccount: {
                accountNumber: "110417532896",
                accountType: "일반",
                bank: input.bank,
                customerName: input.customerName,
                dueDate: DateUtil_1.DateUtil.add_days(new Date(), 3).toString(),
                expired: false,
                settlementStatus: "INCOMPLETED",
                refundStatus: "NONE",
            } });
        FakeTossStorage_1.FakeTossStorage.payments.set(payment.paymentKey, payment);
        FakeTossWebhookProvider_1.FakeTossWebhookProvider.webhook({
            eventType: "PAYMENT_STATUS_CHANGED",
            data: {
                paymentKey: payment.paymentKey,
                orderId: payment.orderId,
                status: "WAITING_FOR_DEPOSIT",
            },
        }).catch(function () { });
        return payment;
    };
    __decorate([
        nestia_helper_1.default.TypedRoute.Post(),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossVirtualAccountsController.prototype, "store", null);
    FakeTossVirtualAccountsController = __decorate([
        nest.Controller("v1/virtual-accounts")
    ], FakeTossVirtualAccountsController);
    return FakeTossVirtualAccountsController;
}());
exports.FakeTossVirtualAccountsController = FakeTossVirtualAccountsController;
//# sourceMappingURL=FakeTossVirtualAccountsController.js.map