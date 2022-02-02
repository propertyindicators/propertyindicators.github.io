/*! PILab 02-02-2022 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),model_params_1=require("./model.params"),model_remstate_1=require("./model.remstate"),ParamsForm=function(){function a(){this.on_params_changed=new core_1.EventEmitter,this.headcolor="rgb(152,15,0)",this.objectKeys=Object.keys,this.square_str="",this.sqm_lable="кв.м",this.sqm_tip="общая площадь помещения в кв.м, разделитель дробной части - точка",this.sqr_err_visible="none",this.reqparam={square:!0,placement:!1,buildtype_mb:!1,buildtype_otb:!1,entry_type:!1,entry_placement:!1,remclass:!1,devaluation:!1,avail:!1}}return a.prototype.ngOnInit=function(){$(document).ready(function(){$('[data-toggle="tooltip"]').tooltip()}),this.remstate=new model_remstate_1.RemStateModel(this.uiDictionaries),this.params=new model_params_1.ParamsModel(this.uiDictionaries,this.remstate),console.log(this.params)},a.prototype.onSqrChanged=function(a){this.params.change_sqr(a),this.params.square_is?this.sqr_err_visible="none":""===this.params.square_err?this.sqr_err_visible="none":this.sqr_err_visible="block",this.onParamsChanged()},a.prototype.onPlacementChanged=function(a){this.params.change_placement(a),this.onParamsChanged()},a.prototype.onBuildTypeMbChanged=function(a){this.params.change_buildtype_mb(a),this.onParamsChanged()},a.prototype.onBuildTypeOtbChanged=function(a){this.params.change_buildtype_otb(a),this.onParamsChanged()},a.prototype.onEnteryTypeChanged=function(a){this.params.change_entry_type(a),this.onParamsChanged()},a.prototype.onEnteryPlacementChanged=function(a){this.params.change_entry_placement(a),this.onParamsChanged()},a.prototype.onTradevalueFeaturesChanged=function(){this.params.recalculate_tv(),this.onParamsChanged()},a.prototype.onRemclassIn=function(a){this.remstate.remclass_index=a,this.remstate.remclass_is=!0,this.validateState()},a.prototype.onDevaluationIn=function(a){this.remstate.devaluation_index=a,this.remstate.devaluation_is=!0,this.validateState()},a.prototype.onAvailIn=function(a){this.remstate.avail_index=a,this.remstate.avail_is=!0,this.validateState()},a.prototype.onParamsChanged=function(){this.on_params_changed.emit(this.params),this.highlightNextRequiredField()},a.prototype.highlightNextRequiredField=function(){var a=!1;for(var b in this.reqparam){if("remclass"===b)break;a||this.params[b+"_is"]?this.reqparam[b]=!1:(this.reqparam[b]=!0,a=!0)}this.remstate.mainParametersAreFilled=!a,this.remstate.validateModel(this.reqparam)},a.prototype.validateState=function(){this.remstate.validateModel(this.reqparam),this.params.state=this.remstate.score,this.params.state_is=this.remstate.score_is,this.onParamsChanged()},__decorate([core_1.Input(),__metadata("design:type",Object)],a.prototype,"uiDictionaries",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],a.prototype,"on_params_changed",void 0),a=__decorate([core_1.Component({selector:"comp-params",moduleId:module.id,templateUrl:"component.params.html",styleUrls:["component.addr.css"]})],a)}();exports.ParamsForm=ParamsForm;