/*! PILab 23-01-2021 (c) 2017 propertyindicators@gmail.com */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),platform_browser_1=require("@angular/platform-browser"),forms_1=require("@angular/forms"),http_1=require("@angular/common/http"),component_main_1=require("./component.main"),component_addr_1=require("./component.addr"),PremisesCalcModule=function(){function a(){}return a=__decorate([core_1.NgModule({imports:[platform_browser_1.BrowserModule,forms_1.FormsModule,http_1.HttpClientModule],declarations:[component_main_1.MainComponent,component_addr_1.AddrForm],bootstrap:[component_main_1.MainComponent],providers:[]})],a)}();exports.PremisesCalcModule=PremisesCalcModule;