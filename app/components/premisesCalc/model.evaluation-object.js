/*! PILab 02-02-2022 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var EvaluationLocationPremises=function(){function a(a){this.Street=a.street,this.NumberOnStreet=a.number_str,this.Massif=a.massive_str,this.MassifNumber=a.massive_int,this.PeopleStreemValue=a.peopleStreamValue,this.TransportStreemValue=a.transportStreamValue}return a}(),EvaluationParameter=function(){function a(a,b){this.Choice=a,this.Value=b}return a}(),EvaluationDecoration=function(){function a(a){this.Class=new EvaluationParameter(a.remclass_dict[a.remclass][0],a.remclass),this.Devaluation=new EvaluationParameter(a.devaluation_dict[a.devaluation][0],a.devaluation),this.Availability=new EvaluationParameter(a.avail_dict[a.avail][0],a.avail),this.AdditionalElements=Array();for(var b in a.tfa_dict)a.tfa_dict[b][1]&&this.AdditionalElements.push(new EvaluationParameter(a.tfa_dict[b][0],a.tfa_dict[b][2]));this.CalculatedBal=a.common_val}return a}(),EvaluationObjectPremises=function(){function a(a,b){this.Address=new EvaluationLocationPremises(b),this.Square=new EvaluationParameter(a.square_str,a.square),this.Placement=new EvaluationParameter(a.placement_dict[a.placement_index][0],a.placement),this.BuildtypeMB=new EvaluationParameter(this.FindChoiceByValue(a.buildtype_mb_dict,a.buildtype_mb),a.buildtype_mb),this.BuildtypeOTB=new EvaluationParameter(this.FindChoiceByValue(a.buildtype_otb_dict,a.buildtype_otb),a.buildtype_otb),this.EntryType=new EvaluationParameter(a.entry_type_dict[a.entry_type_index],a.entry_type_index),this.EntryPlacement=new EvaluationParameter(a.entry_placement_dict[a.entry_placement_index],a.entry_placement_index),this.TVFeatures=Array();for(var c in a.tradevalue_features)a.tradevalue_features[c][1]&&this.TVFeatures.push(new EvaluationParameter(a.tradevalue_features[c][0],a.tradevalue_features[c][2]));this.CalculatedTV=a.tv,this.IsResidentiaFund=new EvaluationParameter(a.is_residential_fund?"В жилом фонде":"",a.is_residential_fund?-1:0),this.Decoration=new EvaluationDecoration(a.remStateInfo)}return a.prototype.FindChoiceByValue=function(a,b){for(var c in a)if(a[c][1]===b)return a[c][0];return""},a}();exports.EvaluationObjectPremises=EvaluationObjectPremises;