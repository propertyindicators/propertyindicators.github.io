"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultViewPool = /** @class */ (function () {
    function ResultViewPool() {
        this.sqm_min = "0";
        this.sqm_max = "0";
        this.sqm_main = "0";
        this.flat_min = "0";
        this.flat_max = "0";
        this.flat_main = "0";
    }
    ;
    return ResultViewPool;
}());
exports.ResultViewPool = ResultViewPool;
var ResultViewModel = /** @class */ (function () {
    function ResultViewModel() {
        this.usd = new ResultViewPool();
        this.eur = new ResultViewPool();
        this.hrn = new ResultViewPool();
    }
    return ResultViewModel;
}());
exports.ResultViewModel = ResultViewModel;
//# sourceMappingURL=model.result.js.map