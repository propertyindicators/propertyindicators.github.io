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
var AddrModel = /** @class */ (function () {
    function AddrModel(district, street, number_str) {
        this.district = district;
        this.street = street;
        this.number_str = number_str;
        this.distrdict = {
            "Голосеевский": 1,
            "Дарницкий": 2,
            "Деснянский": 3,
            "Днепровский": 4,
            "Оболонский": 5,
            "Печерский": 6,
            "Подольский": 7,
            "Святошинский": 8,
            "Соломенский": 9,
            "Шевченковский": 10
        };
    }
    AddrModel.prototype.getdistrnum = function () {
        if (!!this.distrdict[this.district]) {
            return this.distrdict[this.district];
        }
        else {
            return 0;
        }
        ;
    };
    return AddrModel;
}());
exports.AddrModel = AddrModel;
var AddrForm = /** @class */ (function () {
    function AddrForm() {
        this.count = 0;
        this.hid_2b = "none";
        this.addr_visible = "none";
        this.addr = new AddrModel("Выберите район", "", "");
        this.on_distr_changed = new core_1.EventEmitter();
    }
    AddrForm.prototype.onDistrIn = function () {
        this.addr_visible = "inline";
        this.on_distr_changed.emit(this.addr.getdistrnum());
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddrForm.prototype, "on_distr_changed", void 0);
    AddrForm = __decorate([
        core_1.Component({
            selector: 'comp-addr',
            moduleId: module.id,
            templateUrl: 'calc.component.addr.html',
            styleUrls: ['calc.component.addr.css']
        })
    ], AddrForm);
    return AddrForm;
}());
exports.AddrForm = AddrForm;
//# sourceMappingURL=calc.component.addr.js.map