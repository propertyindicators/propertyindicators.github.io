/*! PILab 18-07-2021 */

"use strict";var __decorate=this&&this.__decorate||function(a,b,c,d){var e,f=arguments.length,g=f<3?b:null===d?d=Object.getOwnPropertyDescriptor(b,c):d;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)g=Reflect.decorate(a,b,c,d);else for(var h=a.length-1;h>=0;h--)(e=a[h])&&(g=(f<3?e(g):f>3?e(b,c,g):e(b,c))||g);return f>3&&g&&Object.defineProperty(b,c,g),g},__metadata=this&&this.__metadata||function(a,b){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(a,b)};Object.defineProperty(exports,"__esModule",{value:!0});var core_1=require("@angular/core"),service_doc_extractor_1=require("./service.doc-extractor"),MyObjectsComponent=function(){function a(){this.onObjectSelected=new core_1.EventEmitter,this.selectedPremises=-1}return a.prototype.ngOnInit=function(){this.formObjList()},a.prototype.formObjList=function(){this.objRows=new Array;var a=this.docExtractor.GetPremisesCount();this.listEmpty=a<1;for(var b=0;b<a;b++){var c=this.docExtractor.ExtractPremisesParams(b),d=c.street;d=""===c.numberOnStreet?d:d+" "+c.numberOnStreet,d+=" ("+c.massif+")";var e=d+", "+c.square+", "+c.placement;this.objRows.push(new ObjRow(b,e))}return a},a.prototype.onSelected=function(a){this.onObjectSelected.emit(a.index),this.selectedPremises=a.index},a.prototype.onDelete=function(a){var b=this;if(confirm("Вы действительно хотите удалить из списка отслеживаемых объектов помещение: "+this.objRows[a.index].description+" ?")){this.docExtractor.DeletePremises(a.index).then(function(){b.selectedPremises>=0&&a.index<=b.selectedPremises&&b.selectedPremises--;var c=b.formObjList();-1===b.selectedPremises&&c>0&&(b.selectedPremises=0),b.onObjectSelected.emit(b.selectedPremises)}).catch(function(a){console.log(a),alert("Error when communicating with server. Try re-login your session.")})}},__decorate([core_1.Input(),__metadata("design:type",service_doc_extractor_1.DocExtractor)],a.prototype,"docExtractor",void 0),__decorate([core_1.Output(),__metadata("design:type",Object)],a.prototype,"onObjectSelected",void 0),a=__decorate([core_1.Component({selector:"comp-objects",moduleId:module.id,templateUrl:"component.objects.html",styleUrls:["module.styles.css"]})],a)}();exports.MyObjectsComponent=MyObjectsComponent;var ObjRow=function(){function a(a,b){this.index=a,this.description=b}return a}();