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
        this.sqm_tip = "общая площадь квартиры в кв.м, разделитель дробной части - точка";
        this.sqr_visible = "none";
        this.remstate = new model_remstate_1.RemStateModel();
        // Next required field highlighting maintenance
        this.reqparam = {
            rooms: true,
            floor: false,
            square: false,
            buildtype: false,
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
    //контролы изменения общих параметров квартиры
    ParamsForm.prototype.onRoomsIn = function (select) {
        this.params.rooms = select;
        this.params.rooms_is = true;
        if (this.params.square > 0)
            this.params.validateSqrRange();
        if (this.params.square_err === "") {
            this.sqr_visible = "none";
        }
        else {
            this.sqr_visible = "block";
        }
        this.params.schemaTypeRooms();
        this.onModelChange();
    };
    ParamsForm.prototype.onFloorIn = function (select) {
        this.params.floor = select;
        this.params.floor_is = true;
        this.onModelChange();
    };
    ParamsForm.prototype.onBuildTypeIn = function (select) {
        this.params.buildtype = select;
        this.params.buildtype_is = true;
        if (this.params.square > 0) {
            this.params.validateSqrRange();
        }
        if (this.params.square_err === "") {
            this.sqr_visible = "none";
        }
        else {
            this.sqr_visible = "block";
        }
        this.params.schemaTypeRooms();
        this.onModelChange();
    };
    ParamsForm.prototype.onSqrChange = function (newval) {
        this.params.square_str = newval;
        this.validateSquare();
        if (this.params.square_is) {
            this.sqr_visible = "none";
        }
        else {
            if (this.params.square_err === "") {
                this.sqr_visible = "none";
            }
            else {
                this.sqr_visible = "block";
            }
        }
        this.onModelChange();
    };
    //убрать потом
    ParamsForm.prototype.onStateIn = function (select) {
        this.params.state = select - 1;
        this.params.state_is = true;
        this.onModelChange();
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
    ParamsForm.prototype.onModelChange = function () {
        this.on_params_changed.emit(this.params);
        this.highlightNextRequiredField(); // Highlight next required field
    };
    ParamsForm.prototype.highlightNextRequiredField = function () {
        var allreadyMissedFound = false;
        if (!this.params.rooms_is) {
            this.reqparam.rooms = true;
            allreadyMissedFound = true;
        }
        else {
            this.reqparam.rooms = false;
        }
        if (!this.params.floor_is && !allreadyMissedFound) {
            this.reqparam.floor = true;
            allreadyMissedFound = true;
        }
        else {
            this.reqparam.floor = false;
        }
        if (!allreadyMissedFound) { // square validation is dependent on the next "buildtype" field element filled
            if (this.params.square_is) {
                this.reqparam.square = false;
            }
            else {
                if (this.params.square > 0) {
                    if (this.params.buildtype_is) {
                        this.reqparam.square = true;
                        allreadyMissedFound = true;
                    }
                    else {
                        this.reqparam.square = false;
                    }
                }
                else {
                    this.reqparam.square = true;
                    allreadyMissedFound = true;
                }
            }
        }
        if (!this.params.buildtype_is && !allreadyMissedFound) {
            this.reqparam.buildtype = true;
            allreadyMissedFound = true;
        }
        else {
            this.reqparam.buildtype = false;
        }
        this.remstate.mainParametersAreFilled = !allreadyMissedFound;
        this.remstate.validateModel(this.reqparam);
    };
    //валидатор поля площади
    ParamsForm.prototype.validateSquare = function () {
        if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
            .test(this.params.square_str)) {
            this.params.square = Number(this.params.square_str);
            this.params.validateSqrRange();
        }
        else {
            this.params.square = 0;
            this.params.square_is = false;
            if (this.params.square_str === "") {
                this.params.square_err = "";
            }
            else {
                this.params.square_err = "*значение площади не является числовым";
            }
        }
    };
    //постоянный рендеринг для состояния отделки
    ParamsForm.prototype.validateState = function () {
        this.remstate.validateModel(this.reqparam);
        this.params.state = this.remstate.common_val;
        this.params.state_is = this.remstate.common_is;
        this.onModelChange();
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