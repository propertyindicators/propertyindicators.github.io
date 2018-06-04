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
var calc_model_result_1 = require("./calc.model.result");
var EvalPool = /** @class */ (function () {
    function EvalPool() {
        this.sqm = 0;
        this.flat = 0;
    }
    return EvalPool;
}());
var CalcTabsPool = /** @class */ (function () {
    function CalcTabsPool() {
        this.usd = new Array();
        this.eur = new Array();
        this.hrn = new Array();
    }
    return CalcTabsPool;
}());
var CalcService = /** @class */ (function () {
    function CalcService(http) {
        this.http = http;
        this.isinit = false;
        this.tabmin = new CalcTabsPool();
        this.tabmax = new CalcTabsPool();
        this.tabmain = new CalcTabsPool();
        this.valsnumeric = ["min", "max", "main"];
        this.cursnumeric = ["usd", "eur", "hrn"];
        this.curssymb = { usd: "$", eur: "€", hrn: "₴" };
    }
    //функция возвращает промис, ресолв которого возвращает вьюшки результатов оценки
    CalcService.prototype.getResultPromise = function (massive, params) {
        var _this = this;
        if (!this.isinit)
            return new Promise(function (rs, rj) { return _this.InitData()
                .then(function () { return _this.getResultPromise(massive, params)
                .then(function (result) { return rs(result); })
                .catch(function (err) { return rj(err); }); })
                .catch(function (err) { return rj(err); }); });
        else
            return new Promise(function (rs, rj) {
                //здесь создаются вьюшки 
                var temp = new calc_model_result_1.ResultViewModel();
                for (var v in _this.valsnumeric)
                    for (var c in _this.cursnumeric) {
                        var aV = _this.appriseVal(massive, params, _this.cursnumeric[c], _this.valsnumeric[v]);
                        temp[_this.cursnumeric[c]]["sqm_" + _this.valsnumeric[v]] = _this.spacingAndCurr(String(aV.sqm), _this.cursnumeric[c]);
                        temp[_this.cursnumeric[c]]["flat_" + _this.valsnumeric[v]] = _this.spacingAndCurr(String(aV.flat), _this.cursnumeric[c]);
                    }
                rs(temp);
            });
    };
    CalcService.prototype.InitData = function () {
        var _this = this;
        var hmin = this.http.get("./data/test/rescalcmin.json");
        var hmax = this.http.get("./data/test/rescalcmax.json");
        var hmain = this.http.get("./data/test/rescalcmain.json");
        var objparams = this.http.get("./data/test/exchange.json");
        return new Promise(function (mresolve, mreject) {
            return objparams.subscribe(function (params) {
                _this.cpar = params;
                var pmin = _this.tabloader(hmin, _this.tabmin); //промис
                var pmax = _this.tabloader(hmax, _this.tabmax); //промис
                var pmain = _this.tabloader(hmain, _this.tabmain); //промис
                Promise.all([pmin, pmax, pmain]).then(function () {
                    _this.isinit = true;
                    mresolve();
                }).catch(function (err) { return mreject(err); });
            }, function (error) { return mreject(error); });
        });
    };
    //финишная логика расчёта, когда есть все необходимые ресурсы финишного расчёта заданы созданы
    CalcService.prototype.appriseVal = function (mas, p, currency, valtype) {
        var worktab = this["tab" + valtype][currency];
        var typeindex = p.getTypeIndex();
        var evalsqm = worktab[typeindex][mas - 1];
        //коррекция по этажу
        if (p.floor === "first")
            evalsqm = evalsqm * 0.9;
        if (p.floor === "last")
            evalsqm = evalsqm * 0.94;
        if (p.floor === "pent")
            evalsqm = evalsqm * 1.1;
        //коррекция по площади
        evalsqm = evalsqm * (10000 / (p.square * 0.719 + 2.2876) + 950) / (10000 / (p.getRoomTypeAverage() * 0.719 + 2.2876) + 950);
        //коррекция по состоянию
        evalsqm = evalsqm + (p.state - 4) * this.cpar.cenabala;
        return { sqm: Math.round(evalsqm), flat: Math.round(evalsqm * p.square) };
    };
    CalcService.prototype.tabloader = function (httpget, tab) {
        var _this = this;
        return new Promise(function (rs, rj) {
            var hrn_coef = _this.cpar.usd;
            var eur_coef = _this.cpar.usd / _this.cpar.eur;
            httpget.subscribe(function (httptab) {
                for (var i = 0; i < httptab.rows.length; i++) {
                    var tusd = new Array();
                    var teur = new Array();
                    var thrn = new Array();
                    for (var ii = 0; ii < 64; ii++) {
                        var v = Number(httptab.rows[i][ii + 2]);
                        tusd.push(v);
                        teur.push(v * eur_coef);
                        thrn.push(v * hrn_coef);
                    }
                    tab.usd.push(tusd);
                    tab.eur.push(teur);
                    tab.hrn.push(thrn);
                    var a = 0;
                }
                rs();
            }, function (error) {
                var a = 0;
                rj(error);
            });
        });
    };
    CalcService.prototype.spacingAndCurr = function (numstr, cur) {
        var l = numstr.length;
        var out = "";
        for (var i = 1; i <= l; i++)
            if ((i % 3) === 0 && i != l)
                out = " " + numstr.charAt(l - i) + out;
            else
                out = numstr.charAt(l - i) + out;
        out = this.curssymb[cur] + " " + out;
        return out;
    };
    CalcService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CalcService);
    return CalcService;
}());
exports.CalcService = CalcService;
//# sourceMappingURL=calc.service.calc.js.map