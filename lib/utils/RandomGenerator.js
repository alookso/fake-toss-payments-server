"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomGenerator = void 0;
var random_1 = require("tstl/algorithm/random");
var ArrayUtil_1 = require("./ArrayUtil");
var RandomGenerator;
(function (RandomGenerator) {
    function name(length) {
        if (length === void 0) { length = 3; }
        var ret = "";
        for (var i = 0; i < length; ++i)
            ret += String.fromCharCode((0, random_1.randint)(44031, 55203));
        return ret;
    }
    RandomGenerator.name = name;
    function date(from, range) {
        var time = from.getTime() + (0, random_1.randint)(0, range);
        return new Date(time);
    }
    RandomGenerator.date = date;
    function mobile() {
        return "8210".concat(digit(3, 4)).concat(digit(4, 4));
    }
    RandomGenerator.mobile = mobile;
    function digit(minC, maxC) {
        var val = (0, random_1.randint)(0, Math.pow(10.0, maxC) - 1);
        var ret = val.toString();
        var log10 = val ? Math.floor(Math.log10(val)) + 1 : 0;
        if (log10 < minC)
            for (var i = 0; i < minC - log10; ++i)
                ret = "0" + ret;
        return ret;
    }
    RandomGenerator.digit = digit;
    function cardNumber() {
        return ArrayUtil_1.ArrayUtil.repeat(4, function () { return digit(1, 4); }).join("");
    }
    RandomGenerator.cardNumber = cardNumber;
})(RandomGenerator = exports.RandomGenerator || (exports.RandomGenerator = {}));
//# sourceMappingURL=RandomGenerator.js.map