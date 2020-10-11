/*! PILab 11-10-2020 (c) 2017 propertyindicators@gmail.com */

function initialize_base_common(){var a=["RegDate","D_K","D_C","D_NC","D_EV","D_P","H_K","H_C","H_NC","H_EV","H_P","E_K","E_C","E_NC","E_EV","E_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("rescommonAll",a,function(b){init_common(b),GET_DTAsync("rescommon10Y",a,function(a){var b=clonetab_common(a);gdataC_DH_10Y=b.DH,gdataC_EH_10Y=b.EH,gdataC_DE_10Y=b.DE}),GET_DTAsync("rescommon5Y",a,function(a){var b=clonetab_common(a);gdataC_DH_5Y=b.DH,gdataC_EH_5Y=b.EH,gdataC_DE_5Y=b.DE}),GET_DTAsync("rescommon3Y",a,function(a){var b=clonetab_common(a);gdataC_DH_3Y=b.DH,gdataC_EH_3Y=b.EH,gdataC_DE_3Y=b.DE})})}function init_common(a){gdataC_DH_All=a,dateminC=gdataC_DH_All.getColumnRange(0).min,datemaxC=gdataC_DH_All.getColumnRange(0).max;var b=clonetab_common(gdataC_DH_All);gdataC_DH_All=b.DH,gdataC_EH_All=b.EH,gdataC_DE_All=b.DE,gdataC_DH_work=gdataC_DH_All,gdataC_EH_work=gdataC_EH_All,gdataC_DE_work=gdataC_DE_All,goptionsC={title:tct("dynressale1","null"),legend:{position:"bottom"},series:{0:{targetAxisIndex:0,color:"#0000FF"},1:{targetAxisIndex:1,color:"#8B0000"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminC,max:datemaxC}},chartArea:{left:"10%",width:"82%"},vAxes:{0:{viewWindow:{min:750},format:"$#",textStyle:{color:"#0000FF"}},1:{viewWindow:{min:8e3},format:"₴#",textStyle:{color:"#8B0000"}}}},gdataC_mainwork=gdataC_DH_work,gchartC=new google.visualization.LineChart(document.getElementById("chart_div1")),drawChartC(),setTimeout(initialize_base_zones,1e3)}function other_common(a){return clonetab_common(a)}function curbutfun_C(){var a=$(this).attr("id"),b=a.substring(7,9);b!==gdataC_curpress&&("dh"===b&&(gdataC_mainwork=gdataC_DH_work,goptionsC.series[0].targetAxisIndex=0,goptionsC.series[0].color="#0000FF",goptionsC.series[1].targetAxisIndex=1,goptionsC.series[1].color="#8B0000",goptionsC.vAxes[0].format="$#",goptionsC.vAxes[0].textStyle.color="#0000FF",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="₴#",goptionsC.vAxes[1].textStyle.color="#8B0000",goptionsC.vAxes[1].viewWindow.min=8e3),"eh"===b&&(gdataC_mainwork=gdataC_EH_work,goptionsC.series[0].targetAxisIndex=1,goptionsC.series[0].color="#8B0000",goptionsC.series[1].targetAxisIndex=0,goptionsC.series[1].color="#228B22",goptionsC.vAxes[0].format="€#",goptionsC.vAxes[0].textStyle.color="#228B22",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="₴#",goptionsC.vAxes[1].textStyle.color="#8B0000",goptionsC.vAxes[1].viewWindow.min=8e3),"de"===b&&(gdataC_mainwork=gdataC_DE_work,goptionsC.series[0].targetAxisIndex=0,goptionsC.series[0].color="#0000FF",goptionsC.series[1].targetAxisIndex=1,goptionsC.series[1].color="#228B22",goptionsC.vAxes[0].format="$#",goptionsC.vAxes[0].textStyle.color="#0000FF",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="€#",goptionsC.vAxes[1].textStyle.color="#228B22",goptionsC.vAxes[1].viewWindow.min=700),drawChartC(),gdataC_curpress=b)}function perbutfun_C(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataC_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataC_DH_All)||(gdataC_DH_work=gdataC_DH_All,gdataC_EH_work=gdataC_EH_All,gdataC_DE_work=gdataC_DE_All),2!==b||$.isEmptyObject(gdataC_DH_10Y)||(gdataC_DH_work=gdataC_DH_10Y,gdataC_EH_work=gdataC_EH_10Y,gdataC_DE_work=gdataC_DE_10Y),3!==b||$.isEmptyObject(gdataC_DH_5Y)||(gdataC_DH_work=gdataC_DH_5Y,gdataC_EH_work=gdataC_EH_5Y,gdataC_DE_work=gdataC_DE_5Y),b>3&&!$.isEmptyObject(gdataC_DH_3Y)&&(gdataC_DH_work=gdataC_DH_3Y,gdataC_EH_work=gdataC_EH_3Y,gdataC_DE_work=gdataC_DE_3Y),gdataC_perpress>3&&b>3)c=new Date(datemaxC),c.setMonth(-1*miar[b-1]),goptionsC.hAxis.viewWindow.min=c,drawChartC();else if(b>gdataC_perpress){1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.hAxis.viewWindow.min=c;var d={};"dh"===gdataC_curpress&&(d=gdataC_DH_work),"eh"===gdataC_curpress&&(d=gdataC_EH_work),"de"===gdataC_curpress&&(d=gdataC_DE_work),drawChartC(),setTimeout(drawWithSetC,1e3,{Dtab:d,MinD:c,Dur:500})}else"dh"===gdataC_curpress&&(gdataC_mainwork=gdataC_DH_work),"eh"===gdataC_curpress&&(gdataC_mainwork=gdataC_EH_work),"de"===gdataC_curpress&&(gdataC_mainwork=gdataC_DE_work),1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.animation.duration=500,drawChartC(),goptionsC.animation.duration=1e3,setTimeout(drawWithSetC,500,{Dtab:gdataC_mainwork,MinD:c,Dur:1e3});gdataC_perpress=b}}function drawChartC(){gchartC.draw(gdataC_mainwork,goptionsC)}function drawWithSetC(a){gdataC_mainwork=a.Dtab,goptionsC.hAxis.viewWindow.min=a.MinD;var b=goptionsC.animation.duration;goptionsC.animation.duration=a.Dur,drawChartC(),goptionsC.animation.duration=b}function namecol_common(a){a.setColumnLabel(1,tcc("usd")),a.setColumnLabel(2,tcc("hrn")),a.setColumnLabel(3,tcc("eur"))}function clonetab_common(a){var b=a.toJSON(),c=JSON.parse(b),d=[0,1,2],e=[0,2,3],f=[0,1,3],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcc("usd"),type:"number"},{id:"col2",label:tcc("hrn"),type:"number"}],h=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcc("hrn"),type:"number"},{id:"col2",label:tcc("eur"),type:"number"}],i=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcc("usd"),type:"number"},{id:"col2",label:tcc("eur"),type:"number"}],j={cols:g},k={cols:h},l={cols:i},m=[],n=[],o=[];for(ii=0;ii<c.rows.length;ii++)m.push({c:[{v:c.rows[ii].c[d[0]].v},{v:c.rows[ii].c[d[1]].v},{v:c.rows[ii].c[d[2]].v}]}),n.push({c:[{v:c.rows[ii].c[e[0]].v},{v:c.rows[ii].c[e[1]].v},{v:c.rows[ii].c[e[2]].v}]}),o.push({c:[{v:c.rows[ii].c[f[0]].v},{v:c.rows[ii].c[f[1]].v},{v:c.rows[ii].c[f[2]].v}]});return j.rows=m,k.rows=n,l.rows=o,{DH:new google.visualization.DataTable(j),EH:new google.visualization.DataTable(k),DE:new google.visualization.DataTable(l)}}function initialize_base_zones(){var a=["RegDate","D_C","D_NC","D_EV","D_P","H_C","H_NC","H_EV","H_P","E_C","E_NC","E_EV","E_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("reszonesAll",a,function(b){init_zones(b),GET_DTAsync("reszones10Y",a,function(a){var b=clonetab_zones(a);gdataZ_D_10Y=b.D,gdataZ_H_10Y=b.H,gdataZ_E_10Y=b.E}),GET_DTAsync("reszones5Y",a,function(a){var b=clonetab_zones(a);gdataZ_D_5Y=b.D,gdataZ_H_5Y=b.H,gdataZ_E_5Y=b.E}),GET_DTAsync("reszones3Y",a,function(a){var b=clonetab_zones(a);gdataZ_D_3Y=b.D,gdataZ_H_3Y=b.H,gdataZ_E_3Y=b.E})})}function init_zones(a){gdataZ_D_All=a,dateminZ=gdataZ_D_All.getColumnRange(0).min,datemaxZ=gdataZ_D_All.getColumnRange(0).max,namecol_zones(gdataZ_D_All);var b=clonetab_zones(gdataZ_D_All);gdataZ_D_All=b.D,gdataZ_H_All=b.H,gdataZ_E_All=b.E,gdataZ_D_work=gdataZ_D_All,gdataZ_H_work=gdataZ_H_All,gdataZ_E_work=gdataZ_E_All,goptionsZ={title:tct("dynressale24","zones"),vAxis:{minValue:0,format:"$#"},legend:{position:"bottom"},series:{0:{color:"#0000FF"},1:{color:"#FF8C00"},2:{color:"#FF0000"},3:{color:"#006400"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminZ,max:datemaxZ}},chartArea:{left:"10%",width:"89%"}},gdataZ_mainwork=gdataZ_D_work,gchartZ=new google.visualization.AreaChart(document.getElementById("chart_div2")),drawChartZ(),setTimeout(initialize_base_rooms,1e3)}function other_zones(a){return clonetab_zones(a)}function namecol_zones(a){a.setColumnLabel(1,tcz("center")),a.setColumnLabel(2,tcz("nearcenter")),a.setColumnLabel(3,tcz("midcenter")),a.setColumnLabel(4,tcz("periphery")),a.setColumnLabel(5,tcz("center")),a.setColumnLabel(6,tcz("nearcenter")),a.setColumnLabel(7,tcz("midcenter")),a.setColumnLabel(8,tcz("periphery")),a.setColumnLabel(9,tcz("center")),a.setColumnLabel(10,tcz("nearcenter")),a.setColumnLabel(11,tcz("midcenter")),a.setColumnLabel(12,tcz("periphery"))}function clonetab_zones(a){var b=a.toJSON(),c=JSON.parse(b),d=[0,1,2,3,4],e=[0,5,6,7,8],f=[0,9,10,11,12],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcz("center"),type:"number"},{id:"col2",label:tcz("nearcenter"),type:"number"},{id:"col3",label:tcz("midcenter"),type:"number"},{id:"col4",label:tcz("periphery"),type:"number"}],h={cols:g},i={cols:g},j={cols:g},k=[],l=[],m=[];for(ii=0;ii<c.rows.length;ii++)k.push({c:[{v:c.rows[ii].c[d[0]].v},{v:c.rows[ii].c[d[1]].v},{v:c.rows[ii].c[d[2]].v},{v:c.rows[ii].c[d[3]].v},{v:c.rows[ii].c[d[4]].v}]}),l.push({c:[{v:c.rows[ii].c[e[0]].v},{v:c.rows[ii].c[e[1]].v},{v:c.rows[ii].c[e[2]].v},{v:c.rows[ii].c[e[3]].v},{v:c.rows[ii].c[e[4]].v}]}),m.push({c:[{v:c.rows[ii].c[f[0]].v},{v:c.rows[ii].c[f[1]].v},{v:c.rows[ii].c[f[2]].v},{v:c.rows[ii].c[f[3]].v},{v:c.rows[ii].c[f[4]].v}]});return h.rows=k,i.rows=l,j.rows=m,{D:new google.visualization.DataTable(h),H:new google.visualization.DataTable(i),E:new google.visualization.DataTable(j)}}function drawChartZ(){gchartZ.draw(gdataZ_mainwork,goptionsZ)}function drawWithSetZ(a){gdataZ_mainwork=a.Dtab,goptionsZ.hAxis.viewWindow.min=a.MinD;var b=goptionsZ.animation.duration;goptionsZ.animation.duration=a.Dur,drawChartZ(),goptionsZ.animation.duration=b}function perbutfun_Z(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataZ_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataZ_D_All)||(gdataZ_D_work=gdataZ_D_All,gdataZ_H_work=gdataZ_H_All,gdataZ_E_work=gdataZ_E_All),2!==b||$.isEmptyObject(gdataZ_D_10Y)||(gdataZ_D_work=gdataZ_D_10Y,gdataZ_H_work=gdataZ_H_10Y,gdataZ_E_work=gdataZ_E_10Y),3!==b||$.isEmptyObject(gdataZ_D_5Y)||(gdataZ_D_work=gdataZ_D_5Y,gdataZ_H_work=gdataZ_H_5Y,gdataZ_E_work=gdataZ_E_5Y),b>3&&!$.isEmptyObject(gdataZ_D_3Y)&&(gdataZ_D_work=gdataZ_D_3Y,gdataZ_H_work=gdataZ_H_3Y,gdataZ_E_work=gdataZ_E_3Y),gdataZ_perpress>3&&b>3)c=new Date(datemaxZ),c.setMonth(-1*miar[b-1]),goptionsZ.hAxis.viewWindow.min=c,drawChartZ();else if(b>gdataZ_perpress){1===b?c=new Date(dateminZ):(c=new Date(datemaxZ),c.setMonth(-1*miar[b-1])),goptionsZ.hAxis.viewWindow.min=c;var d={};"d"===gdataZ_curpress&&(d=gdataZ_D_work),"h"===gdataZ_curpress&&(d=gdataZ_H_work),"e"===gdataZ_curpress&&(d=gdataZ_E_work),drawChartZ(),setTimeout(drawWithSetZ,1e3,{Dtab:d,MinD:c,Dur:500})}else"d"===gdataZ_curpress&&(gdataZ_mainwork=gdataZ_D_work),"h"===gdataZ_curpress&&(gdataZ_mainwork=gdataZ_H_work),"e"===gdataZ_curpress&&(gdataZ_mainwork=gdataZ_E_work),1===b?c=new Date(dateminZ):(c=new Date(datemaxZ),c.setMonth(-1*miar[b-1])),goptionsZ.animation.duration=500,drawChartZ(),goptionsZ.animation.duration=1e3,setTimeout(drawWithSetZ,500,{Dtab:gdataZ_mainwork,MinD:c,Dur:1e3});gdataZ_perpress=b}}function curbutfun_Z(){var a=$(this).attr("id"),b=a.substring(7,8);b!==gdataZ_curpress&&("d"===b&&(gdataZ_mainwork=gdataZ_D_work,goptionsZ.vAxis.format="$#",goptionsZ.vAxis.minValue=0),"h"===b&&(gdataZ_mainwork=gdataZ_H_work,goptionsZ.vAxis.format="₴#",goptionsZ.vAxis.minValue=0),"e"===b&&(gdataZ_mainwork=gdataZ_E_work,goptionsZ.vAxis.format="€#",goptionsZ.vAxis.minValue=0),drawChartZ(),gdataZ_curpress=b)}function initialize_base_rooms(){var a=["RegDate","D_1K","D_1K_C","D_1K_NC","D_1K_EV","D_1K_P","D_2K","D_2K_C","D_2K_NC","D_2K_EV","D_2K_P","D_3K","D_3K_C","D_3K_NC","D_3K_EV","D_3K_P","D_4K","D_4K_C","D_4K_NC","D_4K_EV","D_4K_P","H_1K","H_1K_C","H_1K_NC","H_1K_EV","H_1K_P","H_2K","H_2K_C","H_2K_NC","H_2K_EV","H_2K_P","H_3K","H_3K_C","H_3K_NC","H_3K_EV","H_3K_P","H_4K","H_4K_C","H_4K_NC","H_4K_EV","H_4K_P","E_1K","E_1K_C","E_1K_NC","E_1K_EV","E_1K_P","E_2K","E_2K_C","E_2K_NC","E_2K_EV","E_2K_P","E_3K","E_3K_C","E_3K_NC","E_3K_EV","E_3K_P","E_4K","E_4K_C","E_4K_NC","E_4K_EV","E_4K_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("resroomsAll",a,function(b){init_rooms(b),GET_DTAsync("resrooms10Y",a,function(a){var b=clonetab_rooms(a);gdataR_D_10Y=b.D,gdataR_H_10Y=b.H,gdataR_E_10Y=b.E}),GET_DTAsync("resrooms5Y",a,function(a){var b=clonetab_rooms(a);gdataR_D_5Y=b.D,gdataR_H_5Y=b.H,gdataR_E_5Y=b.E}),GET_DTAsync("resrooms3Y",a,function(a){var b=clonetab_rooms(a);gdataR_D_3Y=b.D,gdataR_H_3Y=b.H,gdataR_E_3Y=b.E})})}function init_rooms(a){dateminR=a.getColumnRange(0).min,datemaxR=a.getColumnRange(0).max;var b=clonetab_rooms(a);gdataR_D_All=b.D,gdataR_H_All=b.H,gdataR_E_All=b.E,gdataR_D_work=gdataR_D_All[0],gdataR_H_work=gdataR_H_All[0],gdataR_E_work=gdataR_E_All[0],goptionsR={title:tct("dynressale24","rooms"),vAxis:{viewWindow:{min:600},format:"$#"},legend:{position:"bottom"},series:{0:{color:"#008000"},1:{color:"#DAA520"},2:{color:"#FF4500"},3:{color:"#000080"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminR,max:datemaxR}},chartArea:{left:"10%",width:"89%"}},gdataR_mainwork=gdataR_D_work,gchartR=new google.visualization.AreaChart(document.getElementById("chart_div3")),drawChartR(),setTimeout(initialize_base_types,1e3)}function other_rooms(a){return clonetab_rooms(a)}function clonetab_rooms(a){var b=a.toJSON(),c=JSON.parse(b),d=[[0,1,6,11,16],[0,2,3,4,5],[0,7,8,9,10],[0,12,13,14,15],[0,17,18,19,20]],e=[[0,21,26,31,36],[0,22,23,24,25],[0,27,28,29,30],[0,32,33,34,35],[0,37,38,39,40]],f=[[0,41,46,51,56],[0,42,43,44,45],[0,47,48,49,50],[0,52,53,54,55],[0,57,58,59,60]],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tck("1k"),type:"number"},{id:"col2",label:tck("2k"),type:"number"},{id:"col3",label:tck("3k"),type:"number"},{id:"col4",label:tck("4k"),type:"number"}],h=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcz("center"),type:"number"},{id:"col2",label:tcz("nearcenter"),type:"number"},{id:"col3",label:tcz("midcenter"),type:"number"},{id:"col4",label:tcz("periphery"),type:"number"}];for(TDestD=[],TDestH=[],TDestE=[],i=0;i<=4;i++){var j={},k={},l={};0===i?(j.cols=g,k.cols=g,l.cols=g):(j.cols=h,k.cols=h,l.cols=h);var m=[],n=[],o=[];for(ii=0;ii<c.rows.length;ii++)m.push({c:[{v:c.rows[ii].c[d[i][0]].v},{v:c.rows[ii].c[d[i][1]].v},{v:c.rows[ii].c[d[i][2]].v},{v:c.rows[ii].c[d[i][3]].v},{v:c.rows[ii].c[d[i][4]].v}]}),n.push({c:[{v:c.rows[ii].c[e[i][0]].v},{v:c.rows[ii].c[e[i][1]].v},{v:c.rows[ii].c[e[i][2]].v},{v:c.rows[ii].c[e[i][3]].v},{v:c.rows[ii].c[e[i][4]].v}]}),o.push({c:[{v:c.rows[ii].c[f[i][0]].v},{v:c.rows[ii].c[f[i][1]].v},{v:c.rows[ii].c[f[i][2]].v},{v:c.rows[ii].c[f[i][3]].v},{v:c.rows[ii].c[f[i][4]].v}]});j.rows=m,k.rows=n,l.rows=o,TDestD[i]=new google.visualization.DataTable(j),TDestH[i]=new google.visualization.DataTable(k),TDestE[i]=new google.visualization.DataTable(l)}return{D:TDestD,H:TDestH,E:TDestE}}function drawChartR(){gchartR.draw(gdataR_mainwork,goptionsR)}function drawWithSetR(a){gdataR_mainwork=a.Dtab,goptionsR.hAxis.viewWindow.min=a.MinD;var b=goptionsR.animation.duration;goptionsR.animation.duration=a.Dur,drawChartR(),goptionsR.animation.duration=b}function basebutfun_K(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataR_basepress!==b){gdataR_basepress=b,1===gdataR_perpress&&(gdataR_D_work=gdataR_D_All[b],gdataR_H_work=gdataR_H_All[b],gdataR_E_work=gdataR_E_All[b]),2===gdataR_perpress&&(gdataR_D_work=gdataR_D_10Y[b],gdataR_H_work=gdataR_H_10Y[b],gdataR_E_work=gdataR_E_10Y[b]),3===gdataR_perpress&&(gdataR_D_work=gdataR_D_5Y[b],gdataR_H_work=gdataR_H_5Y[b],gdataR_E_work=gdataR_E_5Y[b]),gdataR_perpress>3&&(gdataR_D_work=gdataR_D_3Y[b],gdataR_H_work=gdataR_H_3Y[b],gdataR_E_work=gdataR_E_3Y[b]),"d"===gdataR_curpress&&(gdataR_mainwork=gdataR_D_work),"h"===gdataR_curpress&&(gdataR_mainwork=gdataR_H_work),"e"===gdataR_curpress&&(gdataR_mainwork=gdataR_E_work),drawChartR()}}function perbutfun_K(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataR_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataR_D_All[gdataR_basepress])||(gdataR_D_work=gdataR_D_All[gdataR_basepress],gdataR_H_work=gdataR_H_All[gdataR_basepress],gdataR_E_work=gdataR_E_All[gdataR_basepress]),2!==b||$.isEmptyObject(gdataR_D_10Y)||(gdataR_D_work=gdataR_D_10Y[gdataR_basepress],gdataR_H_work=gdataR_H_10Y[gdataR_basepress],gdataR_E_work=gdataR_E_10Y[gdataR_basepress]),3!==b||$.isEmptyObject(gdataR_D_5Y[gdataR_basepress])||(gdataR_D_work=gdataR_D_5Y[gdataR_basepress],gdataR_H_work=gdataR_H_5Y[gdataR_basepress],gdataR_E_work=gdataR_E_5Y[gdataR_basepress]),b>3&&!$.isEmptyObject(gdataR_D_3Y[gdataR_basepress])&&(gdataR_D_work=gdataR_D_3Y[gdataR_basepress],gdataR_H_work=gdataR_H_3Y[gdataR_basepress],gdataR_E_work=gdataR_E_3Y[gdataR_basepress]),gdataR_perpress>3&&b>3)c=new Date(datemaxR),c.setMonth(-1*miar[b-1]),goptionsR.hAxis.viewWindow.min=c,drawChartR();else if(b>gdataR_perpress){1===b?c=new Date(dateminR):(c=new Date(datemaxR),c.setMonth(-1*miar[b-1])),goptionsR.hAxis.viewWindow.min=c;var d={};"d"===gdataR_curpress&&(d=gdataR_D_work),"h"===gdataR_curpress&&(d=gdataR_H_work),"e"===gdataR_curpress&&(d=gdataR_E_work),drawChartR(),setTimeout(drawWithSetR,1e3,{Dtab:d,MinD:c,Dur:500})}else"d"===gdataR_curpress&&(gdataR_mainwork=gdataR_D_work),"h"===gdataR_curpress&&(gdataR_mainwork=gdataR_H_work),"e"===gdataR_curpress&&(gdataR_mainwork=gdataR_E_work),1===b?c=new Date(dateminR):(c=new Date(datemaxR),c.setMonth(-1*miar[b-1])),goptionsR.animation.duration=500,drawChartR(),goptionsR.animation.duration=1e3,setTimeout(drawWithSetR,500,{Dtab:gdataR_mainwork,MinD:c,Dur:1e3});gdataR_perpress=b}}function curbutfun_K(){var a=$(this).attr("id"),b=a.substring(7,8);b!==gdataR_curpress&&(gdataR_curpress=b,"d"===b&&(gdataR_mainwork=gdataR_D_work,goptionsR.vAxis.format="$#"),"h"===b&&(gdataR_mainwork=gdataR_H_work,goptionsR.vAxis.format="₴#"),"e"===b&&(gdataR_mainwork=gdataR_E_work,goptionsR.vAxis.format="€#"),drawChartR())}function initialize_base_types(){var a=["RegDate","D_STA","D_STA_C","D_STA_NC","D_STA_EV","D_STA_P","D_HRU","D_HRU_C","D_HRU_NC","D_HRU_EV","D_HRU_P","D_SER","D_SER_C","D_SER_NC","D_SER_EV","D_SER_P","D_MOD","D_MOD_C","D_MOD_NC","D_MOD_EV","D_MOD_P","H_STA","H_STA_C","H_STA_NC","H_STA_EV","H_STA_P","H_HRU","H_HRU_C","H_HRU_NC","H_HRU_EV","H_HRU_P","H_SER","H_SER_C","H_SER_NC","H_SER_EV","H_SER_P","H_MOD","H_MOD_C","H_MOD_NC","H_MOD_EV","H_MOD_P","E_STA","E_STA_C","E_STA_NC","E_STA_EV","E_STA_P","E_HRU","E_HRU_C","E_HRU_NC","E_HRU_EV","E_HRU_P","E_SER","E_SER_C","E_SER_NC","E_SER_EV","E_SER_P","E_MOD","E_MOD_C","E_MOD_NC","E_MOD_EV","E_MOD_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("restypesAll",a,function(b){init_types(b),GET_DTAsync("restypes10Y",a,function(a){var b=clonetab_types(a);gdataT_D_10Y=b.D,gdataT_H_10Y=b.H,gdataT_E_10Y=b.E}),GET_DTAsync("restypes5Y",a,function(a){var b=clonetab_types(a);gdataT_D_5Y=b.D,gdataT_H_5Y=b.H,gdataT_E_5Y=b.E}),GET_DTAsync("restypes3Y",a,function(a){var b=clonetab_types(a);gdataT_D_3Y=b.D,gdataT_H_3Y=b.H,gdataT_E_3Y=b.E})})}function init_types(a){dateminT=a.getColumnRange(0).min,datemaxT=a.getColumnRange(0).max;var b=clonetab_types(a);gdataT_D_All=b.D,gdataT_H_All=b.H,gdataT_E_All=b.E,gdataT_D_work=gdataT_D_All[0],gdataT_H_work=gdataT_H_All[0],gdataT_E_work=gdataT_E_All[0],goptionsT={title:tct("dynressale24","types"),vAxis:{viewWindow:{min:600},format:"$#"},legend:{position:"bottom"},series:{0:{color:"#0000FF"},1:{color:"#FF4500"},2:{color:"#008000"},3:{color:"#800000"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminT,max:datemaxT}},chartArea:{left:"10%",width:"89%"}},gdataT_mainwork=gdataT_D_work,gchartT=new google.visualization.AreaChart(document.getElementById("chart_div4")),drawChartT()}function clonetab_types(a){var b=a.toJSON(),c=JSON.parse(b),d=[[0,1,6,11,16],[0,2,3,4,5],[0,7,8,9,10],[0,12,13,14,15],[0,17,18,19,20]],e=[[0,21,26,31,36],[0,22,23,24,25],[0,27,28,29,30],[0,32,33,34,35],[0,37,38,39,40]],f=[[0,41,46,51,56],[0,42,43,44,45],[0,47,48,49,50],[0,52,53,54,55],[0,57,58,59,60]],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tck("st"),type:"number"},{id:"col2",label:tck("hr"),type:"number"},{id:"col3",label:tck("ser"),type:"number"},{id:"col4",label:tck("mod"),type:"number"}],h=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcz("center"),type:"number"},{id:"col2",label:tcz("nearcenter"),type:"number"},{id:"col3",label:tcz("midcenter"),type:"number"},{id:"col4",label:tcz("periphery"),type:"number"}];for(TDestD=[],TDestH=[],TDestE=[],i=0;i<=4;i++){var j={},k={},l={};0===i?(j.cols=g,k.cols=g,l.cols=g):(j.cols=h,k.cols=h,l.cols=h);var m=[],n=[],o=[];for(ii=0;ii<c.rows.length;ii++)m.push({c:[{v:c.rows[ii].c[d[i][0]].v},{v:c.rows[ii].c[d[i][1]].v},{v:c.rows[ii].c[d[i][2]].v},{v:c.rows[ii].c[d[i][3]].v},{v:c.rows[ii].c[d[i][4]].v}]}),n.push({c:[{v:c.rows[ii].c[e[i][0]].v},{v:c.rows[ii].c[e[i][1]].v},{v:c.rows[ii].c[e[i][2]].v},{v:c.rows[ii].c[e[i][3]].v},{v:c.rows[ii].c[e[i][4]].v}]}),o.push({c:[{v:c.rows[ii].c[f[i][0]].v},{v:c.rows[ii].c[f[i][1]].v},{v:c.rows[ii].c[f[i][2]].v},{v:c.rows[ii].c[f[i][3]].v},{v:c.rows[ii].c[f[i][4]].v}]});j.rows=m,k.rows=n,l.rows=o,TDestD[i]=new google.visualization.DataTable(j),TDestH[i]=new google.visualization.DataTable(k),TDestE[i]=new google.visualization.DataTable(l)}return{D:TDestD,H:TDestH,E:TDestE}}function drawChartT(){gchartT.draw(gdataT_mainwork,goptionsT)}function drawWithSetT(a){gdataT_mainwork=a.Dtab,goptionsT.hAxis.viewWindow.min=a.MinD;var b=goptionsT.animation.duration;goptionsT.animation.duration=a.Dur,drawChartT(),goptionsT.animation.duration=b}function basebutfun_T(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataT_basepress!==b){gdataT_basepress=b,1===gdataT_perpress&&(gdataT_D_work=gdataT_D_All[b],gdataT_H_work=gdataT_H_All[b],gdataT_E_work=gdataT_E_All[b]),2===gdataT_perpress&&(gdataT_D_work=gdataT_D_10Y[b],gdataT_H_work=gdataT_H_10Y[b],gdataT_E_work=gdataT_E_10Y[b]),3===gdataT_perpress&&(gdataT_D_work=gdataT_D_5Y[b],gdataT_H_work=gdataT_H_5Y[b],gdataT_E_work=gdataT_E_5Y[b]),gdataT_perpress>3&&(gdataT_D_work=gdataT_D_3Y[b],gdataT_H_work=gdataT_H_3Y[b],gdataT_E_work=gdataT_E_3Y[b]),"d"===gdataT_curpress&&(gdataT_mainwork=gdataT_D_work),"h"===gdataT_curpress&&(gdataT_mainwork=gdataT_H_work),"e"===gdataT_curpress&&(gdataT_mainwork=gdataT_E_work),drawChartT()}}function perbutfun_T(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataT_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataT_D_All[gdataT_basepress])||(gdataT_D_work=gdataT_D_All[gdataT_basepress],gdataT_H_work=gdataT_H_All[gdataT_basepress],gdataT_E_work=gdataT_E_All[gdataT_basepress]),2!==b||$.isEmptyObject(gdataT_D_10Y)||(gdataT_D_work=gdataT_D_10Y[gdataT_basepress],gdataT_H_work=gdataT_H_10Y[gdataT_basepress],gdataT_E_work=gdataT_E_10Y[gdataT_basepress]),3!==b||$.isEmptyObject(gdataT_D_5Y[gdataT_basepress])||(gdataT_D_work=gdataT_D_5Y[gdataT_basepress],gdataT_H_work=gdataT_H_5Y[gdataT_basepress],gdataT_E_work=gdataT_E_5Y[gdataT_basepress]),b>3&&!$.isEmptyObject(gdataT_D_3Y[gdataT_basepress])&&(gdataT_D_work=gdataT_D_3Y[gdataT_basepress],gdataT_H_work=gdataT_H_3Y[gdataT_basepress],gdataT_E_work=gdataT_E_3Y[gdataT_basepress]),gdataT_perpress>3&&b>3)c=new Date(datemaxT),c.setMonth(-1*miar[b-1]),goptionsT.hAxis.viewWindow.min=c,drawChartT();else if(b>gdataT_perpress){1===b?c=new Date(dateminT):(c=new Date(datemaxT),c.setMonth(-1*miar[b-1])),goptionsT.hAxis.viewWindow.min=c;var d={};"d"===gdataT_curpress&&(d=gdataT_D_work),"h"===gdataT_curpress&&(d=gdataT_H_work),"e"===gdataT_curpress&&(d=gdataT_E_work),drawChartT(),setTimeout(drawWithSetT,1e3,{Dtab:d,MinD:c,Dur:500})}else"d"===gdataT_curpress&&(gdataT_mainwork=gdataT_D_work),"h"===gdataT_curpress&&(gdataT_mainwork=gdataT_H_work),"e"===gdataT_curpress&&(gdataT_mainwork=gdataT_E_work),1===b?c=new Date(dateminT):(c=new Date(datemaxT),c.setMonth(-1*miar[b-1])),goptionsT.animation.duration=500,drawChartT(),goptionsT.animation.duration=1e3,setTimeout(drawWithSetT,500,{Dtab:gdataT_mainwork,MinD:c,Dur:1e3});gdataT_perpress=b}}function curbutfun_T(){var a=$(this).attr("id"),b=a.substring(7,8);b!==gdataT_curpress&&(gdataT_curpress=b,"d"===b&&(gdataT_mainwork=gdataT_D_work,goptionsT.vAxis.format="$#"),"h"===b&&(gdataT_mainwork=gdataT_H_work,goptionsT.vAxis.format="₴#"),"e"===b&&(gdataT_mainwork=gdataT_E_work,goptionsT.vAxis.format="€#"),drawChartT())}var gdataC_DH_All={},gdataC_EH_All={},gdataC_DE_All={},gdataC_DH_10Y={},gdataC_EH_10Y={},gdataC_DE_10Y={},gdataC_DH_5Y={},gdataC_EH_5Y={},gdataC_DE_5Y={},gdataC_DH_3Y={},gdataC_EH_3Y={},gdataC_DE_3Y={},gdataC_DH_work={},gdataC_EH_work={},gdataC_DE_work={},gdataC_mainwork={},gdataC_curpress="dh",gdataC_perpress=1,goptionsC={},gchartC={},dateminC={},datemaxC={},bpc1=document.getElementById("buttp_c1"),bpc2=document.getElementById("buttp_c2"),bpc3=document.getElementById("buttp_c3"),bpc4=document.getElementById("buttp_c4"),bpc5=document.getElementById("buttp_c5"),bpc6=document.getElementById("buttp_c6"),bpc7=document.getElementById("buttp_c7"),bpc8=document.getElementById("buttp_c8");bpc1.onclick=perbutfun_C,bpc2.onclick=perbutfun_C,bpc3.onclick=perbutfun_C,bpc4.onclick=perbutfun_C,bpc5.onclick=perbutfun_C,bpc6.onclick=perbutfun_C,bpc7.onclick=perbutfun_C,bpc8.onclick=perbutfun_C;var bccdh=document.getElementById("buttc_cdh"),bcceh=document.getElementById("buttc_ceh"),bccde=document.getElementById("buttc_cde");bccdh.onclick=curbutfun_C,bcceh.onclick=curbutfun_C,bccde.onclick=curbutfun_C;var gdataZ_D_All={},gdataZ_H_All={},gdataZ_E_All={},gdataZ_D_10Y={},gdataZ_H_10Y={},gdataZ_E_10Y={},gdataZ_D_5Y={},gdataZ_H_5Y={},gdataZ_E_5Y={},gdataZ_D_3Y={},gdataZ_H_3Y={},gdataZ_E_3Y={},gdataZ_D_work={},gdataZ_E_work={},gdataZ_H_work={},gdataZ_mainwork={},gdataZ_curpress="d",gdataZ_perpress=1,goptionsZ={},dateminZ={},datemaxZ={},bpz1=document.getElementById("buttp_z1"),bpz2=document.getElementById("buttp_z2"),bpz3=document.getElementById("buttp_z3"),bpz4=document.getElementById("buttp_z4"),bpz5=document.getElementById("buttp_z5"),bpz6=document.getElementById("buttp_z6"),bpz7=document.getElementById("buttp_z7"),bpz8=document.getElementById("buttp_z8");bpz1.onclick=perbutfun_Z,bpz2.onclick=perbutfun_Z,bpz3.onclick=perbutfun_Z,bpz4.onclick=perbutfun_Z,bpz5.onclick=perbutfun_Z,bpz6.onclick=perbutfun_Z,bpz7.onclick=perbutfun_Z,bpz8.onclick=perbutfun_Z;var bczd=document.getElementById("buttc_zd"),bcze=document.getElementById("buttc_ze"),bczh=document.getElementById("buttc_zh");bczd.onclick=curbutfun_Z,bczh.onclick=curbutfun_Z,bcze.onclick=curbutfun_Z;var gdataR_D_All=[],gdataR_H_All=[],gdataR_E_All=[],gdataR_D_10Y=[],gdataR_H_10Y=[],gdataR_E_10Y=[],gdataR_D_5Y=[],gdataR_H_5Y=[],gdataR_E_5Y=[],gdataR_D_3Y=[],gdataR_H_3Y=[],gdataR_E_3Y=[],gdataR_D_work={},gdataR_E_work={},gdataR_H_work={},gdataR_mainwork={},gdataR_curpress="d",gdataR_perpress=1,gdataR_basepress=0,goptionsR={},dateminR={},datemaxR={},bbk0=document.getElementById("buttb_k0"),bbk1=document.getElementById("buttb_k1"),bbk2=document.getElementById("buttb_k2"),bbk3=document.getElementById("buttb_k3"),bbk4=document.getElementById("buttb_k4");bbk0.onclick=basebutfun_K,bbk1.onclick=basebutfun_K,bbk2.onclick=basebutfun_K,bbk3.onclick=basebutfun_K,bbk4.onclick=basebutfun_K;var bpk1=document.getElementById("buttp_k1"),bpk2=document.getElementById("buttp_k2"),bpk3=document.getElementById("buttp_k3"),bpk4=document.getElementById("buttp_k4"),bpk5=document.getElementById("buttp_k5"),bpk6=document.getElementById("buttp_k6"),bpk7=document.getElementById("buttp_k7"),bpk8=document.getElementById("buttp_k8");bpk1.onclick=perbutfun_K,bpk2.onclick=perbutfun_K,bpk3.onclick=perbutfun_K,bpk4.onclick=perbutfun_K,bpk5.onclick=perbutfun_K,bpk6.onclick=perbutfun_K,bpk7.onclick=perbutfun_K,bpk8.onclick=perbutfun_K;var bckd=document.getElementById("buttc_kd"),bcke=document.getElementById("buttc_ke"),bckh=document.getElementById("buttc_kh");bckd.onclick=curbutfun_K,bckh.onclick=curbutfun_K,bcke.onclick=curbutfun_K;var gdataT_D_All=[],gdataT_H_All=[],gdataT_E_All=[],gdataT_D_10Y=[],gdataT_H_10Y=[],gdataT_E_10Y=[],gdataT_D_5Y=[],gdataT_H_5Y=[],gdataT_E_5Y=[],gdataT_D_3Y=[],gdataT_H_3Y=[],gdataT_E_3Y=[],gdataT_D_work={},gdataT_E_work={},gdataT_H_work={},gdataT_mainwork={},gdataT_curpress="d",gdataT_perpress=1,gdataT_basepress=0,goptionsT={},dateminT={},datemaxT={},bbt0=document.getElementById("buttb_t0"),bbt1=document.getElementById("buttb_t1"),bbt2=document.getElementById("buttb_t2"),bbt3=document.getElementById("buttb_t3"),bbt4=document.getElementById("buttb_t4");bbt0.onclick=basebutfun_T,bbt1.onclick=basebutfun_T,bbt2.onclick=basebutfun_T,bbt3.onclick=basebutfun_T,bbt4.onclick=basebutfun_T;var bpt1=document.getElementById("buttp_t1"),bpt2=document.getElementById("buttp_t2"),bpt3=document.getElementById("buttp_t3"),bpt4=document.getElementById("buttp_t4"),bpt5=document.getElementById("buttp_t5"),bpt6=document.getElementById("buttp_t6"),bpt7=document.getElementById("buttp_t7"),bpt8=document.getElementById("buttp_t8");bpt1.onclick=perbutfun_T,bpt2.onclick=perbutfun_T,bpt3.onclick=perbutfun_T,bpt4.onclick=perbutfun_T,bpt5.onclick=perbutfun_T,bpt6.onclick=perbutfun_T,bpt7.onclick=perbutfun_T,bpt8.onclick=perbutfun_T;var bctd=document.getElementById("buttc_td"),bcte=document.getElementById("buttc_te"),bcth=document.getElementById("buttc_th");bctd.onclick=curbutfun_T,bcth.onclick=curbutfun_T,bcte.onclick=curbutfun_T;var miar=[0,120,60,36,24,12,6,3];