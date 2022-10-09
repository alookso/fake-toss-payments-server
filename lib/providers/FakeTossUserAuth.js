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
exports.FakeTossUserAuth = void 0;
var atob_1 = __importDefault(require("atob"));
var nest = __importStar(require("@nestjs/common"));
var FakeTossConfiguration_1 = require("../FakeTossConfiguration");
var FakeTossUserAuth;
(function (FakeTossUserAuth) {
    function authorize(request) {
        var token = request.headers.authorization;
        if (token === undefined)
            throw new nest.ForbiddenException("No authorization token exists.");
        else if (token.indexOf("Basic ") !== 0)
            throw new nest.ForbiddenException("Invalid authorization token.");
        token = token.substr("Basic ".length);
        token = (0, atob_1.default)(token);
        if (FakeTossConfiguration_1.TossFakeConfiguration.authorize(token.substr(0, token.length - 1)) === false)
            throw new nest.ForbiddenException("Wrong authorization token.");
    }
    FakeTossUserAuth.authorize = authorize;
})(FakeTossUserAuth = exports.FakeTossUserAuth || (exports.FakeTossUserAuth = {}));
//# sourceMappingURL=FakeTossUserAuth.js.map