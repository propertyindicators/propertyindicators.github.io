"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.distr = 0;
        this.massive = 0;
        this.tabvisible = "none";
        this.paramsvisible = "none";
    }
    MainComponent.prototype.onDistrChanged = function (distr) {
        this.distr = distr;
        this.tabvisible = "inline";
    };
    MainComponent.prototype.onMassiveChanged = function (massive) {
        this.massive = massive;
        if (massive === 0)
            this.paramsvisible = "none";
        else
            this.paramsvisible = "inline";
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main-app',
            moduleId: module.id,
            template: "<div>\n                   <comp-addr (on_distr_changed)=\"onDistrChanged($event)\" (on_massive_changed)=\"onMassiveChanged($event)\"></comp-addr>\n               </div>\n                <div [style.display]=\"paramsvisible\">\n                   <comp-params></comp-params>\n               </div>\n               <div>\n                   <comp-temptab [distr]=\"distr\" [tabvisible]=\"tabvisible\"></comp-temptab>\n               <div>"
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
//# sourceMappingURL=calc.component.main.js.map