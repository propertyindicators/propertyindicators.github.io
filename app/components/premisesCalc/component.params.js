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
var model_params_1 = require("./model.params");
var model_remstate_1 = require("./model.remstate");
var ParamsForm = /** @class */ (function () {
    function ParamsForm() {
        this.on_params_changed = new core_1.EventEmitter();
        this.headcolor = "rgb(152,15,0)";
        this.params = new model_params_1.ParamsModel();
        this.objectKeys = Object.keys;
        this.square_str = "";
        this.sqm_lable = "кв.м";
        this.sqm_tip = "общая площадь помещения в кв.м, разделитель дробной части - точка";
        this.sqr_err_visible = "none";
        this.remstate = new model_remstate_1.RemStateModel();
        // Next required field highlighting maintenance
        this.reqparam = {
            square: true,
            placement: false,
            buildtype_mb: false,
            buildtype_otb: false,
            entry_type: false,
            entry_placement: false,
            remclass: false,
            devaluation: false,
            avail: false
        };
    }
    ParamsForm.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('[data-toggle="tooltip"]').tooltip();
        });
    };
    //контролы изменения общих полей ввода параметров помещения
    ParamsForm.prototype.onSqrChanged = function (sqrStr) {
        this.params.change_sqr(sqrStr);
        if (this.params.square_is) {
            this.sqr_err_visible = "none";
        }
        else {
            if (this.params.square_err === "") {
                this.sqr_err_visible = "none";
            }
            else {
                this.sqr_err_visible = "block";
            }
        }
        this.onParamsChanged();
    };
    ParamsForm.prototype.onPlacementChanged = function (index) {
        this.params.change_placement(index);
        this.onParamsChanged();
    };
    ParamsForm.prototype.onBuildTypeMbChanged = function (index) {
        this.params.change_buildtype_mb(index);
        this.onParamsChanged();
    };
    ParamsForm.prototype.onBuildTypeOtbChanged = function (index) {
        this.params.change_buildtype_otb(index);
        this.onParamsChanged();
    };
    ParamsForm.prototype.onEnteryTypeChanged = function (index) {
        this.params.change_entery_type(index);
        this.onParamsChanged();
    };
    ParamsForm.prototype.onEnteryPlacementChanged = function (index) {
        this.params.change_entery_placement(index);
        this.onParamsChanged();
    };
    ParamsForm.prototype.onTradevalueFeaturesChanged = function () {
        this.params.recalculate_tv();
        this.onParamsChanged();
    };
    //обработчики выбора формы состояния отделки
    ParamsForm.prototype.onRemclassIn = function (select) {
        this.remstate.remclass = Number(select);
        this.remstate.remclass_is = true;
        this.validateState();
    };
    ParamsForm.prototype.onDevaluationIn = function (select) {
        this.remstate.devaluation = Number(select);
        this.remstate.devaluation_is = true;
        this.validateState();
    };
    ParamsForm.prototype.onAvailIn = function (select) {
        this.remstate.avail = Number(select);
        this.remstate.avail_is = true;
        this.validateState();
    };
    //метод отправки события об изменении общей модели параметров "наверх"
    ParamsForm.prototype.onParamsChanged = function () {
        this.on_params_changed.emit(this.params);
        this.highlightNextRequiredField(); // Highlight next required field
    };
    ParamsForm.prototype.highlightNextRequiredField = function () {
        var allreadyMissedFound = false;
        for (var field in this.reqparam) {
            if (field === "remclass")
                break;
            if (!allreadyMissedFound && !this.params[field + "_is"]) {
                this.reqparam[field] = true;
                allreadyMissedFound = true;
            }
            else {
                this.reqparam[field] = false;
            }
        }
        // remstate fields highlighting
        this.remstate.mainParametersAreFilled = !allreadyMissedFound;
        this.remstate.validateModel(this.reqparam);
    };
    //постоянный рендеринг для состояния отделки
    ParamsForm.prototype.validateState = function () {
        this.remstate.validateModel(this.reqparam);
        this.params.state = this.remstate.common_val;
        this.params.state_is = this.remstate.common_is;
        this.onParamsChanged();
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ParamsForm.prototype, "on_params_changed", void 0);
    ParamsForm = __decorate([
        core_1.Component({
            selector: 'comp-params',
            moduleId: module.id,
            templateUrl: 'component.params.html',
            styleUrls: ['component.addr.css']
        })
    ], ParamsForm);
    return ParamsForm;
}());
exports.ParamsForm = ParamsForm;
//# sourceMappingURL=component.params.js.map