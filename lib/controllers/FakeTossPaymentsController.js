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
exports.FakeTossPaymentsController = void 0;
var express_1 = __importDefault(require("express"));
var nestia_helper_1 = __importDefault(require("nestia-helper"));
var nest = __importStar(require("@nestjs/common"));
var FakeTossPaymentProvider_1 = require("../providers/FakeTossPaymentProvider");
var FakeTossStorage_1 = require("../providers/FakeTossStorage");
var FakeTossUserAuth_1 = require("../providers/FakeTossUserAuth");
var FakeTossWebhookProvider_1 = require("../providers/FakeTossWebhookProvider");
var FakeTossPaymentsController = /** @class */ (function () {
    function FakeTossPaymentsController() {
    }
    /**
     * 결제 정보 조회하기.
     *
     * `payments.at` 은 결제 정보를 조회하는 함수이다.
     *
     * 주로 클라이언트 어플리케이션이 토스 페이먼츠가 자체적으로 제공하는 결제 창을 사용하는
     * 경우, 그래서 프론트 어플리케이션이 귀하의 백엔드 서버에 `paymentKey` 등 극히 일부의
     * 식별자 정보만을 전달해주어, 상세 결제 정보가 필요할 때 사용한다.
     *
     * 참고로 토스 페이먼츠는 다른 결제 PG 사들과 다르게, 클라이언트 어플리케이션에서 토스
     * 페이먼츠의 결제 창을 이용하여 진행한 결제가 바로 확정되는 것은 아니다. 귀사의 백엔드
     * 서버가 현재의 `payments.at` 을 통하여 해당 결제 정보를 확인하고, {@link approve} 를
     * 호출하여 직접 승인하기 전까지, 해당 결제는 확정되지 않으니, 이 점에 유의하기 바란다.
     *
     * @param paymentKey 결제 정보의 {@link ITossPayment.paymentKey}
     * @returns 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossPaymentsController.prototype.at = function (request, paymentKey) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        return FakeTossStorage_1.FakeTossStorage.payments.get(paymentKey);
    };
    /**
     * 카드로 결제하기.
     *
     * `payments.key_in` 은 카드를 이용한 결제를 할 때 호출되는 API 함수이다.
     *
     * 참고로 `payments.key_in` 는 클라이언트 어플리케이션이 토스 페이먼츠가 자체적으로
     * 제공하는 결제 창을 사용하는 경우, 귀하의 백엔드 서버가 이를 실 서비스에서 호출하는
     * 일은 없을 것이다. 다만, 고객이 카드를 통하여 결제하는 상황을 시뮬레이션하기 위하여,
     * 테스트 자동화 프로그램 수준에서 사용될 수는 있다.
     *
     * 그리고 귀하의 백엔드 서버가 `payments.key-in` 을 직접 호출하는 경우, 토스 페이먼츠
     * 서버는 이를 완전히 승인된 결제로 보고 바로 확정한다. 때문에 `payments.key-in` 을
     * 직접 호출하는 경우, 토스 페이먼츠의 결제 창을 이용하여 별도의 {@link approve} 가
     * 필요한 때 대비, 훨씬 더 세심한 주의가 요구된다.
     *
     * 더하여 만약 귀하의 백엔드 서버가 `fake-toss-payments-server` 를 이용하여 고객의
     * 카드 결제를 시뮬레이션하는 경우, {@link ITossCardPayment.IStore.__approved} 값을
     * `false` 로 하여 카드 결제의 확정을 고의로 회피할 수 있다. 이를 통하여 토스
     * 페이먼츠의 결제 창을 이용한 카드 결제의 경우, 별도의 {@link approve} 가 필요한
     * 상황을 시뮬레이션 할 수 있다.
     *
     * @param input 카드 결제 입력 정보
     * @returns 카드 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossPaymentsController.prototype.key_in = function (request, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var payment = __assign(__assign({}, FakeTossPaymentProvider_1.FakeTossPaymentProvider.get_common_props(input)), { method: "카드", type: "NORMAL", status: input.__approved !== false ? "DONE" : "IN_PROGRESS", approvedAt: input.__approved !== false ? new Date().toString() : null, discount: null, card: {
                company: "신한카드",
                number: input.cardNumber,
                installmentPlanMonths: input.cardInstallmentPlan || 0,
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
    /**
     * 결제 승인하기.
     *
     * 토스 페이먼츠는 귀사의 백엔드에서 일어난 결제가 아닌 프론트 어플리케이션의 결제 창에서
     * 이루어진 결제의 경우, 해당 서비스으 백엔드 서버로부터 결제를 승인받기 전까지, 이를
     * 확정하지 않는다. `payments.approve` 는 바로 이러한 상황에서, 해당 결제를 승인해주는
     * 함수이다.
     *
     * 만일 귀하가 `fake-toss-payments-server` 를 이용하여 결제를 시뮬레이션하는 경우라면,
     * 결제 관련 API 를 호출함에 있어 {@link ITossCardPayment.IStore.__approved} 내지
     * {@link ITossVirtualAccountPayment.IStore.__approved} 를 `false` 로 함으로써, 별도
     * 승인이 필요한 이러한 상황을 시뮬레이션 할 수 있다.
     *
     * @param input 주문 정보 확인
     * @returns 승인된 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossPaymentsController.prototype.approve = function (request, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var payment = FakeTossStorage_1.FakeTossStorage.payments.get(input.paymentKey);
        if (payment.orderId !== input.orderId)
            throw new nest.UnprocessableEntityException("Wrong orderId");
        else if (payment.totalAmount !== input.amount)
            throw new nest.UnprocessableEntityException("Wrong price.");
        payment.approvedAt = new Date().toString();
        if (payment.method !== "가상계좌" && payment.method !== "계좌이체")
            payment.status = "DONE";
        return payment;
    };
    /**
     * 결제 취소하기.
     *
     * `payments.cancel` 은 결제를 취소하는 API 이다.
     *
     * 결제 취소 입력 정보 {@link ITossPaymentCancel.IStore} 에는 취소 사유를 비롯하여,
     * 고객에게 환불해 줄 금액과 부가세 및 필요시 환불 계좌 정보 등을 입력하게 되어있다.
     *
     * @param paymentKey 결제 정보의 {@link ITossPayment.paymentKey}
     * @param input 취소 입력 정보
     * @returns 취소된 결제 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossPaymentsController.prototype.cancel = function (request, paymentKey, input) {
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        var payment = FakeTossStorage_1.FakeTossStorage.payments.get(paymentKey);
        payment.status = "CANCELED";
        payment.cancels = [
            {
                cancelAmount: input.cancelAmount || payment.totalAmount,
                cancelReason: input.cancelReason,
                taxFreeAmount: input.taxFreeAmount || 0,
                taxAmount: input.taxAmount || 0,
                refundableAmount: input.refundableAmount || payment.totalAmount,
                canceledAt: new Date().toString(),
            },
        ];
        FakeTossWebhookProvider_1.FakeTossWebhookProvider.webhook({
            eventType: "PAYMENT_STATUS_CHANGED",
            data: {
                paymentKey: payment.paymentKey,
                orderId: payment.orderId,
                status: "CANCELED",
            },
        }).catch(function () { });
        return payment;
    };
    __decorate([
        nestia_helper_1.default.TypedRoute.Get(":paymentKey"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedParam("paymentKey", "string")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Object)
    ], FakeTossPaymentsController.prototype, "at", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Post("key-in"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossPaymentsController.prototype, "key_in", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Post("confirm"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossPaymentsController.prototype, "approve", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Post(":paymentKey/cancel"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedParam("paymentKey", "string")),
        __param(2, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossPaymentsController.prototype, "cancel", null);
    FakeTossPaymentsController = __decorate([
        nest.Controller("v1/payments")
    ], FakeTossPaymentsController);
    return FakeTossPaymentsController;
}());
exports.FakeTossPaymentsController = FakeTossPaymentsController;
//# sourceMappingURL=FakeTossPaymentsController.js.map