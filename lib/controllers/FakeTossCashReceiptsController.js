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
exports.FakeTossCashReceiptsController = void 0;
var express_1 = __importDefault(require("express"));
var nestia_helper_1 = __importDefault(require("nestia-helper"));
var nest = __importStar(require("@nestjs/common"));
var uuid_1 = require("uuid");
var FakeTossStorage_1 = require("../providers/FakeTossStorage");
var FakeTossUserAuth_1 = require("../providers/FakeTossUserAuth");
var FakeTossCashReceiptsController = /** @class */ (function () {
    function FakeTossCashReceiptsController() {
    }
    /**
     * 현금 영수증 발행하기.
     *
     * @param input 입력 정보
     * @returns 현금 영수증 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossCashReceiptsController.prototype.store = function (request, input) {
        // VALIADTE
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        // CHECK PAYMENT
        var payment = FakeTossStorage_1.FakeTossStorage.payments.get(input.paymentKey);
        if (payment.orderId !== input.orderId)
            throw new nest.NotFoundException("Wrong orderId");
        else if (payment.cashReceipt !== null)
            throw new nest.UnprocessableEntityException("Duplicated cash receipt exists.");
        else if (payment.totalAmount < input.amount)
            throw new nest.UnprocessableEntityException("Input amount is greater than its payment.");
        // CONSTRUCT
        var receipt = {
            orderId: input.orderId,
            orderName: input.orderName,
            type: input.type,
            receiptKey: (0, uuid_1.v4)(),
            approvalNumber: (0, uuid_1.v4)(),
            approvedAt: new Date().toString(),
            canceledAt: null,
            receiptUrl: "https://github.com/samchon/tgrid",
            __paymentKey: payment.paymentKey,
        };
        FakeTossStorage_1.FakeTossStorage.cash_receipts.set(receipt.receiptKey, receipt);
        payment.cashReceipt = {
            type: receipt.type,
            amount: input.amount,
            taxFreeAmount: input.taxFreeAmount || 0,
            issueNumber: receipt.approvalNumber,
            receiptUrl: receipt.receiptUrl,
        };
        // RETURNS
        return receipt;
    };
    /**
     * 현금 영수증 취소하기.
     *
     * @param receiptKey 현금 영수증의 {@link ITossCashReceipt.receiptKey}
     * @param input 취소 입력 정보
     * @returns 취소된 현금 영수증 정보
     *
     * @author Jeongho Nam - https://github.com/samchon
     */
    FakeTossCashReceiptsController.prototype.cancel = function (request, receiptKey, input) {
        // VALIADTE
        FakeTossUserAuth_1.FakeTossUserAuth.authorize(request);
        input;
        // GET RECORDS
        var receipt = FakeTossStorage_1.FakeTossStorage.cash_receipts.get(receiptKey);
        var payment = FakeTossStorage_1.FakeTossStorage.payments.get(receipt.__paymentKey);
        // CHANGE
        receipt.canceledAt = new Date().toString();
        payment.cashReceipt = null;
        return receipt;
    };
    __decorate([
        nestia_helper_1.default.TypedRoute.Post(),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossCashReceiptsController.prototype, "store", null);
    __decorate([
        nestia_helper_1.default.TypedRoute.Post(":receiptKey/cancel"),
        __param(0, nest.Request()),
        __param(1, nestia_helper_1.default.TypedParam("receiptKey", "string")),
        __param(2, nestia_helper_1.default.TypedBody()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String, Object]),
        __metadata("design:returntype", Object)
    ], FakeTossCashReceiptsController.prototype, "cancel", null);
    FakeTossCashReceiptsController = __decorate([
        nest.Controller("v1/cash-receipts")
    ], FakeTossCashReceiptsController);
    return FakeTossCashReceiptsController;
}());
exports.FakeTossCashReceiptsController = FakeTossCashReceiptsController;
//# sourceMappingURL=FakeTossCashReceiptsController.js.map