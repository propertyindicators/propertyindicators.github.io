"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var model_result_1 = require("./model.result");
var VariationSet = /** @class */ (function () {
    function VariationSet(min, max, main) {
        this.min = min;
        this.max = max;
        this.main = main;
        this.curssymb = { usd: "$", eur: "€", hrn: "₴" };
    }
    VariationSet.prototype.Multiply = function (coef) {
        return new VariationSet(this.min * coef, this.max * coef, this.main * coef);
    };
    VariationSet.prototype.CreateIndicatorsViewSet = function (cur) {
        return new model_result_1.ResultVariationDataSet(this.IndicatorToString(this.min, cur), this.IndicatorToString(this.max, cur), this.IndicatorToString(this.main, cur));
    };
    VariationSet.prototype.IndicatorToString = function (num, cur) {
        var numstr = String(Math.round(num));
        var l = numstr.length;
        var result = "";
        for (var i = 1; i <= l; i++)
            if ((i % 3) === 0 && i != l)
                result = " " + numstr.charAt(l - i) + result;
            else
                result = numstr.charAt(l - i) + result;
        result = this.curssymb[cur] + " " + result;
        return result;
    };
    VariationSet.prototype.CreateRateViewSet = function (isPercent) {
        return new model_result_1.ResultVariationDataSet(this.RateToString(this.min, isPercent), this.RateToString(this.max, isPercent), this.RateToString(this.main, isPercent));
    };
    VariationSet.prototype.RateToString = function (num, isPercent) {
        return isPercent
            ? String(Math.round(num * 1000) / 10) + "%"
            : String(Math.round(num * 10) / 10);
    };
    return VariationSet;
}());
var BaseDataSet = /** @class */ (function () {
    function BaseDataSet(sale, rent) {
        this.sale = sale;
        this.rent = rent;
    }
    return BaseDataSet;
}());
var CalcService = /** @class */ (function () {
    function CalcService(http) {
        this.http = http;
        this.isInit = false;
        this.opexCoef = 0.85;
        this.keyList = {
            segms: ["sale", "rent"],
            currs: ["usd", "eur", "hrn"]
        };
    }
    CalcService.prototype.getResultPromise = function (addr, params) {
        var _this = this;
        if (!this.isInit)
            return new Promise(function (rs, rj) { return _this.InitData()
                .then(function () { return _this.getResultPromise(addr, params)
                .then(function (result) { return rs(result); })
                .catch(function (err) { return rj(err); }); })
                .catch(function (err) { return rj(err); }); });
        else
            return new Promise(function (rs) {
                rs(_this.EvauateResultAndCreateView(addr, params));
            });
    };
    CalcService.prototype.InitData = function () {
        var _this = this;
        var calcDataDownloader = this.http.get("./data/test/premisescalcdata.json");
        return new Promise(function (mresolve, mreject) {
            return calcDataDownloader.subscribe(function (data) {
                _this.calcData = data;
                _this.isInit = true;
                mresolve();
            }, function (error) { return mreject(error); });
        });
    };
    // Function evaluate cost of a premises when all parameters of premises and calculator data are defined
    CalcService.prototype.EvauateResultAndCreateView = function (addr, params) {
        // Calculate estimation of certain premises
        var baseDollar = new BaseDataSet(this.CalculateSegmentSqmEstimatesVariation(addr, params, "Sale"), this.CalculateSegmentSqmEstimatesVariation(addr, params, "Rent"));
        var res = new model_result_1.ResultViewModel();
        for (var cur in this.keyList.currs) {
            for (var seg in this.keyList.segms) {
                var baseSqmCur = baseDollar[this.keyList.segms[seg]].Multiply(this.GetCurrencyCoef(this.keyList.currs[cur]));
                res[this.keyList.currs[cur]][this.keyList.segms[seg]].sqm = baseSqmCur.CreateIndicatorsViewSet(this.keyList.currs[cur]);
                res[this.keyList.currs[cur]][this.keyList.segms[seg]].premises = baseSqmCur
                    .Multiply(params.square)
                    .CreateIndicatorsViewSet(this.keyList.currs[cur]);
            }
        }
        var capR = this.CalculateCapitalizRate(baseDollar);
        res.capitalizRate = capR.CreateRateViewSet(true);
        res.rentMultiplicator = this.CapRatesToMutlt(capR).CreateRateViewSet(false);
        // Parameters' visualization (section for debugging - see model.result.ts)
        //res.S = params.square;
        //res.DC = addr.destinationCenter;
        //res.P = params.placement;
        //res.MB = params.buildtype_mb;
        //res.OTB = params.buildtype_otb;
        //let addrPTS = (addr.peopleStreamValue + addr.transportStreamValue) / 4;
        //res.PTS = params.tradevalue_features["traderow"][1]
        //	? addrPTS > 1
        //		? addrPTS
        //		: 1
        //	: addrPTS;
        //res.TV = params.tv;
        //res.TV_PTS = res.TV * res.PTS;
        //res.B = params.state;
        //res.TempV0 = this.calcData.Sale.RegSets[0].V0;
        return res;
    };
    CalcService.prototype.CalculateSegmentSqmEstimatesVariation = function (addr, params, segment) {
        var t = [];
        for (var i = 0; i < 3; i++) {
            t.push(this.EstimateSqm(addr, params, this.calcData[segment]["RegSets"][i]));
        }
        t = t.sort(function (n1, n2) { return n1 - n2; });
        return new VariationSet(t[0] * 0.95, t[2], (t[0] + t[1] + t[2]) / 3 * 0.975); // Used 0.95 and 0.975 coefs to extend variation for ~5% additional percents
    };
    // Calculate estimation (for rent or sale segment) basing on defined addr and params objects, and certain set of regression coefficients
    CalcService.prototype.EstimateSqm = function (addr, params, coefs) {
        var addrPTS = (addr.peopleStreamValue + addr.transportStreamValue) / 4;
        var PTS = params.tradevalue_features["traderow"][1]
            ? addrPTS > 1
                ? addrPTS
                : 1
            : addrPTS;
        var res = coefs["V0"]
            * Math.pow(coefs["S"], Math.log(params.square))
            * Math.pow(coefs["DC"], Math.log(addr.destinationCenter + 1))
            * Math.pow(coefs["P"], params.placement)
            * Math.pow(coefs["OTB"], params.buildtype_otb)
            * Math.pow(coefs["MB"], params.buildtype_mb)
            * Math.pow(coefs["PTS"], PTS)
            * Math.pow(coefs["TV"], params.tv)
            * Math.pow(coefs["TV_PTS"], (Math.pow((params.tv * PTS), coefs["PROG"])));
        if (params.is_residential_fund) {
            res *= coefs["RF"];
        }
        if (coefs["B2"] === 0) { // B2 === 0 always for Rent segment
            res *= this.calcData["Rent"]["MassiveShifts"][addr.massive_int - 1];
            res *= Math.pow(coefs["B1"], params.state);
        }
        else { // B2 != 0 always for Sale segment
            res *= this.calcData["Sale"]["MassiveShifts"][addr.massive_int - 1];
            res += coefs["B2"] * params.state;
        }
        return res;
    };
    CalcService.prototype.GetCurrencyCoef = function (cur) {
        switch (cur) {
            case "usd": {
                return 1;
            }
            case "hrn": {
                return this.calcData.CurEx.Dollar;
            }
            case "eur": {
                return this.calcData.CurEx.Dollar / this.calcData.CurEx.Euro;
            }
            default: {
                return 0;
            }
        }
        ;
    };
    CalcService.prototype.CalculateCapitalizRate = function (base) {
        return new VariationSet(base.rent.min * 12 * this.opexCoef / base.sale.max, base.rent.max * 12 * this.opexCoef / base.sale.min, base.rent.main * 12 * this.opexCoef / base.sale.main);
    };
    CalcService.prototype.CapRatesToMutlt = function (capR) {
        if (capR.max === 0 || capR.min === 0 || capR.main) {
            return new VariationSet(1 / capR.max, 1 / capR.min, 1 / capR.main);
        }
        else {
            return new VariationSet(0, 0, 0);
        }
    };
    CalcService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CalcService);
    return CalcService;
}());
exports.CalcService = CalcService;
//# sourceMappingURL=service.calc.js.map