/*! PILab 02-02-2022 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var RemStateModel=function(){function a(){this.common_is=!1,this.common_val=0,this.remclass_is=!1,this.remclass=0,this.devaluation_visible="none",this.devaluation_is=!1,this.devaluation=0,this.avail_visible="none",this.avail_is=!1,this.avail=0,this.tfa_visible="none",this.mainParametersAreFilled=!1,this.remclass_dict={0:["Укажите класс отделки",0],1:["После строителей - без  (строительный минимум)",1],2:["После строителей + качественная стяжка и эл. разводка",2],3:["Изношенная отделка (необходим капремонт всех элементов)",2],4:['Ремонт "Эконом" (нижний ценовой диапазон материалов и СМР)',5],5:['Ремонт "Стандарт" (средний ценовой диапазон материалов и СМР)',6],6:['Ремонт "Люкс" (верхний ценовой диапазон материалов и СМР)',7]},this.devaluation_dict={0:["Укажите состояние ремонта",0],1:["Незаконченный ремонт",0],2:["Сильно изношенный (пригодный для проживания) б/у ремонт",.25],3:["Б/у ремонт в средне изношенном состоянии",.5],4:["Б/у ремонт в хорошем состоянии (почти новый)",.75],5:["Абсолютно новый ремонт",1]},this.avail_dict={0:["Укажите готовность неоконченного ремонта",0],1:["Готовность 20%",.2],2:["Готовность 30%",.3],3:["Готовность 40%",.4],4:["Готовность 50%",.5],5:["Готовность 60%",.6],6:["Готовность 70%",.7],7:["Готовность 80%",.8],8:["Готовность 90%",.9]},this.tfa_dict={tech:["Наличие кондиционеров и встроенной бытовой техники",!1,2],furniture:["Полностю меблированана в соответсвие с классом ремонта",!1,2],authdesign:["Профессиональный авторский дизай интерьера (дизайн-проект)",!1,1]}}return a.prototype.validateModel=function(a){var b=!0;this.remclass_is?(a.remclass=!1,this.remclass>3?(b=b&&this.devaluation_is,this.devaluation_visible="block",1===this.devaluation?(b=b&&this.avail_is,this.avail_visible="block",this.tfa_visible="none",a.avail=!this.avail_is&&this.mainParametersAreFilled):(this.tfa_visible="block",this.avail_visible="none",a.avail=!1),a.devaluation=!this.devaluation_is&&this.mainParametersAreFilled):(this.devaluation_visible="none",this.avail_visible="none",this.tfa_visible="none")):(b=!1,this.devaluation_visible="block",this.tfa_visible="none",this.avail_visible="none",a.remclass=this.mainParametersAreFilled),this.common_is=b,b&&this.calculateVal()},a.prototype.calculateVal=function(){var a=this.remclass_dict[this.remclass][1];if(this.remclass>3&&this.devaluation>1)for(var b in this.tfa_dict)this.tfa_dict[b][1]&&(a+=this.tfa_dict[b][2]*(this.remclass-2)/4);a=1===this.devaluation?2+(a-2)*this.avail_dict[this.avail][1]:2+(a-2)*this.devaluation_dict[this.devaluation][1],this.common_val=a},a}();exports.RemStateModel=RemStateModel;