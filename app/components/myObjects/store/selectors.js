/*! PILab 02-02-2022 */

"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var store_1=require("@ngrx/store"),selectState=function(a){return a.ObjectListState};exports.selectObjectIndex=store_1.createSelector(selectState,function(a){return a.SelectedObjIndex});