/*! PILab 18-07-2021 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ResultVariationDataSet=function(){function a(a,b,c){void 0===a&&(a="0"),void 0===b&&(b="0"),void 0===c&&(c="0"),this.min=a,this.max=b,this.main=c}return a}();exports.ResultVariationDataSet=ResultVariationDataSet;var EvaluationSegmentDataSet=function(){function a(){this.sqm=new ResultVariationDataSet,this.premises=new ResultVariationDataSet}return a}(),EvaluationCurrencyDataSet=function(){function a(){this.sale=new EvaluationSegmentDataSet,this.rent=new EvaluationSegmentDataSet}return a}(),ResultViewModel=function(){function a(){this.usd=new EvaluationCurrencyDataSet,this.eur=new EvaluationCurrencyDataSet,this.hrn=new EvaluationCurrencyDataSet,this.capitalizRate=new ResultVariationDataSet,this.rentMultiplicator=new ResultVariationDataSet}return a}();exports.ResultViewModel=ResultViewModel;