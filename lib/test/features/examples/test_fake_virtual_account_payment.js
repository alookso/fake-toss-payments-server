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
exports.test_fake_virtual_account_payment = void 0;
var typescript_json_1 = require("typescript-json");
var uuid_1 = require("uuid");
var api_1 = __importDefault(require("../../../api"));
var FakeTossStorage_1 = require("../../../providers/FakeTossStorage");
var RandomGenerator_1 = require("../../../utils/RandomGenerator");
var TestConnection_1 = require("../../internal/TestConnection");
function test_fake_virtual_account_payment() {
    return __awaiter(this, void 0, void 0, function () {
        var payment, approved, reloaded, webhook;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_1.default.functional.v1.virtual_accounts.store(TestConnection_1.TestConnection.FAKE, {
                        // 가싱 계좌 정보
                        method: "virtual-account",
                        bank: "신한",
                        customerName: RandomGenerator_1.RandomGenerator.name(3),
                        // 주문 정보
                        orderId: (0, uuid_1.v4)(),
                        orderName: RandomGenerator_1.RandomGenerator.name(8),
                        amount: 25000,
                        // 고의 미승인 처리
                        __approved: false,
                    })];
                case 1:
                    payment = _a.sent();
                    (function (input) { (function (input, path) {
                        if (path === void 0) { path = "$input"; }
                        var $predicate = typescript_json_1.assertType.predicate;
                        var $ao = [
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.secret, exceptionable, function () { return ({
                                path: path + ".secret",
                                expected: "string",
                                value: input.secret
                            }); }) && $predicate(null !== input.virtualAccount && $predicate("object" === typeof input.virtualAccount && null !== input.virtualAccount && $ao[1](input.virtualAccount, path + ".virtualAccount", true && exceptionable), exceptionable, function () { return ({
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
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index1) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[2](elem, path + ".cancels[" + index1 + "]", true && exceptionable), exceptionable, function () { return ({
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
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[3](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
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
                            }); }); }
                        ];
                        return $predicate(null !== input && $predicate("object" === typeof input && null !== input && $ao[0](input, path + "", true), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossVirtualAccountPayment>",
                            value: input
                        }); }), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossVirtualAccountPayment>",
                            value: input
                        }); });
                    })(input); return input; })(payment);
                    return [4 /*yield*/, api_1.default.functional.v1.payments.confirm.approve(TestConnection_1.TestConnection.FAKE, {
                            paymentKey: payment.paymentKey,
                            orderId: payment.orderId,
                            amount: payment.totalAmount,
                        })];
                case 2:
                    approved = _a.sent();
                    (function (input) { (function (input, path) {
                        if (path === void 0) { path = "$input"; }
                        var $predicate = typescript_json_1.assertType.predicate;
                        var $ao = [
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.secret, exceptionable, function () { return ({
                                path: path + ".secret",
                                expected: "string",
                                value: input.secret
                            }); }) && $predicate(null !== input.virtualAccount && $predicate("object" === typeof input.virtualAccount && null !== input.virtualAccount && $ao[1](input.virtualAccount, path + ".virtualAccount", true && exceptionable), exceptionable, function () { return ({
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
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index1) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[2](elem, path + ".cancels[" + index1 + "]", true && exceptionable), exceptionable, function () { return ({
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
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[3](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
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
                            }); }); }
                        ];
                        return $predicate(null !== input && $predicate("object" === typeof input && null !== input && $ao[0](input, path + "", true), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossVirtualAccountPayment>",
                            value: input
                        }); }), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossVirtualAccountPayment>",
                            value: input
                        }); });
                    })(input); return input; })(approved);
                    //----
                    // 입금하기
                    //----
                    // 고객이 자신 앞으로 발급된 가상 계좌에
                    // 결제 금액을 입금하는 상황 시뮬레이션
                    return [4 /*yield*/, api_1.default.functional.internal.deposit(TestConnection_1.TestConnection.FAKE, payment.paymentKey)];
                case 3:
                    //----
                    // 입금하기
                    //----
                    // 고객이 자신 앞으로 발급된 가상 계좌에
                    // 결제 금액을 입금하는 상황 시뮬레이션
                    _a.sent();
                    return [4 /*yield*/, api_1.default.functional.v1.payments.at(TestConnection_1.TestConnection.FAKE, payment.paymentKey)];
                case 4:
                    reloaded = _a.sent();
                    (function (input) { (function (input, path) {
                        if (path === void 0) { path = "$input"; }
                        var $predicate = typescript_json_1.assertType.predicate;
                        var $ao = [
                            function (input, path, exceptionable) { return $predicate("string" === typeof input.secret, exceptionable, function () { return ({
                                path: path + ".secret",
                                expected: "string",
                                value: input.secret
                            }); }) && $predicate(null !== input.virtualAccount && $predicate("object" === typeof input.virtualAccount && null !== input.virtualAccount && $ao[1](input.virtualAccount, path + ".virtualAccount", true && exceptionable), exceptionable, function () { return ({
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
                            }); }) && $predicate(null === input.cancels || Array.isArray(input.cancels) && input.cancels.every(function (elem, index1) { return $predicate(null !== elem && $predicate("object" === typeof elem && null !== elem && $ao[2](elem, path + ".cancels[" + index1 + "]", true && exceptionable), exceptionable, function () { return ({
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
                            }); }) && $predicate(null === input.cashReceipt || "object" === typeof input.cashReceipt && null !== input.cashReceipt && $ao[3](input.cashReceipt, path + ".cashReceipt", true && exceptionable), exceptionable, function () { return ({
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
                            }); }); }
                        ];
                        return $predicate(null !== input && $predicate("object" === typeof input && null !== input && $ao[0](input, path + "", true), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossVirtualAccountPayment>",
                            value: input
                        }); }), true, function () { return ({
                            path: path + "",
                            expected: "Resolve<ITossVirtualAccountPayment>",
                            value: input
                        }); });
                    })(input); return input; })(reloaded);
                    // 결제 완료 처리되었음을 알 수 있다
                    if (reloaded.status !== "DONE")
                        throw new Error("Bug on FakeTossWebhookProvider.webhook(): failed to generate the exact webhook event.");
                    webhook = FakeTossStorage_1.FakeTossStorage.webhooks.get(payment.paymentKey);
                    if (webhook.data.status !== "DONE")
                        throw new Error("Bug on FakeTossInternalController.webhook(): failed to listen the webhook event.");
                    // if condition 에 의하여 자동 다운 캐스팅 됨.
                    payment.virtualAccount.accountNumber;
                    return [2 /*return*/, payment];
            }
        });
    });
}
exports.test_fake_virtual_account_payment = test_fake_virtual_account_payment;
//# sourceMappingURL=test_fake_virtual_account_payment.js.map