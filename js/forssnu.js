/*! PILab 11-01-2018 (c) 2017 propertyindicators@gmail.com */

function initialize_base_common(){var a=["RegDate","D","H","E"];GET_DTAsync("1_J_qzDxEGsQDpwLs7VOVbJh73Tkitz44NjbMVr9K",a,function(b){init_common(b),GET_DTAsync("1P1s_HKSdSwN2bJIZi-_7x5WIxm28FLYVsqffWnDp",a,function(a){var b=clonetab_common(a);gdataC_DH_10Y=b.DH,gdataC_EH_10Y=b.EH,gdataC_DE_10Y=b.DE}),GET_DTAsync("1QSI54v7rSDFzkUnKd11MYhILU6PqsVRL8kGXEerZ",a,function(a){var b=clonetab_common(a);gdataC_DH_5Y=b.DH,gdataC_EH_5Y=b.EH,gdataC_DE_5Y=b.DE}),GET_DTAsync("12iM-1Bo6P3kuHAhqCrmhCojz16rPBfpmcL9iFsrO",a,function(a){var b=clonetab_common(a);gdataC_DH_3Y=b.DH,gdataC_EH_3Y=b.EH,gdataC_DE_3Y=b.DE})})}function init_common(a){gdataC_DH_All=a,dateminC=gdataC_DH_All.getColumnRange(0).min,datemaxC=gdataC_DH_All.getColumnRange(0).max;var b=clonetab_common(gdataC_DH_All);gdataC_DH_All=b.DH,gdataC_EH_All=b.EH,gdataC_DE_All=b.DE,gdataC_DH_work=gdataC_DH_All,gdataC_EH_work=gdataC_EH_All,gdataC_DE_work=gdataC_DE_All,goptionsC={title:"Динаміка середніх індикаторів вартості продажу квартир  (за 1 кв.м)",legend:{position:"bottom"},series:{0:{targetAxisIndex:0,color:"#0000FF"},1:{targetAxisIndex:1,color:"#8B0000"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminC,max:datemaxC}},chartArea:{left:"5%",width:"90%"},vAxes:{0:{viewWindow:{min:750},format:"$#",textStyle:{color:"#0000FF"}},1:{viewWindow:{min:8e3},format:"₴#",textStyle:{color:"#8B0000"}}}},gdataC_mainwork=gdataC_DH_work,gchartC=new google.visualization.LineChart(document.getElementById("chart_div1")),drawChartC()}function other_common(a){return clonetab_common(a)}function curbutfun_C(a){alert(a);var b=a,c=b.substring(7,9);c!==gdataC_curpress&&("dh"===c&&(gdataC_mainwork=gdataC_DH_work,goptionsC.series[0].targetAxisIndex=0,goptionsC.series[0].color="#0000FF",goptionsC.series[1].targetAxisIndex=1,goptionsC.series[1].color="#8B0000",goptionsC.vAxes[0].format="$#",goptionsC.vAxes[0].textStyle.color="#0000FF",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="₴#",goptionsC.vAxes[1].textStyle.color="#8B0000",goptionsC.vAxes[1].viewWindow.min=8e3),"eh"===c&&(gdataC_mainwork=gdataC_EH_work,goptionsC.series[0].targetAxisIndex=1,goptionsC.series[0].color="#8B0000",goptionsC.series[1].targetAxisIndex=0,goptionsC.series[1].color="#228B22",goptionsC.vAxes[0].format="€#",goptionsC.vAxes[0].textStyle.color="#228B22",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="₴#",goptionsC.vAxes[1].textStyle.color="#8B0000",goptionsC.vAxes[1].viewWindow.min=8e3),"de"===c&&(gdataC_mainwork=gdataC_DE_work,goptionsC.series[0].targetAxisIndex=0,goptionsC.series[0].color="#0000FF",goptionsC.series[1].targetAxisIndex=1,goptionsC.series[1].color="#228B22",goptionsC.vAxes[0].format="$#",goptionsC.vAxes[0].textStyle.color="#0000FF",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="€#",goptionsC.vAxes[1].textStyle.color="#228B22",goptionsC.vAxes[1].viewWindow.min=700),drawChartC(),gdataC_curpress=c)}function perbutfun_C(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataC_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataC_DH_All)||(gdataC_DH_work=gdataC_DH_All,gdataC_EH_work=gdataC_EH_All,gdataC_DE_work=gdataC_DE_All),2!==b||$.isEmptyObject(gdataC_DH_10Y)||(gdataC_DH_work=gdataC_DH_10Y,gdataC_EH_work=gdataC_EH_10Y,gdataC_DE_work=gdataC_DE_10Y),3!==b||$.isEmptyObject(gdataC_DH_5Y)||(gdataC_DH_work=gdataC_DH_5Y,gdataC_EH_work=gdataC_EH_5Y,gdataC_DE_work=gdataC_DE_5Y),b>3&&!$.isEmptyObject(gdataC_DH_3Y)&&(gdataC_DH_work=gdataC_DH_3Y,gdataC_EH_work=gdataC_EH_3Y,gdataC_DE_work=gdataC_DE_3Y),gdataC_perpress>3&&b>3)c=new Date(datemaxC),c.setMonth(-1*miar[b-1]),goptionsC.hAxis.viewWindow.min=c,drawChartC();else if(b>gdataC_perpress){1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.hAxis.viewWindow.min=c;var d={};"dh"===gdataC_curpress&&(d=gdataC_DH_work),"eh"===gdataC_curpress&&(d=gdataC_EH_work),"de"===gdataC_curpress&&(d=gdataC_DE_work),drawChartC(),setTimeout(drawWithSetC,1e3,{Dtab:d,MinD:c,Dur:500})}else"dh"===gdataC_curpress&&(gdataC_mainwork=gdataC_DH_work),"eh"===gdataC_curpress&&(gdataC_mainwork=gdataC_EH_work),"de"===gdataC_curpress&&(gdataC_mainwork=gdataC_DE_work),1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.animation.duration=500,drawChartC(),goptionsC.animation.duration=1e3,setTimeout(drawWithSetC,500,{Dtab:gdataC_mainwork,MinD:c,Dur:1e3});gdataC_perpress=b}}function drawChartC(){gchartC.draw(gdataC_mainwork,goptionsC)}function drawWithSetC(a){gdataC_mainwork=a.Dtab,goptionsC.hAxis.viewWindow.min=a.MinD;var b=goptionsC.animation.duration;goptionsC.animation.duration=a.Dur,drawChartC(),goptionsC.animation.duration=b}function clonetab_common(a){var b=a.toJSON(),c=JSON.parse(b),d=[0,1,2],e=[0,2,3],f=[0,1,3],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:"в доларах",type:"number"},{id:"col2",label:"в гривнях",type:"number"}],h=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:"в гривнях",type:"number"},{id:"col2",label:"в євро",type:"number"}],i=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:"в доларах",type:"number"},{id:"col2",label:"в євро",type:"number"}],j={cols:g},k={cols:h},l={cols:i},m=[],n=[],o=[];for(ii=0;ii<c.rows.length;ii++)m.push({c:[{v:c.rows[ii].c[d[0]].v},{v:c.rows[ii].c[d[1]].v},{v:c.rows[ii].c[d[2]].v}]}),n.push({c:[{v:c.rows[ii].c[e[0]].v},{v:c.rows[ii].c[e[1]].v},{v:c.rows[ii].c[e[2]].v}]}),o.push({c:[{v:c.rows[ii].c[f[0]].v},{v:c.rows[ii].c[f[1]].v},{v:c.rows[ii].c[f[2]].v}]});return j.rows=m,k.rows=n,l.rows=o,{DH:new google.visualization.DataTable(j),EH:new google.visualization.DataTable(k),DE:new google.visualization.DataTable(l)}}google.charts.load("visualization","1",{packages:["corechart"]}),google.charts.setOnLoadCallback(initialize_base_common);var gdataC_DH_All={},gdataC_EH_All={},gdataC_DE_All={},gdataC_DH_10Y={},gdataC_EH_10Y={},gdataC_DE_10Y={},gdataC_DH_5Y={},gdataC_EH_5Y={},gdataC_DE_5Y={},gdataC_DH_3Y={},gdataC_EH_3Y={},gdataC_DE_3Y={},gdataC_DH_work={},gdataC_EH_work={},gdataC_DE_work={},gdataC_mainwork={},gdataC_curpress="dh",gdataC_perpress=1,goptionsC={},gchartC={},dateminC={},datemaxC={},bpc1=document.getElementById("buttp_c1"),bpc2=document.getElementById("buttp_c2"),bpc3=document.getElementById("buttp_c3"),bpc4=document.getElementById("buttp_c4"),bpc5=document.getElementById("buttp_c5"),bpc6=document.getElementById("buttp_c6"),bpc7=document.getElementById("buttp_c7"),bpc8=document.getElementById("buttp_c8");bpc1.onclick=perbutfun_C,bpc2.onclick=perbutfun_C,bpc3.onclick=perbutfun_C,bpc4.onclick=perbutfun_C,bpc5.onclick=perbutfun_C,bpc6.onclick=perbutfun_C,bpc7.onclick=perbutfun_C,bpc8.onclick=perbutfun_C;var bccdh=document.getElementById("buttc_cdh"),bcceh=document.getElementById("buttc_ceh"),bccde=document.getElementById("buttc_cde");bccdh.onclick=curbutfun_C,bcceh.onclick=curbutfun_C,bccde.onclick=curbutfun_C;var miar=[0,120,60,36,24,12,6,3];