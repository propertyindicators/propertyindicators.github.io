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
var calc_model_addr_1 = require("./calc.model.addr");
var AddrForm = /** @class */ (function () {
    function AddrForm(search, renderer, el) {
        this.search = search;
        this.renderer = renderer;
        this.el = el;
        this.count = 0;
        this.addr_visible = "none";
        this.number_visible = "none";
        //number_element: any;
        this.addr = new calc_model_addr_1.AddrModel("Выберите район", false, "", "", false, "", null, null, false, null, "");
        this.on_distr_changed = new core_1.EventEmitter();
        this.on_massive_changed = new core_1.EventEmitter();
    }
    AddrForm.prototype.onDistrIn = function () {
        var t = this;
        this.on_distr_changed.emit(this.addr.getdistrnum()); //передача сообщения о смене района родительской компоненте
        //инициализация поискового сервиса (с подгрузкой поисковых данных json) в текущей компоненете
        this.search.initData(this.addr.getdistrnum()).then(function () { t.addr_visible = "inline"; }, function () { alert("Не удалось получить  с сервера поисковые данные для определения местоположения"); });
    };
    AddrForm.prototype.streetChange = function (newvalue) {
        this.addr.street = newvalue;
        this.search.checkStreet(this.addr);
        if (this.addr.multimas)
            this.number_visible = "inline";
        else
            this.number_visible = "none";
        this.OutMessageOfMas();
    };
    AddrForm.prototype.numberChange = function (newvalue) {
        this.addr.number_str = newvalue;
        this.search.checkNumber(this.addr);
        this.OutMessageOfMas();
    };
    AddrForm.prototype.streetAutofillBlur = function () {
        var _this = this;
        if (this.addr.street_is) {
            this.addr.street = this.addr.street_found;
            if (this.addr.multimas)
                setTimeout(function () { return _this.number_element.nativeElement.focus(); }, 0);
        }
    };
    AddrForm.prototype.streetAutofillEnter = function (event) {
        if (event.keyCode === 13) {
            this.streetAutofillBlur();
        }
    };
    AddrForm.prototype.OutMessageOfMas = function () {
        if (this.addr.massive_is)
            this.on_massive_changed.emit(this.addr.getdistrnum()); //передача сообщения о смене массива родительской компоненте
        else
            this.on_massive_changed.emit(0); //передача сообщения родительской компоненте об отсутсвии валидации адреса
    };
    AddrForm.prototype.TestMethod = function () {
        var a = 0;
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddrForm.prototype, "on_distr_changed", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], AddrForm.prototype, "on_massive_changed", void 0);
    __decorate([
        core_1.ViewChild("number", { read: core_1.ElementRef }),
        __metadata("design:type", core_1.ElementRef)
    ], AddrForm.prototype, "number_element", void 0);
    AddrForm = __decorate([
        core_1.Component({
            selector: 'comp-addr',
            moduleId: module.id,
            templateUrl: 'calc.component.addr.html',
            styleUrls: ['calc.component.addr.css'],
            providers: [calc_service_street_1.SearchWorker]
        }),
        __metadata("design:paramtypes", [calc_service_street_1.SearchWorker, core_1.Renderer2, core_1.ElementRef])
    ], AddrForm);
    return AddrForm;
}());
exports.AddrForm = AddrForm;
//# sourceMappingURL=calc.component.addr.js.map