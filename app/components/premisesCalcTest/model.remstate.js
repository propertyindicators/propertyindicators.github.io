/*! PILab 23-01-2021 (c) 2017 propertyindicators@gmail.com */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var RemStateModel=function(){function a(a){this.score=0,this.remclass_index=0,this.devaluation_index=0,this.avail_index=0,this.score_is=!1,this.remclass_is=!1,this.devaluation_visible="none",this.devaluation_is=!1,this.avail_visible="none",this.avail_is=!1,this.addelements_visible="none",this.mainParametersAreFilled=!1,this.remclass_dict=a.remclass_dict,this.devaluation_dict=a.devaluation_dict,this.avail_dict=a.avail_dict,this.addelements_dict=a.addelements_dict}return a.prototype.validateModel=function(a){var b=!0;this.remclass_is?(a.remclass=!1,this.remclass_index>3?(b=b&&this.devaluation_is,this.devaluation_visible="block",1===this.devaluation_index?(b=b&&this.avail_is,this.avail_visible="block",this.addelements_visible="none",a.avail=!this.avail_is&&this.mainParametersAreFilled):(this.addelements_visible="block",this.avail_visible="none",a.avail=!1),a.devaluation=!this.devaluation_is&&this.mainParametersAreFilled):(this.devaluation_visible="none",this.avail_visible="none",this.addelements_visible="none")):(b=!1,this.devaluation_visible="none",this.addelements_visible="none",this.avail_visible="none",a.remclass=this.mainParametersAreFilled),this.score_is=b,b&&this.calculateVal()},a.prototype.calculateVal=function(){var a=this.remclass_dict[this.remclass_index][1];if(this.remclass_index>3&&this.devaluation_index>1)for(var b in this.addelements_dict)this.addelements_dict[b][1]&&(a+=this.addelements_dict[b][2]*(this.remclass_index-2)/4);a=1===this.devaluation_index?2+(a-2)*this.avail_dict[this.avail_index][1]:2+(a-2)*this.devaluation_dict[this.devaluation_index][1],this.score=a},a}();exports.RemStateModel=RemStateModel;