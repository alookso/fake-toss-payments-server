"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate_index = void 0;
var iterations_1 = require("tstl/ranges/algorithm/iterations");
function get_ids(entities) {
    return entities.map(function (entity) { return entity.id; }).sort(function (x, y) { return (x < y ? -1 : 1); });
}
function validate_index(symbol, solution, summaries) {
    var length = Math.min(solution.length, summaries.length);
    var xIds = get_ids(solution).slice(0, length);
    var yIds = get_ids(summaries)
        .filter(function (id) { return id >= xIds[0]; })
        .slice(0, length);
    if ((0, iterations_1.equal)(xIds, yIds) === true)
        return;
    console.log(xIds);
    console.log(yIds);
    throw new Error("Bug on ".concat(symbol, ": result of the index is different with manual aggregation."));
}
exports.validate_index = validate_index;
//# sourceMappingURL=validate_index.js.map