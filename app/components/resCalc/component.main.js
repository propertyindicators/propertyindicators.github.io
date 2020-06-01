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
var model_result_1 = require("./model.result");
var service_calc_1 = require("./service.calc");
var MainComponent = /** @class */ (function () {
    function MainComponent(calcserv) {
        this.calcserv = calcserv;
        this.distr = 0;
        this.massive = 0;
        this.tabvisible = "none";
        this.paramsvisible = "none"; //none
        this.resultvisible = "none"; //none
        this.currency = "usd";
        this.result = new model_result_1.ResultViewModel();
    }
    MainComponent.prototype.onDistrChanged = function (distr) {
        this.distr = distr;
        this.tabvisible = "inline";
    };
    MainComponent.prototype.onMassiveChanged = function (massive) {
        this.massive = massive;
        this.changeResultView();
    };
    MainComponent.prototype.onParamsChanged = function (p) {
        this.params = p;
        this.changeResultView();
    };
    MainComponent.prototype.changeResultView = function () {
        var _this = this;
        if (this.massive === 0) {
            this.paramsvisible = "none"; //none
            this.resultvisible = "none"; //none
        }
        else {
            this.paramsvisible = "block";
            var p = this.params;
            if (p != null && p.rooms_is && p.floor_is && p.square_is && p.state_is) {
                this.calcserv.getResultPromise(this.massive, this.params).then(function (view) {
                    _this.result = view;
                    _this.resultvisible = "block";
                }).catch(function (err) { return alert("Не удалось загрузить данные о ценах на недвижимость с сервера: \n" + err.message); });
            }
            else {
                this.resultvisible = "none";
            } //none
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