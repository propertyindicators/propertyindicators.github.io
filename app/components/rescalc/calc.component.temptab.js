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
var calc_service_street_1 = require("./calc.service.street");
var TempTab = /** @class */ (function () {
    function TempTab(searchWorker) {
        this.searchWorker = searchWorker;
        this.streets = [];
    }
    TempTab.prototype.ngOnChanges = function (changes) {
        if (changes.distr.currentValue !== 0) {
            this.initSearchData();
        }
        ;
    };
    TempTab.prototype.initSearchData = function () {
        var t = this;
        this.searchWorker.initData(this.distr)
            .then(function () { t.streets = t.searchWorker.getData(); }, function (e) { alert("Не удалось получить с сервера данные об улицах района:\n" + e.message); });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], TempTab.prototype, "distr", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TempTab.prototype, "tabvisible", void 0);
    TempTab = __decorate([
        core_1.Component({
            selector: 'comp-temptab',
            moduleId: module.id,
            templateUrl: 'calc.component.temptab.html',
            providers: [calc_service_street_1.SearchWorker]
        }),
        __metadata("design:paramtypes", [calc_service_street_1.SearchWorker])
    ], TempTab);
    return TempTab;
}());
exports.TempTab = TempTab;
//# sourceMappingURL=calc.component.temptab.js.map