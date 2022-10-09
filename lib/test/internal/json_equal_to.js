"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.json_equal_to = void 0;
function array_equal_to(items, name, x, y) {
    if (x.length !== y.length)
        items.push("".concat(name, ".length"));
    for (var i = 0; i < x.length; ++i)
        any_equal_to(items, "".concat(name, "[").concat(i, "]"), x[i], y[i]);
}
function object_equal_to(items, name, x, y) {
    for (var key in x) {
        if (key.substr(-2) === "id" || key.substr(-3) === "_at")
            continue;
        any_equal_to(items, "".concat(name, ".").concat(key), x[key], y[key]);
    }
    return true;
}
function any_equal_to(items, name, x, y) {
    if (typeof x !== typeof y)
        items.push(name);
    else if (x instanceof Array)
        if (!(y instanceof Array))
            items.push(name);
        else
            array_equal_to(items, name, x, y);
    else if (x instanceof Object)
        object_equal_to(items, name, x, y);
    else if (x !== y)
        items.push(name);
}
function json_equal_to(x, y) {
    var ret = [];
    any_equal_to(ret, "", x, y);
    return ret;
}
exports.json_equal_to = json_equal_to;
//# sourceMappingURL=json_equal_to.js.map