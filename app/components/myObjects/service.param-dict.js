/*! PILab 18-07-2021 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/common/http"),model_addr_1=require("../premisesCalcTest/model.addr"),ParamDictDownloader=function(){function a(a){this.http=a}return a.prototype.Download=function(){var a=this.http.get("./data/test/calcuidicts/premisescalc.json"),b=new model_addr_1.AddrModel("",!1,"","",!1,"",null,null,!1,null,"");return new Promise(function(c,d){return a.subscribe(function(a){a.districts=b.distrdict,a.massifs=b.massivedict,c(a)},function(a){d(a)})})},a=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.HttpClient])],a)}();exports.ParamDictDownloader=ParamDictDownloader;