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
exports.FakeTossBillingController = void 0;
var express_1 = __importDefault(require("express"));
var nestia_helper_1 = __importDefault(require("nestia-helper"));
var nest = __importStar(require("@nestjs/common"));
var uuid_1 = require("uuid");
var FakeTossPaymentProvider_1 = require("../providers/FakeTossPaymentProvider");
var FakeTossStorage_1 = require("../providers/FakeTossStorage");
var FakeTossUserAuth_1 = require("../providers/FakeTossUserAuth");
var FakeTossBillingController = /** @class */ (function () {
    function FakeTossBillingController() {
    }
    /**
     * 간편 결제 카드 등록하기.
     *
     * `billing.authorizations.card.store` 는 고객이 자신의 신록 카드를 서버에 등록해두고,
     * 매번 결제가 필요할 때마다 카드 정보를 반복 입력하는 일 없이 간편하게 결제를
     * 진행하고자 할 때, 호출되는 API 함수이다.
     *
     * 참고로 `billing.authorizations.card.store` 는 클라이언트 어플리케이션이 토스
     * 페이먼츠가 제공하는 간편 결제 카드 등록 창을 사용하는 경우, 귀하의 백엔드 서버가 이를
     * 실 서비스에서 호출하는 일은 없을 것이다. 다만, 고객이 간편 결제 카드를 등록하는
     * 상황을 시뮬레이션하기 위하여, 테스트 자동화 프로그램 수준에서 사용될 수는 있다.
     *
     * @param input 간편 결제 카드 등록 정보
     * @returns 간편 결제 카드 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossBillingController.prototype.store = function (request, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var billing = {
            mId: "tosspyaments",
            method: "카드",
            billingKey: (0, uuid_1.v4)(),
            customerKey: input.customerKey,
            cardCompany: "신한",
            cardNumber: input.cardNumber,
            authenticatedAt: new Date().toString(),
        };
        FakeTossStorage_1.FakeTossStorage.billings.set(billing.billingKey, [billing, input]);
        return billing;
    };
    /**
     * 간편 결제로 등록한 수단 조회하기.
     *
     * `billing.authorizations.at` 은 고객이 간편 결제를 위하여 토스 페이먼츠 서버에
     * 등록한 결제 수단을 조회하는 함수이다.
     *
     * 주로 클라이언트 어플리케이션이 토스 페이먼츠가 자체적으로 제공하는 결제 창을 사용하는
     * 경우, 그래서 프론트 어플리케이션이 귀하의 백엔드 서버에 `billingKey` 와` customerKey`
     * 만을 전달해주어, 상세 간편 결제 수단 정보가 필요할 때 사용한다.
     *
     * @param billingKey 대상 정보의 {@link ITossBilling.billingKey}
     * @param input 고객 식별자 키
     * @returns 간편 결제 수단 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossBillingController.prototype.at = function (request, billingKey, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var tuple = FakeTossStorage_1.FakeTossStorage.billings.get(billingKey);
        if (tuple[0].customerKey !== input.customerKey)
            throw new nest.ForbiddenException("Different customer.");
        return tuple[0];
    };
    /**
     * 간편 결제에 등록한 수단으로 결제하기.
     *
     * `billing.pay` 는 간편 결제에 등록한 수단으로 결제를 진행하고자 할 때 호출하는 API
     * 함수이다.
     *
     * 그리고 `billing.pay` 는 결제 수단 중 유일하게, 클라이언트 어플리케이션이 토스
     * 페이먼츠가 제공하는 결제 창을 사용할 수 없어, 귀하의 백엔드 서버가 토스 페이먼츠의
     * API 함수를 직접 호출해야 하는 경우에 해당한다. 따라서 간편 결제에 관련하여 토스
     * 페이먼츠와 연동하는 백엔드 서버 및 프론트 어플리케이션을 개발할 때, 반드시 이 상황에
     * 대한 별도의 설계 및 개발이 필요하니, 이 점을 염두에 두기 바란다.
     *
     * 더하여 `billing.pay` 는 철저히 귀사 백엔드 서버의 판단 아래 호출되는 API 함수인지라,
     * 이를 통하여 이루어지는 결제는 일절 {@link payments.approve} 가 필요 없다. 다만
     * `billing.pay` 는 이처럼 부차적인 승인 과정 필요없이 그 즉시로 결제가 완성되니, 이를
     * 호출하는 상황에 대하여 세심히 주의를 기울일 필요가 있다
     *
     * @param billingKey 간편 결제에 등록한 수단의 {@link ITossBilling.billingKey}
     * @param input 주문 정보
     * @returns 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossBillingController.prototype.pay = function (request, billingKey, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var tuple = FakeTossStorage_1.FakeTossStorage.billings.get(billingKey);
        var card = tuple[1];
        var payment = __assign(__assign({}, FakeTossPaymentProvider_1.FakeTossPaymentProvider.get_common_props(input)), { method: "카드", type: "NORMAL", status: "DONE", approvedAt: new Date().toString(), discount: null, card: {
                company: "신한카드",
                number: card.cardNumber,
                installmentPlanMonths: 0,
                isInterestFree: true,
                approveNo: "temporary-card-approval-number",
                useCardPoint: false,
                cardType: "신용",
                ownerType: "개인",
                acquireStatus: "READY",
                receiptUrl: "somewhere-receipt-url",
            }, easyPay: null });
        FakeTossStorage_1.FakeTossStorage.payments.set(payment.paymentKey, payment);
        return payment;
    };
    __decorate([
        nestia_helper_1.default.TypedRoute.Post("authorizations/card"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossBillingController.prototype, "store", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Post("authorizations/:billingKey"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedParam("billingKey", "string")),
        __param(2, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossBillingController.prototype, "at", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Post(":billingKey"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedParam("billingKey", "string")),
        __param(2, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossBillingController.prototype, "pay", null);
    FakeTossBillingController = __decorate([
        nest.Controller("v1/billing")
    ], FakeTossBillingController);
    return FakeTossBillingController;
}());
exports.FakeTossBillingController = FakeTossBillingController;
//# sourceMappingURL=FakeTossBillingController.js.map