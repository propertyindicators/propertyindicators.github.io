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
var calc_model_params_1 = require("./calc.model.params");
var ParamsForm = /** @class */ (function () {
    function ParamsForm() {
        this.on_params_changed = new core_1.EventEmitter();
        this.headcolor = "rgb(152,15,0)";
        this.params = new calc_model_params_1.ParamsModel();
        this.roomsKeys = Object.keys;
        this.floorKeys = Object.keys;
        this.buildtypeKeys = Object.keys;
        this.stateKeys = Object.keys;
        this.square_str = "";
        this.sqm_lable = "кв.м";
        this.sqm_tip = "квартиры в кв.м, дробная часть - точка";
        this.sqr_visible = "none";
    }
    ParamsForm.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('[data - toggle="tooltip"]').tooltip();
        });
    };
    //контролы изменения полей
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
    ParamsForm.prototype.onStateIn = function (select) {
        this.params.state = select - 1;
        this.params.state_is = true;
        this.onModelChange();
    };
    ParamsForm.prototype.onModelChange = function () {
        this.on_params_changed.emit(this.params);
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
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ParamsForm.prototype, "on_params_changed", void 0);
    ParamsForm = __decorate([
        core_1.Component({
            selector: 'comp-params',
            moduleId: module.id,
            templateUrl: 'calc.component.params.html',
            styleUrls: ['calc.component.addr.css']
        })
    ], ParamsForm);
    return ParamsForm;
}());
exports.ParamsForm = ParamsForm;
//# sourceMappingURL=calc.component.params.js.map