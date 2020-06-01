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
var model_addr_1 = require("./model.addr");
var model_params_1 = require("./model.params");
var model_result_1 = require("./model.result");
var service_calc_1 = require("./service.calc");
var MainComponent = /** @class */ (function () {
    function MainComponent(calcserv) {
        this.calcserv = calcserv;
        this.addr = new model_addr_1.AddrModel("", false, "", "", false, "", null, null, false, null, "");
        this.params = new model_params_1.ParamsModel();
        this.result = new model_result_1.ResultViewModel();
        this.paramsVisible = "none";
        this.resultVisible = "none";
    }
    MainComponent.prototype.onAddrChanged = function (addr) {
        this.addr = addr;
        this.changeResultView();
    };
    MainComponent.prototype.onParamsChanged = function (params) {
        this.params = params;
        this.changeResultView();
    };
    MainComponent.prototype.changeResultView = function () {
        var _this = this;
        if (!this.addr.massive_is) {
            this.paramsVisible = "none";
            this.resultVisible = "none";
        }
        else {
            this.paramsVisible = "block";
            var p = this.params;
            if (p != null && p.allRequiredAssigned()) {
                this.calcserv.getResultPromise(this.addr, this.params).then(function (view) {
                    _this.result = view;
                    _this.resultVisible = "block";
                }).catch(function (err) { return alert("Не удалось загрузить данные о ценах на недвижимость с сервера: \n" + err.message); });
            }
            else {
                this.resultVisible = "none";
            }
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            moduleId: module.id,
            templateUrl: 'component.main.html',
            providers: [service_calc_1.CalcService]
        }),
        __metadata("design:paramtypes", [service_calc_1.CalcService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=component.main.js.map