"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.test_storage_capacity = void 0;
var random_1 = require("tstl/algorithm/random");
var typescript_json_1 = require("typescript-json");
var uuid_1 = require("uuid");
var api_1 = __importDefault(require("../../../api"));
var TestConnection_1 = require("../../internal/TestConnection");
var FakeTossStorage_1 = require("../../../providers/FakeTossStorage");
var RandomGenerator_1 = require("../../../utils/RandomGenerator");
var exception_must_be_thrown_1 = require("../../internal/exception_must_be_thrown");
var FakeTossConfiguration_1 = require("../../../FakeTossConfiguration");
function test_storage_capacity() {
    return __awaiter(this, void 0, void 0, function () {
        var capacity, previous, i, customerKey, billing, orderId, amount, payment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    capacity = FakeTossConfiguration_1.TossFakeConfiguration.EXPIRATION.capacity;
                    FakeTossStorage_1.FakeTossStorage.payments.clear();
                    FakeTossStorage_1.FakeTossStorage.billings.clear();
                    FakeTossConfiguration_1.TossFakeConfiguration.EXPIRATION.capacity = 1;
                    previous = null;
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < 10)) return [3 /*break*/, 9];
                    customerKey = (0, uuid_1.v4)();
                    return [4 /*yield*/, api_1.default.functional.v1.billing.authorizations.card.store(TestConnection_1.TestConnection.FAKE, {
                            customerKey: customerKey,
                            customerBirthday: "880311",
                            cardNumber: RandomGenerator_1.RandomGenerator.cardNumber(),
                            cardExpirationYear: (0, random_1.randint)(2022, 2028).toString(),
                            cardExpirationMonth: (0, random_1.randint)(1, 12).toString(),
                            cardPassword: RandomGenerator_1.RandomGenerator.digit(1, 4),
                        })];
                case 2:
                    billing = _a.sent();
                    (function (input) { (function (input, path) {
                        if (path === void 0) { path = "$input"; }
                        var $predicate = typescript_json_1.assertType.predicate;
                        var $ao = [
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.mId, exceptionable, function () { return ({
                                path: path + ".mId",
                                expected: "string",
                                value: input.mId
                            }); }) && $predicate("string" === typeof input.billingKey, exceptionable, function () { return ({
                                path: path + ".billingKey",
                                expected: "string",
                                value: input.billingKey
                            }); }) && $predicate("\uCE74\uB4DC" === input.method, exceptionable, function () { return ({
                                path: path + ".method",
                                expected: "\"\uCE74\uB4DC\"",
                                value: input.method
                            }); }) && $predicate("string" === typeof input.cardCompany, exceptionable, function () { return ({
                                path: path + ".cardCompany",
                                expected: "string",
                                value: input.cardCompany
                            }); }) && $predicate("string" === typeof input.cardNumber, exceptionable, function () { return ({
                                path: path + ".cardNumber",
                                expected: "string",
                                value: input.cardNumber
                            }); }) && $predicate("string" === typeof input.authenticatedAt, exceptionable, function () { return ({
                                path: path + ".authenticatedAt",
                                expected: "string",
                                value: input.authenticatedAt
                            }); }) && $predicate("string" === typeof input.customerKey, exceptionable, function () { return ({
                                path: path + ".customerKey",
                                expected: "string",
                                value: input.customerKey
                            }); }); }
                        ];
                        return $predicate(null !== input && $predicate("object" === typeof input && null !== input && $ao[0](input, path + "", true), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossBilling>",
                            value: input
                        }); }), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossBilling>",
                            value: input
                        }); });
                    })(input); return input; })(billing);
                    orderId = (0, uuid_1.v4)();
                    amount = 100;
                    return [4 /*yield*/, api_1.default.functional.v1.billing.pay(TestConnection_1.TestConnection.FAKE, billing.billingKey, {
                            method: "billing",
                            customerKey: customerKey,
                            billingKey: billing.billingKey,
                            orderId: orderId,
                            amount: amount,
                        })];
                case 3:
                    payment = _a.sent();
                    (function (input) { (function (input, path) {
                        if (path === void 0) { path = "$input"; }
                        var $predicate = typescript_json_1.assertType.predicate;
                        var $ao = [
                            function (input, path, exceptionable) { return $predicate(null !== input.card && $predicate("object" === typeof input.card && null !== input.card && $ao[1](input.card, path + ".card", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".card",
                                expected: "Resolve<ITossCardPayment.ICard>",
                                value: input.card
                            }); }), exceptionable, function () { return ({
                                path: path + ".card",
                                expected: "Resolve<ITossCardPayment.ICard>",
                                value: input.card
                            }); }) && $predicate(null === input.discount || "object" === typeof input.discount && null !== input.discount && $ao[2](input.discount, path + ".discount", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".discount",
                                expected: "(Resolve<ITossCardPayment.IDiscount> | null)",
                                value: input.discount
                            }); }) && $predicate(null === input.easyPay || "\uD1A0\uC2A4\uACB0\uC81C" === input.easyPay || "\uD398\uC774\uCF54" === input.easyPay || "\uC0BC\uC131\uD398\uC774" === input.easyPay, exceptionable, function () { return ({
                                path: path + ".easyPay",
                                expected: "(\"\uC0BC\uC131\uD398\uC774\" | \"\uD1A0\uC2A4\uACB0\uC81C\" | \"\uD398\uC774\uCF54\" | null)",
                                value: input.easyPay
                            }); }) && $predicate("\uCE74\uB4DC" === input.method, exceptionable, function () { return ({
                                path: path + ".method",
                                expected: "\"\uCE74\uB4DC\"",
                                value: input.method
                            }); }) && $predicate("NORMAL" === input.type || "BILLING" === input.type, exceptionable, function () { return ({
                                path: path + ".type",
                                expected: "(\"BILLING\" | \"NORMAL\")",
                                value: input.type
                            }); }) && $predicate("READY" === input.status || "IN_PROGRESS" === input.status || "WAITING_FOR_DEPOSIT" === input.status || "DONE" === input.status || "CANCELED" === input.status || "PARTIAL_CANCELED" === input.status || "ABORTED" === input.status || "EXPIRED" === input.status, exceptionable, function () { return ({
                                path: path + ".status",
                                expected: "(\"ABORTED\" | \"CANCELED\" | \"DONE\" | \"EXPIRED\" | \"IN_PROGRESS\" | \"PARTIAL_CANCELED\" | \"READY\" | \"WAITING_FOR_DEPOSIT\")",
                                value: input.status
                            }); }) && $predicate("string" === typeof input.mId, exceptionable, function () { return ({
                                path: path + ".mId",
                                expected: "string",
                                value: input.mId
                            }); }) && $predicate("string" === typeof input.version, exceptionable, function () { return ({
                                path: path + ".version",
                                expected: "string",
                                value: input.version
                            }); }) && $predicate("string" === typeof input.paymentKey, exceptionable, function () { return ({
                                path: path + ".paymentKey",
                                expected: "string",
                                value: input.paymentKey
                            }); }) && $predicate("string" === typeof input.orderId, exceptionable, function () { return ({
                                path: path + ".orderId",
                                expected: "string",
                                value: input.orderId
                            }); }) && $predicate("string" === typeof input.transactionKey, exceptionable, function () { return ({
                                path: path + ".transactionKey",
                                expected: "string",
                                value: input.transactionKey
                            }); }) && $predicate("string" === typeof input.orderName, exceptionable, function () { return ({
                                path: path + ".orderName",
                                expected: "string",
                                value: input.orderName
                            }); }) && $predicate("string" === typeof input.currency, exceptionable, function () { return ({
                                path: path + ".currency",
                                expected: "string",
                                value: input.currency
                            }); }) && $predicate("number" === typeof input.totalAmount, exceptionable, function () { return ({
                                path: path + ".totalAmount",
                                expected: "number",
                                value: input.totalAmount
                            }); }) && $predicate("number" === typeof input.balanceAmount, exceptionable, function () { return ({
                                path: path + ".balanceAmount",
                                expected: "number",
                                value: input.balanceAmount
                            }); }) && $predicate("number" === typeof input.suppliedAmount, exceptionable, function () { return ({
                                path: path + ".suppliedAmount",
                                expected: "number",
                                value: input.suppliedAmount
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("number" === typeof input.vat, exceptionable, function () { return ({
                                path: path + ".vat",
                                expected: "number",
                                value: input.vat
                            }); }) && $predicate("boolean" === typeof input.useEscrow, exceptionable, function () { return ({
                                path: path + ".useEscrow",
                                expected: "boolean",
                                value: input.useEscrow
                            }); }) && $predicate("boolean" === typeof input.cultureExpense, exceptionable, function () { return ({
                                path: path + ".cultureExpense",
                                expected: "boolean",
                                value: input.cultureExpense
                            }); }) && $predicate("string" === typeof input.requestedAt, exceptionable, function () { return ({
                                path: path + ".requestedAt",
                                expected: "string",
                                value: input.requestedAt
                            }); }) && $predicate(null === input.approvedAt || "string" === typeof input.approvedAt, exceptionable, function () { return ({
                                path: path + ".approvedAt",
                                expected: "(null | string)",
                                value: input.approvedAt
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index1) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[3](elem, path + ".cancels[" + index1 + "]", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cancels[" + index1 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }), exceptionable, function () { return ({
                                path: path + ".cancels[" + index1 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }); }), exceptionable, function () { return ({
                                path: path + ".cancels",
                                expected: "(Array<Resolve<ITossPaymentCancel>> | null)",
                                value: input.cancels
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[4](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cashReceipt",
                                expected: "(Resolve<ITossCashReceipt.ISummary> | null)",
                                value: input.cashReceipt
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.company, exceptionable, function () { return ({
                                path: path + ".company",
                                expected: "string",
                                value: input.company
                            }); }) && $predicate("string" === typeof input.number, exceptionable, function () { return ({
                                path: path + ".number",
                                expected: "string",
                                value: input.number
                            }); }) && $predicate("number" === typeof input.installmentPlanMonths, exceptionable, function () { return ({
                                path: path + ".installmentPlanMonths",
                                expected: "number",
                                value: input.installmentPlanMonths
                            }); }) && $predicate("boolean" === typeof input.isInterestFree, exceptionable, function () { return ({
                                path: path + ".isInterestFree",
                                expected: "boolean",
                                value: input.isInterestFree
                            }); }) && $predicate("string" === typeof input.approveNo, exceptionable, function () { return ({
                                path: path + ".approveNo",
                                expected: "string",
                                value: input.approveNo
                            }); }) && $predicate(false === input.useCardPoint, exceptionable, function () { return ({
                                path: path + ".useCardPoint",
                                expected: "false",
                                value: input.useCardPoint
                            }); }) && $predicate("\uC2E0\uC6A9" === input.cardType || "\uCCB4\uD06C" === input.cardType || "\uAE30\uD504\uD2B8" === input.cardType, exceptionable, function () { return ({
                                path: path + ".cardType",
                                expected: "(\"\uAE30\uD504\uD2B8\" | \"\uC2E0\uC6A9\" | \"\uCCB4\uD06C\")",
                                value: input.cardType
                            }); }) && $predicate("\uAC1C\uC778" === input.ownerType || "\uBC95\uC778" === input.ownerType, exceptionable, function () { return ({
                                path: path + ".ownerType",
                                expected: "(\"\uAC1C\uC778\" | \"\uBC95\uC778\")",
                                value: input.ownerType
                            }); }) && $predicate("READY" === input.acquireStatus || "CANCELED" === input.acquireStatus || "REQUESTED" === input.acquireStatus || "COMPLETED" === input.acquireStatus || "CANCEL_REQUESTED" === input.acquireStatus, exceptionable, function () { return ({
                                path: path + ".acquireStatus",
                                expected: "(\"CANCELED\" | \"CANCEL_REQUESTED\" | \"COMPLETED\" | \"READY\" | \"REQUESTED\")",
                                value: input.acquireStatus
                            }); }) && $predicate("string" === typeof input.receiptUrl, exceptionable, function () { return ({
                                path: path + ".receiptUrl",
                                expected: "string",
                                value: input.receiptUrl
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("number" === typeof input.amount, exceptionable, function () { return ({
                                path: path + ".amount",
                                expected: "number",
                                value: input.amount
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("number" === typeof input.cancelAmount, exceptionable, function () { return ({
                                path: path + ".cancelAmount",
                                expected: "number",
                                value: input.cancelAmount
                            }); }) && $predicate("string" === typeof input.cancelReason, exceptionable, function () { return ({
                                path: path + ".cancelReason",
                                expected: "string",
                                value: input.cancelReason
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("number" === typeof input.taxAmount, exceptionable, function () { return ({
                                path: path + ".taxAmount",
                                expected: "number",
                                value: input.taxAmount
                            }); }) && $predicate("number" === typeof input.refundableAmount, exceptionable, function () { return ({
                                path: path + ".refundableAmount",
                                expected: "number",
                                value: input.refundableAmount
                            }); }) && $predicate("string" === typeof input.canceledAt, exceptionable, function () { return ({
                                path: path + ".canceledAt",
                                expected: "string",
                                value: input.canceledAt
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("\uC18C\uB4DD\uACF5\uC81C" === input.type || "\uC9C0\uCD9C\uC99D\uBE59" === input.type, exceptionable, function () { return ({
                                path: path + ".type",
                                expected: "(\"\uC18C\uB4DD\uACF5\uC81C\" | \"\uC9C0\uCD9C\uC99D\uBE59\")",
                                value: input.type
                            }); }) && $predicate("number" === typeof input.amount, exceptionable, function () { return ({
                                path: path + ".amount",
                                expected: "number",
                                value: input.amount
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("string" === typeof input.issueNumber, exceptionable, function () { return ({
                                path: path + ".issueNumber",
                                expected: "string",
                                value: input.issueNumber
                            }); }) && $predicate("string" === typeof input.receiptUrl, exceptionable, function () { return ({
                                path: path + ".receiptUrl",
                                expected: "string",
                                value: input.receiptUrl
                            }); }); },
                            function (input, path, exceptionable) { return $predicate(null !== input.giftCertificate && $predicate("object" === typeof input.giftCertificate && null !== input.giftCertificate && $ao[6](input.giftCertificate, path + ".giftCertificate", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".giftCertificate",
                                expected: "Resolve<ITossGiftCertificatePayment.IGiftCertificate>",
                                value: input.giftCertificate
                            }); }), exceptionable, function () { return ({
                                path: path + ".giftCertificate",
                                expected: "Resolve<ITossGiftCertificatePayment.IGiftCertificate>",
                                value: input.giftCertificate
                            }); }) && $predicate("\uC0C1\uD488\uAD8C" === input.method, exceptionable, function () { return ({
                                path: path + ".method",
                                expected: "\"\uC0C1\uD488\uAD8C\"",
                                value: input.method
                            }); }) && $predicate("NORMAL" === input.type, exceptionable, function () { return ({
                                path: path + ".type",
                                expected: "\"NORMAL\"",
                                value: input.type
                            }); }) && $predicate("READY" === input.status || "IN_PROGRESS" === input.status || "WAITING_FOR_DEPOSIT" === input.status || "DONE" === input.status || "CANCELED" === input.status || "PARTIAL_CANCELED" === input.status || "ABORTED" === input.status || "EXPIRED" === input.status, exceptionable, function () { return ({
                                path: path + ".status",
                                expected: "(\"ABORTED\" | \"CANCELED\" | \"DONE\" | \"EXPIRED\" | \"IN_PROGRESS\" | \"PARTIAL_CANCELED\" | \"READY\" | \"WAITING_FOR_DEPOSIT\")",
                                value: input.status
                            }); }) && $predicate("string" === typeof input.mId, exceptionable, function () { return ({
                                path: path + ".mId",
                                expected: "string",
                                value: input.mId
                            }); }) && $predicate("string" === typeof input.version, exceptionable, function () { return ({
                                path: path + ".version",
                                expected: "string",
                                value: input.version
                            }); }) && $predicate("string" === typeof input.paymentKey, exceptionable, function () { return ({
                                path: path + ".paymentKey",
                                expected: "string",
                                value: input.paymentKey
                            }); }) && $predicate("string" === typeof input.orderId, exceptionable, function () { return ({
                                path: path + ".orderId",
                                expected: "string",
                                value: input.orderId
                            }); }) && $predicate("string" === typeof input.transactionKey, exceptionable, function () { return ({
                                path: path + ".transactionKey",
                                expected: "string",
                                value: input.transactionKey
                            }); }) && $predicate("string" === typeof input.orderName, exceptionable, function () { return ({
                                path: path + ".orderName",
                                expected: "string",
                                value: input.orderName
                            }); }) && $predicate("string" === typeof input.currency, exceptionable, function () { return ({
                                path: path + ".currency",
                                expected: "string",
                                value: input.currency
                            }); }) && $predicate("number" === typeof input.totalAmount, exceptionable, function () { return ({
                                path: path + ".totalAmount",
                                expected: "number",
                                value: input.totalAmount
                            }); }) && $predicate("number" === typeof input.balanceAmount, exceptionable, function () { return ({
                                path: path + ".balanceAmount",
                                expected: "number",
                                value: input.balanceAmount
                            }); }) && $predicate("number" === typeof input.suppliedAmount, exceptionable, function () { return ({
                                path: path + ".suppliedAmount",
                                expected: "number",
                                value: input.suppliedAmount
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("number" === typeof input.vat, exceptionable, function () { return ({
                                path: path + ".vat",
                                expected: "number",
                                value: input.vat
                            }); }) && $predicate("boolean" === typeof input.useEscrow, exceptionable, function () { return ({
                                path: path + ".useEscrow",
                                expected: "boolean",
                                value: input.useEscrow
                            }); }) && $predicate("boolean" === typeof input.cultureExpense, exceptionable, function () { return ({
                                path: path + ".cultureExpense",
                                expected: "boolean",
                                value: input.cultureExpense
                            }); }) && $predicate("string" === typeof input.requestedAt, exceptionable, function () { return ({
                                path: path + ".requestedAt",
                                expected: "string",
                                value: input.requestedAt
                            }); }) && $predicate(null === input.approvedAt || "string" === typeof input.approvedAt, exceptionable, function () { return ({
                                path: path + ".approvedAt",
                                expected: "(null | string)",
                                value: input.approvedAt
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index2) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[3](elem, path + ".cancels[" + index2 + "]", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cancels[" + index2 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }), exceptionable, function () { return ({
                                path: path + ".cancels[" + index2 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }); }), exceptionable, function () { return ({
                                path: path + ".cancels",
                                expected: "(Array<Resolve<ITossPaymentCancel>> | null)",
                                value: input.cancels
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[4](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cashReceipt",
                                expected: "(Resolve<ITossCashReceipt.ISummary> | null)",
                                value: input.cashReceipt
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.approveNo, exceptionable, function () { return ({
                                path: path + ".approveNo",
                                expected: "string",
                                value: input.approveNo
                            }); }) && $predicate("COMPLETE" === input.settlementStatus || "INCOMPLETE" === input.settlementStatus, exceptionable, function () { return ({
                                path: path + ".settlementStatus",
                                expected: "(\"COMPLETE\" | \"INCOMPLETE\")",
                                value: input.settlementStatus
                            }); }); },
                            function (input, path, exceptionable) { return $predicate(null !== input.mobilePhone && $predicate("object" === typeof input.mobilePhone && null !== input.mobilePhone && $ao[8](input.mobilePhone, path + ".mobilePhone", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".mobilePhone",
                                expected: "Resolve<ITossMobilePhonePayment.IMobilePhone>",
                                value: input.mobilePhone
                            }); }), exceptionable, function () { return ({
                                path: path + ".mobilePhone",
                                expected: "Resolve<ITossMobilePhonePayment.IMobilePhone>",
                                value: input.mobilePhone
                            }); }) && $predicate("\uD734\uB300\uD3F0" === input.method, exceptionable, function () { return ({
                                path: path + ".method",
                                expected: "\"\uD734\uB300\uD3F0\"",
                                value: input.method
                            }); }) && $predicate("NORMAL" === input.type, exceptionable, function () { return ({
                                path: path + ".type",
                                expected: "\"NORMAL\"",
                                value: input.type
                            }); }) && $predicate("READY" === input.status || "IN_PROGRESS" === input.status || "WAITING_FOR_DEPOSIT" === input.status || "DONE" === input.status || "CANCELED" === input.status || "PARTIAL_CANCELED" === input.status || "ABORTED" === input.status || "EXPIRED" === input.status, exceptionable, function () { return ({
                                path: path + ".status",
                                expected: "(\"ABORTED\" | \"CANCELED\" | \"DONE\" | \"EXPIRED\" | \"IN_PROGRESS\" | \"PARTIAL_CANCELED\" | \"READY\" | \"WAITING_FOR_DEPOSIT\")",
                                value: input.status
                            }); }) && $predicate("string" === typeof input.mId, exceptionable, function () { return ({
                                path: path + ".mId",
                                expected: "string",
                                value: input.mId
                            }); }) && $predicate("string" === typeof input.version, exceptionable, function () { return ({
                                path: path + ".version",
                                expected: "string",
                                value: input.version
                            }); }) && $predicate("string" === typeof input.paymentKey, exceptionable, function () { return ({
                                path: path + ".paymentKey",
                                expected: "string",
                                value: input.paymentKey
                            }); }) && $predicate("string" === typeof input.orderId, exceptionable, function () { return ({
                                path: path + ".orderId",
                                expected: "string",
                                value: input.orderId
                            }); }) && $predicate("string" === typeof input.transactionKey, exceptionable, function () { return ({
                                path: path + ".transactionKey",
                                expected: "string",
                                value: input.transactionKey
                            }); }) && $predicate("string" === typeof input.orderName, exceptionable, function () { return ({
                                path: path + ".orderName",
                                expected: "string",
                                value: input.orderName
                            }); }) && $predicate("string" === typeof input.currency, exceptionable, function () { return ({
                                path: path + ".currency",
                                expected: "string",
                                value: input.currency
                            }); }) && $predicate("number" === typeof input.totalAmount, exceptionable, function () { return ({
                                path: path + ".totalAmount",
                                expected: "number",
                                value: input.totalAmount
                            }); }) && $predicate("number" === typeof input.balanceAmount, exceptionable, function () { return ({
                                path: path + ".balanceAmount",
                                expected: "number",
                                value: input.balanceAmount
                            }); }) && $predicate("number" === typeof input.suppliedAmount, exceptionable, function () { return ({
                                path: path + ".suppliedAmount",
                                expected: "number",
                                value: input.suppliedAmount
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("number" === typeof input.vat, exceptionable, function () { return ({
                                path: path + ".vat",
                                expected: "number",
                                value: input.vat
                            }); }) && $predicate("boolean" === typeof input.useEscrow, exceptionable, function () { return ({
                                path: path + ".useEscrow",
                                expected: "boolean",
                                value: input.useEscrow
                            }); }) && $predicate("boolean" === typeof input.cultureExpense, exceptionable, function () { return ({
                                path: path + ".cultureExpense",
                                expected: "boolean",
                                value: input.cultureExpense
                            }); }) && $predicate("string" === typeof input.requestedAt, exceptionable, function () { return ({
                                path: path + ".requestedAt",
                                expected: "string",
                                value: input.requestedAt
                            }); }) && $predicate(null === input.approvedAt || "string" === typeof input.approvedAt, exceptionable, function () { return ({
                                path: path + ".approvedAt",
                                expected: "(null | string)",
                                value: input.approvedAt
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index3) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[3](elem, path + ".cancels[" + index3 + "]", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cancels[" + index3 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }), exceptionable, function () { return ({
                                path: path + ".cancels[" + index3 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }); }), exceptionable, function () { return ({
                                path: path + ".cancels",
                                expected: "(Array<Resolve<ITossPaymentCancel>> | null)",
                                value: input.cancels
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[4](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cashReceipt",
                                expected: "(Resolve<ITossCashReceipt.ISummary> | null)",
                                value: input.cashReceipt
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.carrier, exceptionable, function () { return ({
                                path: path + ".carrier",
                                expected: "string",
                                value: input.carrier
                            }); }) && $predicate("string" === typeof input.customerMobilePhone, exceptionable, function () { return ({
                                path: path + ".customerMobilePhone",
                                expected: "string",
                                value: input.customerMobilePhone
                            }); }) && $predicate("COMPLETED" === input.settlementStatus || "INCOMPLETED" === input.settlementStatus, exceptionable, function () { return ({
                                path: path + ".settlementStatus",
                                expected: "(\"COMPLETED\" | \"INCOMPLETED\")",
                                value: input.settlementStatus
                            }); }); },
                            function (input, path, exceptionable) { return $predicate(null !== input.transfer && $predicate("object" === typeof input.transfer && null !== input.transfer && $ao[10](input.transfer, path + ".transfer", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".transfer",
                                expected: "Resolve<ITossTransferPayment.ITransfer>",
                                value: input.transfer
                            }); }), exceptionable, function () { return ({
                                path: path + ".transfer",
                                expected: "Resolve<ITossTransferPayment.ITransfer>",
                                value: input.transfer
                            }); }) && $predicate("\uACC4\uC88C\uC774\uCCB4" === input.method, exceptionable, function () { return ({
                                path: path + ".method",
                                expected: "\"\uACC4\uC88C\uC774\uCCB4\"",
                                value: input.method
                            }); }) && $predicate("NORMAL" === input.type, exceptionable, function () { return ({
                                path: path + ".type",
                                expected: "\"NORMAL\"",
                                value: input.type
                            }); }) && $predicate("READY" === input.status || "IN_PROGRESS" === input.status || "WAITING_FOR_DEPOSIT" === input.status || "DONE" === input.status || "CANCELED" === input.status || "PARTIAL_CANCELED" === input.status || "ABORTED" === input.status || "EXPIRED" === input.status, exceptionable, function () { return ({
                                path: path + ".status",
                                expected: "(\"ABORTED\" | \"CANCELED\" | \"DONE\" | \"EXPIRED\" | \"IN_PROGRESS\" | \"PARTIAL_CANCELED\" | \"READY\" | \"WAITING_FOR_DEPOSIT\")",
                                value: input.status
                            }); }) && $predicate("string" === typeof input.mId, exceptionable, function () { return ({
                                path: path + ".mId",
                                expected: "string",
                                value: input.mId
                            }); }) && $predicate("string" === typeof input.version, exceptionable, function () { return ({
                                path: path + ".version",
                                expected: "string",
                                value: input.version
                            }); }) && $predicate("string" === typeof input.paymentKey, exceptionable, function () { return ({
                                path: path + ".paymentKey",
                                expected: "string",
                                value: input.paymentKey
                            }); }) && $predicate("string" === typeof input.orderId, exceptionable, function () { return ({
                                path: path + ".orderId",
                                expected: "string",
                                value: input.orderId
                            }); }) && $predicate("string" === typeof input.transactionKey, exceptionable, function () { return ({
                                path: path + ".transactionKey",
                                expected: "string",
                                value: input.transactionKey
                            }); }) && $predicate("string" === typeof input.orderName, exceptionable, function () { return ({
                                path: path + ".orderName",
                                expected: "string",
                                value: input.orderName
                            }); }) && $predicate("string" === typeof input.currency, exceptionable, function () { return ({
                                path: path + ".currency",
                                expected: "string",
                                value: input.currency
                            }); }) && $predicate("number" === typeof input.totalAmount, exceptionable, function () { return ({
                                path: path + ".totalAmount",
                                expected: "number",
                                value: input.totalAmount
                            }); }) && $predicate("number" === typeof input.balanceAmount, exceptionable, function () { return ({
                                path: path + ".balanceAmount",
                                expected: "number",
                                value: input.balanceAmount
                            }); }) && $predicate("number" === typeof input.suppliedAmount, exceptionable, function () { return ({
                                path: path + ".suppliedAmount",
                                expected: "number",
                                value: input.suppliedAmount
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("number" === typeof input.vat, exceptionable, function () { return ({
                                path: path + ".vat",
                                expected: "number",
                                value: input.vat
                            }); }) && $predicate("boolean" === typeof input.useEscrow, exceptionable, function () { return ({
                                path: path + ".useEscrow",
                                expected: "boolean",
                                value: input.useEscrow
                            }); }) && $predicate("boolean" === typeof input.cultureExpense, exceptionable, function () { return ({
                                path: path + ".cultureExpense",
                                expected: "boolean",
                                value: input.cultureExpense
                            }); }) && $predicate("string" === typeof input.requestedAt, exceptionable, function () { return ({
                                path: path + ".requestedAt",
                                expected: "string",
                                value: input.requestedAt
                            }); }) && $predicate(null === input.approvedAt || "string" === typeof input.approvedAt, exceptionable, function () { return ({
                                path: path + ".approvedAt",
                                expected: "(null | string)",
                                value: input.approvedAt
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index4) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[3](elem, path + ".cancels[" + index4 + "]", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cancels[" + index4 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }), exceptionable, function () { return ({
                                path: path + ".cancels[" + index4 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }); }), exceptionable, function () { return ({
                                path: path + ".cancels",
                                expected: "(Array<Resolve<ITossPaymentCancel>> | null)",
                                value: input.cancels
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[4](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cashReceipt",
                                expected: "(Resolve<ITossCashReceipt.ISummary> | null)",
                                value: input.cashReceipt
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.bank, exceptionable, function () { return ({
                                path: path + ".bank",
                                expected: "string",
                                value: input.bank
                            }); }) && $predicate("COMPLETED" === input.settlementStatus || "INCOMPLETED" === input.settlementStatus, exceptionable, function () { return ({
                                path: path + ".settlementStatus",
                                expected: "(\"COMPLETED\" | \"INCOMPLETED\")",
                                value: input.settlementStatus
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.secret, exceptionable, function () { return ({
                                path: path + ".secret",
                                expected: "string",
                                value: input.secret
                            }); }) && $predicate(null !== input.virtualAccount && $predicate("object" === typeof input.virtualAccount && null !== input.virtualAccount && $ao[12](input.virtualAccount, path + ".virtualAccount", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".virtualAccount",
                                expected: "Resolve<ITossVirtualAccountPayment.IVirtualAccount>",
                                value: input.virtualAccount
                            }); }), exceptionable, function () { return ({
                                path: path + ".virtualAccount",
                                expected: "Resolve<ITossVirtualAccountPayment.IVirtualAccount>",
                                value: input.virtualAccount
                            }); }) && $predicate("\uAC00\uC0C1\uACC4\uC88C" === input.method, exceptionable, function () { return ({
                                path: path + ".method",
                                expected: "\"\uAC00\uC0C1\uACC4\uC88C\"",
                                value: input.method
                            }); }) && $predicate("NORMAL" === input.type, exceptionable, function () { return ({
                                path: path + ".type",
                                expected: "\"NORMAL\"",
                                value: input.type
                            }); }) && $predicate("READY" === input.status || "IN_PROGRESS" === input.status || "WAITING_FOR_DEPOSIT" === input.status || "DONE" === input.status || "CANCELED" === input.status || "PARTIAL_CANCELED" === input.status || "ABORTED" === input.status || "EXPIRED" === input.status, exceptionable, function () { return ({
                                path: path + ".status",
                                expected: "(\"ABORTED\" | \"CANCELED\" | \"DONE\" | \"EXPIRED\" | \"IN_PROGRESS\" | \"PARTIAL_CANCELED\" | \"READY\" | \"WAITING_FOR_DEPOSIT\")",
                                value: input.status
                            }); }) && $predicate("string" === typeof input.mId, exceptionable, function () { return ({
                                path: path + ".mId",
                                expected: "string",
                                value: input.mId
                            }); }) && $predicate("string" === typeof input.version, exceptionable, function () { return ({
                                path: path + ".version",
                                expected: "string",
                                value: input.version
                            }); }) && $predicate("string" === typeof input.paymentKey, exceptionable, function () { return ({
                                path: path + ".paymentKey",
                                expected: "string",
                                value: input.paymentKey
                            }); }) && $predicate("string" === typeof input.orderId, exceptionable, function () { return ({
                                path: path + ".orderId",
                                expected: "string",
                                value: input.orderId
                            }); }) && $predicate("string" === typeof input.transactionKey, exceptionable, function () { return ({
                                path: path + ".transactionKey",
                                expected: "string",
                                value: input.transactionKey
                            }); }) && $predicate("string" === typeof input.orderName, exceptionable, function () { return ({
                                path: path + ".orderName",
                                expected: "string",
                                value: input.orderName
                            }); }) && $predicate("string" === typeof input.currency, exceptionable, function () { return ({
                                path: path + ".currency",
                                expected: "string",
                                value: input.currency
                            }); }) && $predicate("number" === typeof input.totalAmount, exceptionable, function () { return ({
                                path: path + ".totalAmount",
                                expected: "number",
                                value: input.totalAmount
                            }); }) && $predicate("number" === typeof input.balanceAmount, exceptionable, function () { return ({
                                path: path + ".balanceAmount",
                                expected: "number",
                                value: input.balanceAmount
                            }); }) && $predicate("number" === typeof input.suppliedAmount, exceptionable, function () { return ({
                                path: path + ".suppliedAmount",
                                expected: "number",
                                value: input.suppliedAmount
                            }); }) && $predicate("number" === typeof input.taxFreeAmount, exceptionable, function () { return ({
                                path: path + ".taxFreeAmount",
                                expected: "number",
                                value: input.taxFreeAmount
                            }); }) && $predicate("number" === typeof input.vat, exceptionable, function () { return ({
                                path: path + ".vat",
                                expected: "number",
                                value: input.vat
                            }); }) && $predicate("boolean" === typeof input.useEscrow, exceptionable, function () { return ({
                                path: path + ".useEscrow",
                                expected: "boolean",
                                value: input.useEscrow
                            }); }) && $predicate("boolean" === typeof input.cultureExpense, exceptionable, function () { return ({
                                path: path + ".cultureExpense",
                                expected: "boolean",
                                value: input.cultureExpense
                            }); }) && $predicate("string" === typeof input.requestedAt, exceptionable, function () { return ({
                                path: path + ".requestedAt",
                                expected: "string",
                                value: input.requestedAt
                            }); }) && $predicate(null === input.approvedAt || "string" === typeof input.approvedAt, exceptionable, function () { return ({
                                path: path + ".approvedAt",
                                expected: "(null | string)",
                                value: input.approvedAt
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index5) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[3](elem, path + ".cancels[" + index5 + "]", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cancels[" + index5 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }), exceptionable, function () { return ({
                                path: path + ".cancels[" + index5 + "]",
                                expected: "Resolve<ITossPaymentCancel>",
                                value: elem
                            }); }); }), exceptionable, function () { return ({
                                path: path + ".cancels",
                                expected: "(Array<Resolve<ITossPaymentCancel>> | null)",
                                value: input.cancels
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[4](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
                                path: path + ".cashReceipt",
                                expected: "(Resolve<ITossCashReceipt.ISummary> | null)",
                                value: input.cashReceipt
                            }); }); },
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.accountNumber, exceptionable, function () { return ({
                                path: path + ".accountNumber",
                                expected: "string",
                                value: input.accountNumber
                            }); }) && $predicate("\uC77C\uBC18" === input.accountType || "\uACE0\uC815" === input.accountType, exceptionable, function () { return ({
                                path: path + ".accountType",
                                expected: "(\"\uACE0\uC815\" | \"\uC77C\uBC18\")",
                                value: input.accountType
                            }); }) && $predicate("string" === typeof input.bank, exceptionable, function () { return ({
                                path: path + ".bank",
                                expected: "string",
                                value: input.bank
                            }); }) && $predicate("string" === typeof input.customerName, exceptionable, function () { return ({
                                path: path + ".customerName",
                                expected: "string",
                                value: input.customerName
                            }); }) && $predicate("string" === typeof input.dueDate, exceptionable, function () { return ({
                                path: path + ".dueDate",
                                expected: "string",
                                value: input.dueDate
                            }); }) && $predicate("boolean" === typeof input.expired, exceptionable, function () { return ({
                                path: path + ".expired",
                                expected: "boolean",
                                value: input.expired
                            }); }) && $predicate("COMPLETED" === input.settlementStatus || "INCOMPLETED" === input.settlementStatus, exceptionable, function () { return ({
                                path: path + ".settlementStatus",
                                expected: "(\"COMPLETED\" | \"INCOMPLETED\")",
                                value: input.settlementStatus
                            }); }) && $predicate("COMPLETED" === input.refundStatus || "NONE" === input.refundStatus || "FAILED" === input.refundStatus || "PENDING" === input.refundStatus || "PARTIAL_FAILED" === input.refundStatus, exceptionable, function () { return ({
                                path: path + ".refundStatus",
                                expected: "(\"COMPLETED\" | \"FAILED\" | \"NONE\" | \"PARTIAL_FAILED\" | \"PENDING\")",
                                value: input.refundStatus
                            }); }); }
                        ];
                        var $au = [
                            function (input, path, exceptionable) { return (function () {
                                if (undefined !== input.easyPay)
                                    return $ao[0](input, path, true && exceptionable);
                                if ("\uC0C1\uD488\uAD8C" === input.method)
                                    return $ao[5](input, path, true && exceptionable);
                                if ("\uD734\uB300\uD3F0" === input.method)
                                    return $ao[7](input, path, true && exceptionable);
                                if ("\uACC4\uC88C\uC774\uCCB4" === input.method)
                                    return $ao[9](input, path, true && exceptionable);
                                if ("\uAC00\uC0C1\uACC4\uC88C" === input.method)
                                    return $ao[11](input, path, true && exceptionable);
                                return false;
                            })(); }
                        ];
                        return $predicate(null !== input && $predicate("object" === typeof input && null !== input && $au[0](input, path + "", true), true, function () { return ({
                            path: path + "",
                            expected: "(Resolve<ITossCardPayment> | Resolve<ITossGiftCertificatePayment> | Resolve<ITossMobilePhonePayment> | Resolve<ITossTransferPayment> | Resolve<ITossVirtualAccountPayment>)",
                            value: input
                        }); }), true, function () { return ({
                            path: path + "",
                            expected: "(Resolve<ITossCardPayment> | Resolve<ITossGiftCertificatePayment> | Resolve<ITossMobilePhonePayment> | Resolve<ITossTransferPayment> | Resolve<ITossVirtualAccountPayment>)",
                            value: input
                        }); });
                    })(input); return input; })(payment);
                    // APPROVE THE PAYMENT
                    return [4 /*yield*/, api_1.default.functional.v1.payments.confirm.approve(TestConnection_1.TestConnection.FAKE, {
                            paymentKey: payment.paymentKey,
                            orderId: orderId,
                            amount: amount,
                        })];
                case 4:
                    // APPROVE THE PAYMENT
                    _a.sent();
                    if (!(previous !== null)) return [3 /*break*/, 6];
                    return [4 /*yield*/, (0, exception_must_be_thrown_1.exception_must_be_thrown)("VirtualTossStorage.payments.get() for expired record", function () {
                            return api_1.default.functional.v1.payments.at(TestConnection_1.TestConnection.FAKE, previous);
                        })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, api_1.default.functional.v1.payments.at(TestConnection_1.TestConnection.FAKE, payment.paymentKey)];
                case 7:
                    _a.sent();
                    previous = payment.paymentKey;
                    _a.label = 8;
                case 8:
                    ++i;
                    return [3 /*break*/, 1];
                case 9:
                    FakeTossConfiguration_1.TossFakeConfiguration.EXPIRATION.capacity = capacity;
                    return [2 /*return*/];
            }
        });
    });
}
exports.test_storage_capacity = test_storage_capacity;
//# sourceMappingURL=test_storage_capacity.js.map