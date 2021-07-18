/*! PILab 18-07-2021 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),http_1=require("@angular/common/http"),model_addr_1=require("./model.addr"),model_result_1=require("./model.result"),service_calc_1=require("./service.calc"),MainComponent=function(){function a(a,b){this.calcserv=a,this.http=b,this.addr=new model_addr_1.AddrModel("",!1,"","",!1,"",null,null,!1,null,""),this.result=new model_result_1.ResultViewModel,this.paramsVisible="none",this.resultVisible="none"}return a.prototype.onAddrChanged=function(a){this.addr=a,this.changeResultView()},a.prototype.onParamsChanged=function(a){this.params=a,this.changeResultView()},a.prototype.changeResultView=function(){var a=this;if(this.addr.massive_is){this.paramsVisible="block";var b=this.params;null!=b&&b.allRequiredAssigned()?this.calcserv.getResultPromise(this.addr,this.params).then(function(b){a.result=b,a.resultVisible="block"}).catch(function(a){return alert("Не удалось загрузить данные о ценах на недвижимость с сервера: \n"+a.message)}):this.resultVisible="none"}else this.paramsVisible="none",this.resultVisible="none"},a=__decorate([core_1.Component({selector:"main-app",moduleId:module.id,templateUrl:"component.main.html",providers:[service_calc_1.CalcService]}),__metadata("design:paramtypes",[service_calc_1.CalcService,http_1.HttpClient])],a)}();exports.MainComponent=MainComponent;