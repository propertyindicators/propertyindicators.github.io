"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ResultVariationDataSet = /** @class */ (function () {
    function ResultVariationDataSet(min, max, main) {
        if (min === void 0) { min = "0"; }
        if (max === void 0) { max = "0"; }
        if (main === void 0) { main = "0"; }
        this.min = min;
        this.max = max;
        this.main = main;
    }
    return ResultVariationDataSet;
}());
exports.ResultVariationDataSet = ResultVariationDataSet;
var EvaluationSegmentDataSet = /** @class */ (function () {
    function EvaluationSegmentDataSet() {
        this.sqm = new ResultVariationDataSet();
        this.premises = new ResultVariationDataSet();
    }
    return EvaluationSegmentDataSet;
}());
var EvaluationCurrencyDataSet = /** @class */ (function () {
    function EvaluationCurrencyDataSet() {
        this.sale = new EvaluationSegmentDataSet();
        this.rent = new EvaluationSegmentDataSet();
    }
    return EvaluationCurrencyDataSet;
}());
var ResultViewModel = /** @class */ (function () {
    function ResultViewModel() {
        this.usd = new EvaluationCurrencyDataSet();
        this.eur = new EvaluationCurrencyDataSet();
        this.hrn = new EvaluationCurrencyDataSet();
        this.capitalizRate = new ResultVariationDataSet();
        this.rentMultiplicator = new ResultVariationDataSet();
        // Temporary set of data for debugging
        //public S: number = 0;
        //public DC: number = 0;
        //public P: number = 0;
        //public MB: number = 0;
        //public OTB: number = 0;
        //public PTS: number = 0;
        //public TV: number = 0;
        //public TV_PTS: number = 0;
        //public B: number = 0;
        //public TempV0: number = 0;
    }
    return ResultViewModel;
}());
exports.ResultViewModel = ResultViewModel;
//# sourceMappingURL=model.result.js.map