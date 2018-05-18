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
    SearchWorker.prototype.checkStreet = function (addr) {
        if (this.data === null) {
            this.checkMassive(addr);
            addr.setIformColors();
            return;
        }
        if (addr.street === null || addr.street === "") {
            addr.street_is = false;
            addr.multimas = false;
            addr.street_found = "Введите улицу!";
            this.checkMassive(addr);
            addr.setIformColors();
            return;
        }
        var regex = new RegExp('^' + addr.street, 'i');
        var foundline = null;
        var rus_ukr = "";
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var sl = _a[_i];
            var matchrus = sl.street_rus.match(regex);
            if (matchrus != null) {
                foundline = sl;
                rus_ukr = "street_rus";
                break;
            }
            else {
                var matchukr = sl.street_ukr.match(regex);
                if (matchukr != null) {
                    foundline = sl;
                    rus_ukr = "street_ukr";
                    break;
                }
            }
        }
        if (foundline === null) {
            addr.street_is = false;
            addr.street_found = "Улица \"" + addr.street + "\" не обнаружена в пределах района \"" + addr.district + "\"!";
            addr.multimas = null;
        }
        else {
            addr.street_is = true;
            addr.street_found = sl[rus_ukr];
            addr.multimas = sl.multidistr;
        }
        this.checkMassive(addr);
        addr.setIformColors();
    };
    SearchWorker.prototype.checkNumber = function (addr) {
        var intmatch = addr.number_str.match(/\d+/);
        if (intmatch === null) {
            addr.number_is = false;
            addr.number_int = 0;
            this.checkMassive(addr);
            addr.setIformColors();
            return;
        }
        else {
            addr.number_int = parseInt(addr.number_str, 10);
            if (addr.number_int < 1 || addr.number_int > 300) {
                addr.massive_str = "Номер дома введён не корректно!";
                addr.number_is = false;
                addr.massive_is = false;
                addr.number_int = 0;
                addr.setIformColors();
                return;
            }
            else {
                addr.number_is = true;
                this.checkMassive(addr);
            }
            addr.setIformColors();
            return;
        }
    };
    SearchWorker.prototype.checkMassive = function (addr) {
        if (this.data === null) {
            addr.street_found = "NoSearchData";
            addr.massive_str = "NoSearchData";
            addr.massive_is = false;
        }
        ;
        if (addr.street_is)
            if (addr.multimas)
                if (addr.number_is) {
                    addr.massive_int = this.getMassive(addr.street_found, true, addr.number_int);
                    if (addr.massive_int === 0)
                        addr.massive_str = "Номер дома указан за пределами допустимого диапазона!";
                    else
                        addr.massive_str = addr.massivedict[addr.massive_int];
                    addr.massive_is = (addr.massive_int !== 0);
                }
                else {
                    addr.massive_str = "Указанная улица пролегает через несколько массивов! Укажите номер дома, пожалуйста!";
                    addr.massive_is = false;
                }
            else {
                addr.massive_int = this.getMassive(addr.street_found, false, null);
                addr.massive_str = addr.massivedict[addr.massive_int];
                addr.massive_is = (addr.massive_int !== 0);
            }
        else {
            if (addr.street !== "")
                addr.massive_str = "Укажите корректно улицу, пожалуйста!";
            else
                addr.massive_str = "";
            addr.massive_is = false;
        }
    };
    SearchWorker.prototype.getMassive = function (street, multimas, num) {
        //входящая проверка
        if (this.data === null)
            return 0;
        if (street === null || street === "")
            return 0;
        if (multimas && num === null)
            return 0;
        //далее функционал поиска
        var parity = num % 2;
        var regex = new RegExp('^' + street, 'i');
        var foundline = null;
        var rus_ukr = "";
        for (var _i = 0, _a = this.data; _i < _a.length; _i++) {
            var sl = _a[_i];
            var matchrus = sl.street_rus.match(regex);
            var matchukr = sl.street_rus.match(regex);
            if (matchrus != null || matchukr != null) {
                if (multimas) {
                    var flag = true;
                    if (sl.parity !== "")
                        flag = (flag && (parity === 0 && sl.parity === "ч" || parity !== 0 && sl.parity === "н"));
                    if (sl.number_from !== -1)
                        flag = flag && num >= sl.number_from;
                    if (sl.number_till !== -1)
                        flag = flag && num <= sl.number_till;
                    if (flag) {
                        foundline = sl;
                        break;
                    }
                }
                else {
                    foundline = sl;
                    break;
                }
            }
        }
        if (foundline === null) {
            return 0;
        }
        else {
            return sl.mas;
        }
    };
    SearchWorker = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], SearchWorker);
    return SearchWorker;
}());
exports.SearchWorker = SearchWorker;
//# sourceMappingURL=calc.service.street.js.map