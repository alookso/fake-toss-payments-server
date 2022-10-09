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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TossFakeConfiguration = void 0;
var EXTENSION = __filename.substr(-2);
if (EXTENSION === "js")
    require("source-map-support").install();
var nestia_helper_1 = __importDefault(require("nestia-helper"));
var nest = __importStar(require("@nestjs/common"));
var DomainError_1 = require("tstl/exception/DomainError");
var InvalidArgument_1 = require("tstl/exception/InvalidArgument");
var OutOfRange_1 = require("tstl/exception/OutOfRange");
/**
 * Fake 토스 페이먼츠 서버의 설정 정보.
 *
 * @author Jeongho Nam - https://github.com/samchon
 */
var TossFakeConfiguration;
(function (TossFakeConfiguration) {
    /**
     * @internal
     */
    TossFakeConfiguration.ASSETS = __dirname + "/../assets";
    /**
     * @internal
     */
    TossFakeConfiguration.ENCRYPTION_PASSWORD = {
        key: "szngncCKO7wZTuayfhkRNlBfI5Nl5N88",
        iv: "M0Yvmgrk58GBvUAt",
    };
    /**
     * 임시 저장소의 레코드 만료 기한.
     */
    TossFakeConfiguration.EXPIRATION = {
        time: 3 * 60 * 1000,
        capacity: 1000,
    };
    /**
     * 서버가 사용할 포트 번호.
     */
    TossFakeConfiguration.API_PORT = 30771;
    /**
     * Webhook 이벤트를 수신할 URL 주소.
     */
    TossFakeConfiguration.WEBHOOK_URL = "http://127.0.0.1:".concat(TossFakeConfiguration.API_PORT, "/internal/webhook");
    /**
     * 토큰 인증 함수.
     *
     * 클라이언트가 전송한 Basic 토큰값이 제대로 된 것인지 판별한다.
     *
     * @param token 토큰값
     */
    TossFakeConfiguration.authorize = function (token) {
        return token === "test_ak_ZORzdMaqN3wQd5k6ygr5AkYXQGwy";
    };
})(TossFakeConfiguration = exports.TossFakeConfiguration || (exports.TossFakeConfiguration = {}));
// CUSTOM EXCEPTIION CONVERSION
nestia_helper_1.default.ExceptionManager.insert(OutOfRange_1.OutOfRange, function (exp) { return new nest.NotFoundException(exp.message); });
nestia_helper_1.default.ExceptionManager.insert(InvalidArgument_1.InvalidArgument, function (exp) { return new nest.ConflictException(exp.message); });
nestia_helper_1.default.ExceptionManager.insert(DomainError_1.DomainError, function (exp) { return new nest.UnprocessableEntityException(exp.message); });
// TRACE EXACT SERVER INTERNAL ERROR
nestia_helper_1.default.ExceptionManager.insert(Error, function (exp) {
    return new nest.InternalServerErrorException({
        message: exp.message,
        name: exp.name,
        stack: exp.stack,
    });
});
//# sourceMappingURL=FakeTossConfiguration.js.map