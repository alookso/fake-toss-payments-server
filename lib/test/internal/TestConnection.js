"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestConnection = void 0;
var btoa_1 = __importDefault(require("btoa"));
var FakeTossConfiguration_1 = require("../../FakeTossConfiguration");
var TestConnection;
(function (TestConnection) {
    TestConnection.FAKE = {
        host: "http://127.0.0.1:".concat(FakeTossConfiguration_1.TossFakeConfiguration.API_PORT),
        headers: {
            Authorization: "Basic ".concat((0, btoa_1.default)("test_ak_ZORzdMaqN3wQd5k6ygr5AkYXQGwy:")),
        },
    };
    TestConnection.REAL = {
        host: "https://api.tosspayments.com",
        headers: {
            Authorization: "Basic ".concat((0, btoa_1.default)("test_ak_ZORzdMaqN3wQd5k6ygr5AkYXQGwy:")),
        },
    };
})(TestConnection = exports.TestConnection || (exports.TestConnection = {}));
//# sourceMappingURL=TestConnection.js.map