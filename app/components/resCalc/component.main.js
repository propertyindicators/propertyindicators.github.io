/*! PILab 18-04-2021 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),model_result_1=require("./model.result"),service_calc_1=require("./service.calc"),MainComponent=function(){function a(a){this.calcserv=a,this.distr=0,this.massive=0,this.tabvisible="none",this.paramsvisible="none",this.resultvisible="none",this.currency="usd",this.result=new model_result_1.ResultViewModel}return a.prototype.onDistrChanged=function(a){this.distr=a,this.tabvisible="inline"},a.prototype.onMassiveChanged=function(a){this.massive=a,this.changeResultView()},a.prototype.onParamsChanged=function(a){this.params=a,this.changeResultView()},a.prototype.changeResultView=function(){var a=this;if(0===this.massive)this.paramsvisible="none",this.resultvisible="none";else{this.paramsvisible="block";var b=this.params;null!=b&&b.rooms_is&&b.floor_is&&b.square_is&&b.state_is?this.calcserv.getResultPromise(this.massive,this.params).then(function(b){a.result=b,a.resultvisible="block"}).catch(function(a){return alert("Не удалось загрузить данные о ценах на недвижимость с сервера: \n"+a.message)}):this.resultvisible="none"}},a=__decorate([core_1.Component({selector:"main-app",moduleId:module.id,templateUrl:"component.main.html",providers:[service_calc_1.CalcService]}),__metadata("design:paramtypes",[service_calc_1.CalcService])],a)}();exports.MainComponent=MainComponent;