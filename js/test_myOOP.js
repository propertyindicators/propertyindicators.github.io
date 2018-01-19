/*! PILab 19-01-2018 (c) 2017 propertyindicators@gmail.com */

"use strict";function initheader(){headerdict={z:[tck("allt"),tck("st"),tck("hr"),tck("ser"),tck("mod")],t:[tcz("kiev"),tcz("center"),tcz("nearcenter"),tcz("midcenter"),tcz("periphery")]}}function init_base(){initheader();for(var a=0;a<chartindexdict.length;a++)gdata[chartindexdict[a]]={id:chartindexdict[a]},СreateChartById(gdata[chartindexdict[a]]),alert(chartindexdict[a])}function СreateChartById(a){var b=a.id;a.id_zt=b.substring(0,1),a.id_sf=b.substring(1,2),a.curpress="d",a.basepress=0,a.buttons=create_buttons(b),a.options=create_options(),a.chart=new google.visualization.ColumnChart(document.getElementById("chart_div_"+b)),set_title(a),set_format(a),set_tabs(a,!0)}function create_buttons(a){for(var b={},c=0;c<5;c++){b[c]=document.getElementById("buttb_"+a+String(c)),b[c].onclick=basebuttonfunc}return currencykeys.forEach(function(c,d,e){b[c]=document.getElementById("buttc_"+a+c),b[c].onclick=curbuttonfunc}),b}function create_options(){return{title:"",vAxis:{minValue:0,format:"#"},legend:{position:"bottom"},animation:{duration:1e3,easing:"linear",startup:!0},chartArea:{left:"9%",width:"90%"}}}function set_tabs(a,b){GET_DT_FROM_FILE=b;var c="fusion";b&&(c="file"),GET_DTAsync(chartsourcedict[a.id][c],fieldsdict[a.id_zt],function(b){a.tabs=transformator(b,a.id_zt),drawchart(a)})}function transformator(a,b){for(var c=a.toJSON(),d=JSON.parse(c),e=["Типы домов",tck("1k"),tck("2k"),tck("3k"),tck("4k")],f=headerdict[b],g={},h=0;h<3;h++){for(var i=[],j=0;j<5;j++){var k=[];k[0]=e;for(var l=0;l<5;l++){k[l+1]=[],k[l+1][0]=f[l];for(var m=0;m<4;m++)k[l+1][m+1]=d.rows[j].c[20*h+4*l+m+2].v}i[j]=google.visualization.arrayToDataTable(k)}g[currencykeys[h]]=i}return g}function set_title(a){a.options.title=tct("diaressale",specdict[a.id_sf])+tcsubtres(subtitlekeys[a.id_zt][a.basepress])}function set_format(a){a.options.vAxis.format=formatdict[a.curpress]}function basebuttonfunc(){var a=$(this).attr("id"),b=a.substring(6,8),c=+a.substring(8,9);c!==gdata[b].basepress&&(gdata[b].basepress=c,set_title(gdata[b]),drawchart(gdata[b]))}function curbuttonfunc(){var a=$(this).attr("id"),b=a.substring(6,8),c=a.substring(8,9);c!==gdata[b].curpress&&(gdata[b].curpress=c,set_format(gdata[b]),drawchart(gdata[b]))}function drawchart(a){a.chart.draw(a.tabs[a.curpress][a.basepress],a.options)}var subtitlekeys={z:["k","c","nc","m","o"],t:["allt","st","hr","ser","mod"]},currencykeys=["d","h","e"],formatdict={d:"$#",h:"₴#",e:"€#"},headerdict={},specdict={s:"ressqm",f:"resflat"},fieldsdict={z:["Name","D_AV_1","D_AV_2","D_AV_3","D_AV_4","D_STA_1","D_STA_2","D_STA_3","D_STA_4","D_HRU_1","D_HRU_2","D_HRU_3","D_HRU_4","D_SER_1","D_SER_2","D_SER_3","D_SER_4","D_MOD_1","D_MOD_2","D_MOD_3","D_MOD_4","H_AV_1","H_AV_2","H_AV_3","H_AV_4","H_STA_1","H_STA_2","H_STA_3","H_STA_4","H_HRU_1","H_HRU_2","H_HRU_3","H_HRU_4","H_SER_1","H_SER_2","H_SER_3","H_SER_4","H_MOD_1","H_MOD_2","H_MOD_3","H_MOD_4","E_AV_1","E_AV_2","E_AV_3","E_AV_4","E_STA_1","E_STA_2","E_STA_3","E_STA_4","E_HRU_1","E_HRU_2","E_HRU_3","E_HRU_4","E_SER_1","E_SER_2","E_SER_3","E_SER_4","E_MOD_1","E_MOD_2","E_MOD_3","E_MOD_4"],t:["Name","D_K_1","D_K_2","D_K_3","D_K_4","D_C_1","D_C_2","D_C_3","D_C_4","D_NC_1","D_NC_2","D_NC_3","D_NC_4","D_EV_1","D_EV_2","D_EV_3","D_EV_4","D_P_1","D_P_2","D_P_3","D_P_4","H_K_1","H_K_2","H_K_3","H_K_4","H_C_1","H_C_2","H_C_3","H_C_4","H_NC_1","H_NC_2","H_NC_3","H_NC_4","H_EV_1","H_EV_2","H_EV_3","H_EV_4","H_P_1","H_P_2","H_P_3","H_P_4","E_K_1","E_K_2","E_K_3","E_K_4","E_C_1","E_C_2","E_C_3","E_C_4","E_NC_1","E_NC_2","E_NC_3","E_NC_4","E_EV_1","E_EV_2","E_EV_3","E_EV_4","E_P_1","E_P_2","E_P_3","E_P_4"]},chartindexdict=["zs","zf"],chartsourcedict={zs:{file:"resdiagzonessqm",fusion:""},zf:{file:"resdiagzonesflat",fusion:""}},gdata={};google.charts.load("visualization","1",{packages:["corechart"]}),google.charts.setOnLoadCallback(init_base);