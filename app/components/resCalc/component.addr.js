/*! PILab 18-04-2021 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),service_street_1=require("./service.street"),model_addr_1=require("./model.addr"),AddrForm=function(){function a(a,b,c){this.search=a,this.renderer=b,this.el=c,this.count=0,this.addr_visible="none",this.number_visible="none",this.addr=new model_addr_1.AddrModel("Выберите район",!1,"","",!1,"",null,null,!1,null,""),this.on_distr_changed=new core_1.EventEmitter,this.on_massive_changed=new core_1.EventEmitter,this.objectKeys=Object.keys}return a.prototype.onDistrIn=function(a){this.addr.district=this.addr.distrdict[a];var b=this;this.on_distr_changed.emit(a),this.addr_visible="none",this.number_visible="none",this.addr.req_district=!1,this.search.initData(a).then(function(){return b.addr_visible="inline"}).catch(function(){return alert("Не удалось получить с сервера поисковые данные для определения местоположения")}),this.addr.setNullData(),this.OutMessageOfMas()},a.prototype.streetChange=function(a){this.addr.street=a,this.search.checkStreet(this.addr),this.addr.multimas?this.number_visible="inline":this.number_visible="none",this.OutMessageOfMas()},a.prototype.numberChange=function(a){this.addr.number_str=a,this.search.checkNumber(this.addr),this.OutMessageOfMas()},a.prototype.streetAutofillBlur=function(){var a=this;this.addr.street_is&&(this.addr.street=this.addr.street_found,this.addr.multimas&&setTimeout(function(){return a.number_element.nativeElement.focus()},0))},a.prototype.streetAutofillEnter=function(a){13===a.keyCode&&this.streetAutofillBlur()},a.prototype.OutMessageOfMas=function(){this.addr.massive_is?this.on_massive_changed.emit(this.addr.massive_int):this.on_massive_changed.emit(0)},__decorate([core_1.Output(),__metadata("design:type",Object)],a.prototype,"on_distr_changed",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],a.prototype,"on_massive_changed",void 0),__decorate([core_1.ViewChild("number",{read:core_1.ElementRef}),__metadata("design:type",core_1.ElementRef)],a.prototype,"number_element",void 0),a=__decorate([core_1.Component({selector:"comp-addr",moduleId:module.id,templateUrl:"component.addr.html",styleUrls:["component.addr.css"],providers:[service_street_1.SearchWorker]}),__metadata("design:paramtypes",[service_street_1.SearchWorker,core_1.Renderer2,core_1.ElementRef])],a)}();exports.AddrForm=AddrForm;