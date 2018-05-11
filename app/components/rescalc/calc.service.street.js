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
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var StreetLine = /** @class */ (function () {
    function StreetLine(data) {
        if (data.length < 9) {
            alert("Подгруженный поисковый пул улиц не соответствует по формату проектной структуре");
        }
        this.id = data[0];
        this.mas = data[1];
        this.distr = data[2];
        this.street_rus = data[3];
        this.street_ukr = data[4];
        this.multidistr = data[5];
        this.number_from = data[6];
        this.number_till = data[7];
        this.parity = data[8];
    }
    return StreetLine;
}());
exports.StreetLine = StreetLine;
var SearchWorker = /** @class */ (function () {
    function SearchWorker(http) {
        this.http = http;
        this.data = [];
        this.distrdict = {
            1: "goloseev",
            2: "darnic",
            3: "desnyan",
            4: "dneprov",
            5: "obolons",
            6: "pechers",
            7: "podols",
            8: "svyatosh",
            9: "solomens",
            10: "shevchen"
        };
    }
    SearchWorker.prototype.getData = function () {
        var a = 0;
        return this.data;
    };
    ;
    SearchWorker.prototype.setData = function (data) {
        this.data = data;
        var a = 0;
    };
    ;
    SearchWorker.prototype.initData = function (distr) {
        var _this = this;
        var temp = this.http.get("./data/test/streets/res_" + this.distrdict[distr] + ".json");
        return new Promise(function (resolve, reject) {
            return temp.subscribe(function (bata) {
                var temp = [];
                for (var _i = 0, _a = bata.rows; _i < _a.length; _i++) {
                    var l = _a[_i];
                    temp.push(new StreetLine(l));
                }
                _this.setData(temp);
                resolve();
            }, function (error) { reject(error); });
        });
    };
    SearchWorker = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SearchWorker);
    return SearchWorker;
}());
exports.SearchWorker = SearchWorker;
//# sourceMappingURL=calc.service.street.js.map