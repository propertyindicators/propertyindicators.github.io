/*! PILab 02-02-2022 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/common/http"),model_result_1=require("./model.result"),CalcService=function(){function a(a){this.http=a,this.isInit=!1,this.opexCoef=.85,this.keyList={segms:["sale","rent"],currs:["usd","eur","hrn"]}}return a.prototype.getResultPromise=function(a,b){var c=this;return this.isInit?new Promise(function(d){d(c.EvauateResultAndCreateView(a,b))}):new Promise(function(d,e){return c.InitData().then(function(){return c.getResultPromise(a,b).then(function(a){return d(a)}).catch(function(a){return e(a)})}).catch(function(a){return e(a)})})},a.prototype.InitData=function(){var a=this,b=this.http.get("./data/test/premisescalcdata.json");return new Promise(function(c,d){return b.subscribe(function(b){a.calcData=b,a.isInit=!0,c()},function(a){return d(a)})})},a.prototype.EvauateResultAndCreateView=function(a,b){var c=new BaseDataSet(this.CalculateSegmentSqmEstimatesVariation(a,b,"Sale"),this.CalculateSegmentSqmEstimatesVariation(a,b,"Rent")),d=new model_result_1.ResultViewModel;for(var e in this.keyList.currs)for(var f in this.keyList.segms){var g=c[this.keyList.segms[f]].Multiply(this.GetCurrencyCoef(this.keyList.currs[e]));d[this.keyList.currs[e]][this.keyList.segms[f]].sqm=g.CreateIndicatorsViewSet(this.keyList.currs[e]),d[this.keyList.currs[e]][this.keyList.segms[f]].premises=g.Multiply(b.square).CreateIndicatorsViewSet(this.keyList.currs[e])}var h=this.CalculateCapitalizRate(c);return d.capitalizRate=h.CreateRateViewSet(!0),d.rentMultiplicator=this.CapRatesToMutlt(h).CreateRateViewSet(!1),d},a.prototype.CalculateSegmentSqmEstimatesVariation=function(a,b,c){for(var d=[],e=0;e<3;e++)d.push(this.EstimateSqm(a,b,this.calcData[c].RegSets[e]));return d=d.sort(function(a,b){return a-b}),new VariationSet(.95*d[0],d[2],(d[0]+d[1]+d[2])/3*.975)},a.prototype.EstimateSqm=function(a,b,c){var d=(a.peopleStreamValue+a.transportStreamValue)/4,e=b.tradevalue_features.traderow[1]?d>1?d:1:d,f=c.V0*Math.pow(c.S,Math.log(b.square))*Math.pow(c.DC,Math.log(a.destinationCenter+1))*Math.pow(c.P,b.placement)*Math.pow(c.OTB,b.buildtype_otb)*Math.pow(c.MB,b.buildtype_mb)*Math.pow(c.PTS,e)*Math.pow(c.TV,b.tv)*Math.pow(c.TV_PTS,Math.pow(b.tv*e,c.PROG));return b.is_residential_fund&&(f*=c.RF),0===c.B2?(f*=this.calcData.Rent.MassiveShifts[a.massive_int-1],f*=Math.pow(c.B1,b.state)):(f*=this.calcData.Sale.MassiveShifts[a.massive_int-1],f+=c.B2*b.state),f},a.prototype.GetCurrencyCoef=function(a){switch(a){case"usd":return 1;case"hrn":return this.calcData.CurEx.Dollar;case"eur":return this.calcData.CurEx.Dollar/this.calcData.CurEx.Euro;default:return 0}},a.prototype.CalculateCapitalizRate=function(a){return new VariationSet(12*a.rent.min*this.opexCoef/a.sale.max,12*a.rent.max*this.opexCoef/a.sale.min,12*a.rent.main*this.opexCoef/a.sale.main)},a.prototype.CapRatesToMutlt=function(a){return 0===a.max||0===a.min||a.main?new VariationSet(1/a.max,1/a.min,1/a.main):new VariationSet(0,0,0)},a=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.HttpClient])],a)}();exports.CalcService=CalcService;var VariationSet=function(){function a(a,b,c){this.min=a,this.max=b,this.main=c,this.curssymb={usd:"$",eur:"€",hrn:"₴"}}return a.prototype.Multiply=function(b){return new a(this.min*b,this.max*b,this.main*b)},a.prototype.CreateIndicatorsViewSet=function(a){return new model_result_1.ResultVariationDataSet(this.IndicatorToString(this.min,a),this.IndicatorToString(this.max,a),this.IndicatorToString(this.main,a))},a.prototype.IndicatorToString=function(a,b){for(var c=String(Math.round(a)),d=c.length,e="",f=1;f<=d;f++)e=f%3==0&&f!=d?" "+c.charAt(d-f)+e:c.charAt(d-f)+e;return e=this.curssymb[b]+" "+e},a.prototype.CreateRateViewSet=function(a){return new model_result_1.ResultVariationDataSet(this.RateToString(this.min,a),this.RateToString(this.max,a),this.RateToString(this.main,a))},a.prototype.RateToString=function(a,b){return b?String(Math.round(1e3*a)/10)+"%":String(Math.round(10*a)/10)},a}(),BaseDataSet=function(){function a(a,b){this.sale=a,this.rent=b}return a}();