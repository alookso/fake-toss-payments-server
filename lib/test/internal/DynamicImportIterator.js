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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DynamicImportIterator = void 0;
var EXTENSION = __filename.substr(-2);
if (EXTENSION === "js")
    require("source-map-support/register");
var cli_1 = __importDefault(require("cli"));
var fs_1 = __importDefault(require("fs"));
var StopWatch_1 = require("./StopWatch");
var DynamicImportIterator;
(function (DynamicImportIterator) {
    function main(path, options) {
        return __awaiter(this, void 0, void 0, function () {
            var command;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = cli_1.default.parse();
                        return [4 /*yield*/, iterate(options, command, path)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    }
    DynamicImportIterator.main = main;
    function force(path, options) {
        return __awaiter(this, void 0, void 0, function () {
            var command, exceptions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        command = cli_1.default.parse();
                        exceptions = [];
                        return [4 /*yield*/, iterate(options, command, path, exceptions)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, exceptions];
                }
            });
        });
    }
    DynamicImportIterator.force = force;
    function iterate(options, command, path, exceptions) {
        return __awaiter(this, void 0, void 0, function () {
            var directory, directory_1, directory_1_1, file, current, stats, external_1, e_1_1;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, fs_1.default.promises.readdir(path)];
                    case 1:
                        directory = _b.sent();
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 12, 13, 14]);
                        directory_1 = __values(directory), directory_1_1 = directory_1.next();
                        _b.label = 3;
                    case 3:
                        if (!!directory_1_1.done) return [3 /*break*/, 11];
                        file = directory_1_1.value;
                        current = "".concat(path, "/").concat(file);
                        return [4 /*yield*/, fs_1.default.promises.lstat(current)];
                    case 4:
                        stats = _b.sent();
                        if (!(stats.isDirectory() === true)) return [3 /*break*/, 6];
                        return [4 /*yield*/, iterate(options, command, current, exceptions)];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 6:
                        if (file.substr(-3) !== ".".concat(EXTENSION))
                            return [3 /*break*/, 10];
                        _b.label = 7;
                    case 7: return [4 /*yield*/, Promise.resolve().then(function () { return __importStar(require(current)); })];
                    case 8:
                        external_1 = _b.sent();
                        return [4 /*yield*/, execute(options, command, external_1, exceptions)];
                    case 9:
                        _b.sent();
                        _b.label = 10;
                    case 10:
                        directory_1_1 = directory_1.next();
                        return [3 /*break*/, 3];
                    case 11: return [3 /*break*/, 14];
                    case 12:
                        e_1_1 = _b.sent();
                        e_1 = { error: e_1_1 };
                        return [3 /*break*/, 14];
                    case 13:
                        try {
                            if (directory_1_1 && !directory_1_1.done && (_a = directory_1.return)) _a.call(directory_1);
                        }
                        finally { if (e_1) throw e_1.error; }
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/];
                }
            });
        });
    }
    function execute(options, command, external, exceptions) {
        return __awaiter(this, void 0, void 0, function () {
            var _loop_1, _a, _b, _i, key, state_1;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _loop_1 = function (key) {
                            var closure_1, func, time, exp_1;
                            return __generator(this, function (_d) {
                                switch (_d.label) {
                                    case 0:
                                        if (!(command.exclude && key.indexOf(command.exclude) !== -1)) return [3 /*break*/, 1];
                                        return [2 /*return*/, "continue"];
                                    case 1:
                                        if (!(command.include && key.indexOf(command.include) === -1)) return [3 /*break*/, 2];
                                        return [2 /*return*/, "continue"];
                                    case 2:
                                        if (!(key.substr(0, options.prefix.length) !== options.prefix)) return [3 /*break*/, 3];
                                        return [2 /*return*/, "continue"];
                                    case 3:
                                        if (!(external[key] instanceof Function)) return [3 /*break*/, 10];
                                        closure_1 = external[key];
                                        func = function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        if (!(options.wrapper !== undefined)) return [3 /*break*/, 2];
                                                        return [4 /*yield*/, options.wrapper(key, closure_1)];
                                                    case 1:
                                                        _a.sent();
                                                        return [3 /*break*/, 4];
                                                    case 2: return [4 /*yield*/, closure_1.apply(void 0, __spreadArray([], __read(options.parameters), false))];
                                                    case 3:
                                                        _a.sent();
                                                        _a.label = 4;
                                                    case 4: return [2 /*return*/];
                                                }
                                            });
                                        }); };
                                        _d.label = 4;
                                    case 4:
                                        _d.trys.push([4, 9, , 10]);
                                        if (!(options.showElapsedTime === false)) return [3 /*break*/, 6];
                                        return [4 /*yield*/, func()];
                                    case 5:
                                        _d.sent();
                                        console.log("  - ".concat(key));
                                        return [3 /*break*/, 8];
                                    case 6: return [4 /*yield*/, StopWatch_1.StopWatch.measure(func)];
                                    case 7:
                                        time = _d.sent();
                                        console.log("  - ".concat(key, ": ").concat(time.toLocaleString(), " ms"));
                                        _d.label = 8;
                                    case 8: return [3 /*break*/, 10];
                                    case 9:
                                        exp_1 = _d.sent();
                                        if (!(exp_1 instanceof Error))
                                            return [2 /*return*/, { value: void 0 }];
                                        console.log("  - ".concat(key, " -> ").concat(exp_1.name));
                                        if (exceptions !== undefined)
                                            exceptions.push(exp_1);
                                        else
                                            throw exp_1;
                                        return [3 /*break*/, 10];
                                    case 10: return [2 /*return*/];
                                }
                            });
                        };
                        _a = [];
                        for (_b in external)
                            _a.push(_b);
                        _i = 0;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 4];
                        key = _a[_i];
                        return [5 /*yield**/, _loop_1(key)];
                    case 2:
                        state_1 = _c.sent();
                        if (typeof state_1 === "object")
                            return [2 /*return*/, state_1.value];
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    }
})(DynamicImportIterator = exports.DynamicImportIterator || (exports.DynamicImportIterator = {}));
//# sourceMappingURL=DynamicImportIterator.js.map