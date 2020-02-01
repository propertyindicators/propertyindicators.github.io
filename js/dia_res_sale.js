/*! PILab 01-02-2020 (c) 2017 propertyindicators@gmail.com */

"use strict";function initheader(){headerdict={z:[tck("allt"),tck("st"),tck("hr"),tck("ser"),tck("mod")],t:[tcz("kiev"),tcz("center"),tcz("nearcenter"),tcz("midcenter"),tcz("periphery")]}}function init_base(){initheader();for(var a=0;a<chartindexdict.length;a++)gdata[chartindexdict[a]]=new MyChart(chartindexdict[a]),gdata[chartindexdict[a]].initall(!1)}function MyChart(a){this.id=a,this.id_zt=a.substring(0,1),this.id_sf=a.substring(1,2),this.curpress="d",this.basepress=0,this.buttons={},this.options={},this.tabs={},this.chart={},this.create_chart=function(){this.chart=new google.visualization.ColumnChart(document.getElementById("chart_div_"+this.id))},this.create_buttons=function(){for(var a=(this.basepress,0);a<5;a++)this.buttons[a]=document.getElementById("buttb_"+this.id+String(a)),this.buttons[a].onclick=basebuttonfunc;var b=this;currencykeys.forEach(function(a,c,d){b.buttons[a]=document.getElementById("buttc_"+b.id+a),b.buttons[a].onclick=curbuttonfunc})},this.create_options=function(){this.options={title:"",vAxis:{minValue:0,format:"#"},legend:{position:"bottom"},animation:{duration:1e3,easing:"linear",startup:!0},chartArea:{left:"10%",width:"87%"}},"f"===this.id_sf&&(this.options.chartArea.left="13%")},this.set_title=function(){this.options.title=tct("diaressale",specdict[this.id_sf])+tcsubtres(subtitlekeys[this.id_zt][this.basepress])},this.set_format=function(){this.options.vAxis.format=formatdict[this.curpress]},this.create_tabs_and_firstdraw=function(a){a=!0,GET_DT_FROM_FILE=a;var b="fusion";a&&(b="file");var c=this;GET_DTAsync(chartsourcedict[this.id][b],fieldsdict[this.id_zt],function(a){c.set_tabs(a),c.drawchart()})},this.set_tabs=function(a){for(var b=a.toJSON(),c=JSON.parse(b),d=["Имена групп",tck("1k"),tck("2k"),tck("3k"),tck("4k")],e=headerdict[this.id_zt],f=0;f<3;f++){for(var g=[],h=0;h<5;h++){var i=[];i[0]=d;for(var j=0;j<5;j++){i[j+1]=[],i[j+1][0]=e[j];for(var k=0;k<4;k++)i[j+1][k+1]=c.rows[h].c[20*f+4*j+k+2].v}g[h]=google.visualization.arrayToDataTable(i)}this.tabs[currencykeys[f]]=g}},this.initall=function(a){this.create_chart(),this.create_buttons(),this.create_options(),this.set_title(),this.set_format(),this.create_tabs_and_firstdraw(a)},this.drawchart=function(){this.chart.draw(this.tabs[this.curpress][this.basepress],this.options)}}function basebuttonfunc(){var a=$(this).attr("id"),b=a.substring(6,8),c=+a.substring(8,9);c!==gdata[b].basepress&&(gdata[b].basepress=c,gdata[b].set_title(),gdata[b].drawchart())}function curbuttonfunc(){var a=$(this).attr("id"),b=a.substring(6,8),c=a.substring(8,9);c!==gdata[b].curpress&&(gdata[b].curpress=c,gdata[b].set_format(),gdata[b].drawchart())}var subtitlekeys={z:["k","c","nc","m","o"],t:["allt","st","hr","ser","mod"]},currencykeys=["d","h","e"],formatdict={d:"$#",h:"₴#",e:"€#"},headerdict={},specdict={s:"ressqm",f:"resflat"},fieldsdict={z:["ID","Name","D_AV_1","D_AV_2","D_AV_3","D_AV_4","D_STA_1","D_STA_2","D_STA_3","D_STA_4","D_HRU_1","D_HRU_2","D_HRU_3","D_HRU_4","D_SER_1","D_SER_2","D_SER_3","D_SER_4","D_MOD_1","D_MOD_2","D_MOD_3","D_MOD_4","H_AV_1","H_AV_2","H_AV_3","H_AV_4","H_STA_1","H_STA_2","H_STA_3","H_STA_4","H_HRU_1","H_HRU_2","H_HRU_3","H_HRU_4","H_SER_1","H_SER_2","H_SER_3","H_SER_4","H_MOD_1","H_MOD_2","H_MOD_3","H_MOD_4","E_AV_1","E_AV_2","E_AV_3","E_AV_4","E_STA_1","E_STA_2","E_STA_3","E_STA_4","E_HRU_1","E_HRU_2","E_HRU_3","E_HRU_4","E_SER_1","E_SER_2","E_SER_3","E_SER_4","E_MOD_1","E_MOD_2","E_MOD_3","E_MOD_4"],t:["ID","Name","D_K_1","D_K_2","D_K_3","D_K_4","D_C_1","D_C_2","D_C_3","D_C_4","D_NC_1","D_NC_2","D_NC_3","D_NC_4","D_EV_1","D_EV_2","D_EV_3","D_EV_4","D_P_1","D_P_2","D_P_3","D_P_4","H_K_1","H_K_2","H_K_3","H_K_4","H_C_1","H_C_2","H_C_3","H_C_4","H_NC_1","H_NC_2","H_NC_3","H_NC_4","H_EV_1","H_EV_2","H_EV_3","H_EV_4","H_P_1","H_P_2","H_P_3","H_P_4","E_K_1","E_K_2","E_K_3","E_K_4","E_C_1","E_C_2","E_C_3","E_C_4","E_NC_1","E_NC_2","E_NC_3","E_NC_4","E_EV_1","E_EV_2","E_EV_3","E_EV_4","E_P_1","E_P_2","E_P_3","E_P_4"]},chartindexdict=["zs","zf","ts","tf"],chartsourcedict={zs:{file:"resdiagzonessqm",fusion:"1MCxCQ7O98D1HbPDu5Gs8g3uXu75WlpDJ34cT_z5h"},zf:{file:"resdiagzonesflat",fusion:"1J30sx_vn6BjTcHNarLfz3FVCU9WYOzFn0YhS90tZ"},ts:{file:"resdiagtypessqm",fusion:"1dXxSWjFpzthrbEGTrPF9QLTU_eT8c0tSokjOskHz"},tf:{file:"resdiagtypesflat",fusion:"12Js1MCaUr5n2kHSnYvQqXCfIdAzTOb0tDkhlXfYO"}},colorsdict={z:["#0000FF","#FF0000","#FFFF00","#008000"],t:["#008080","#9400D3","#DC143C","#006400"]},gdata={};google.charts.load("visualization","1",{packages:["corechart"]}),google.charts.setOnLoadCallback(init_base);