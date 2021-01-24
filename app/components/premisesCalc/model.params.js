/*! PILab 24-01-2021 (c) 2021 propertyindicators@gmail.com */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var ParamsModel=function(){function a(a){this.square_is=!1,this.square_str="",this.square_err="",this.square=0,this.placement_is=!1,this.placement=0,this.placement_index=0,this.buildtype_mb_is=!1,this.buildtype_mb=0,this.buildtype_otb_is=!1,this.buildtype_otb=0,this.entry_type_is=!1,this.entry_type_index=0,this.entry_placement_is=!1,this.entry_placement_index=0,this.is_residential_fund=!1,this.tv=0,this.state_is=!1,this.placement_dict={0:["Укажите размещение в здании",-1],1:["1-й этаж",0],2:["2-й этаж",.1],3:["3-й этаж",.2],4:["Выше 3-го этажа",.3],5:["Подвал без окон",1],6:["Подвал с приямками",.7],7:["Полуподвал",.5],8:["Цоколь (больше 50% над землей)",.3]},this.buildtype_mb_dict={0:["Выберите период постройки",-1],1:["Старая застройка (до 2003-го года)",0],2:["Здание после частичной реконструкции (капремонта)",.5],3:["Современная постройка (или после полной реконструкции в современном формате)",1]},this.buildtype_otb_dict={0:["Выберите тип здания",-1],1:["Жилой дом",0],2:["Нежилая пристройка к жилому дому",.5],3:["Нежилое отдельностоящее здание",1]},this.entery_type_dict=["Выберите тип входа","Отдельный вход","Общий с другими помещениями вход"],this.entery_placement_dict=["Выберите размещение входа","С фасада улицы","Не фасадный, но хорошо просматривается с фасада улицы","Не фасадный, не просматривается с фасада улицы"],this.tradevalue_features={traderow:["Расположено в торговом ряду (места высокой концентрации людских потоков)",!1,1],glasscase:["Наличие торговых витрин",!1,1.5],shopwindow:["Представительская входная группа или фасадные окна с возможностью размещения внешней рекламы",!1,1]},this.additional_params={res_fund:["В жилом фонде",!1]},this.remStateInfo=a}return a.prototype.change_sqr=function(a){this.square_str=a,this.validateSquare()},a.prototype.change_placement=function(a){this.placement_is=!0,this.placement_index=a,this.placement=this.placement_dict[a][1],this.recalculate_tv()},a.prototype.change_buildtype_mb=function(a){this.buildtype_mb_is=!0,this.buildtype_mb=this.buildtype_mb_dict[a][1]},a.prototype.change_buildtype_otb=function(a){this.buildtype_otb_is=!0,this.buildtype_otb=this.buildtype_otb_dict[a][1]},a.prototype.change_entery_type=function(a){this.entry_type_is=!0,this.entry_type_index=a,this.recalculate_tv()},a.prototype.change_entery_placement=function(a){this.entry_placement_is=!0,this.entry_placement_index=a,this.recalculate_tv()},a.prototype.recalculate_tv=function(){var a=0;3!=this.entry_placement_index&&0!=this.entry_placement_index&&(1===this.entry_type_index?a=1.5:2===this.entry_type_index&&(a=1),3===this.placement_index?a/=1.5:4===this.placement_index&&(a/=2),2===this.entry_placement_index&&(a/=2)),this.tradevalue_features.glasscase[1]?a+=this.tradevalue_features.glasscase[2]:this.tradevalue_features.shopwindow[1]&&(a+=this.tradevalue_features.shopwindow[2]),this.tv=a},a.prototype.validateSquare=function(){/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(this.square_str)?(this.square=Number(this.square_str),this.square<1||this.square>1e4?(this.square_is=!1,this.square_err="Площадь помещения должна быть в диапазоне 1 - 10 000 кв.м"):(this.square_is=!0,this.square_err="")):(this.square=0,this.square_is=!1,""===this.square_str?this.square_err="":this.square_err="*значение площади не является числовым")},a.prototype.allRequiredAssigned=function(){return this.square_is&&this.placement_is&&this.buildtype_mb_is&&this.buildtype_otb_is&&this.entry_type_is&&this.entry_placement_is&&this.state_is},a}();exports.ParamsModel=ParamsModel;