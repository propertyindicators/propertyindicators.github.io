/*! PILab 07-06-2018 (c) 2017 propertyindicators@gmail.com */

function initialize_base_common(){var a=["RegDate","D_C","D_NC","D_EV","D_P","H_C","H_NC","H_EV","H_P","E_C","E_NC","E_EV","E_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("comrentcommonAll",a,function(b){init_common(b),GET_DTAsync("comrentcommon5Y",a,function(a){var b=clonetab(a);gdataC_D_5Y=b.D,gdataC_H_5Y=b.H,gdataC_E_5Y=b.E}),GET_DTAsync("comrentcommon3Y",a,function(a){var b=clonetab(a);gdataC_D_3Y=b.D,gdataC_H_3Y=b.H,gdataC_E_3Y=b.E})})}function init_common(a){dateminC=a.getColumnRange(0).min,datemaxC=a.getColumnRange(0).max;var b=clonetab(a);gdataC_D_All=b.D,gdataC_H_All=b.H,gdataC_E_All=b.E,gdataC_D_work=gdataC_D_All,gdataC_H_work=gdataC_H_All,gdataC_E_work=gdataC_E_All,goptionsC={title:tct("dyncomrent","nonresidential"),vAxis:{minValue:0,format:"$#"},legend:{position:"bottom"},series:{0:{color:"#0000FF"},1:{color:"#FF8C00"},2:{color:"#FF0000"},3:{color:"#006400"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminC,max:datemaxC}},chartArea:{left:"5%",width:"90%"}},gdataC_mainwork=gdataC_D_work,gchartC=new google.visualization.AreaChart(document.getElementById("chart_div1")),drawChartC(),setTimeout(initialize_base_offices,1e3)}function drawChartC(){gchartC.draw(gdataC_mainwork,goptionsC)}function drawWithSetC(a){gdataC_mainwork=a.Dtab,goptionsC.hAxis.viewWindow.min=a.MinD;var b=goptionsC.animation.duration;goptionsC.animation.duration=a.Dur,drawChartC(),goptionsC.animation.duration=b}function perbutfun_C(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataC_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataC_D_All)||(gdataC_D_work=gdataC_D_All,gdataC_H_work=gdataC_H_All,gdataC_E_work=gdataC_E_All),2!==b||$.isEmptyObject(gdataC_D_5Y)||(gdataC_D_work=gdataC_D_5Y,gdataC_H_work=gdataC_H_5Y,gdataC_E_work=gdataC_E_5Y),b>2&&!$.isEmptyObject(gdataC_D_3Y)&&(gdataC_D_work=gdataC_D_3Y,gdataC_H_work=gdataC_H_3Y,gdataC_E_work=gdataC_E_3Y),gdataC_perpress>2&&b>2)c=new Date(datemaxC),c.setMonth(-1*miar[b-1]),goptionsC.hAxis.viewWindow.min=c,drawChartC();else if(b>gdataC_perpress){1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.hAxis.viewWindow.min=c;var d={};"d"===gdataC_curpress&&(d=gdataC_D_work),"h"===gdataC_curpress&&(d=gdataC_H_work),"e"===gdataC_curpress&&(d=gdataC_E_work),drawChartC(),setTimeout(drawWithSetC,1e3,{Dtab:d,MinD:c,Dur:500})}else"d"===gdataC_curpress&&(gdataC_mainwork=gdataC_D_work),"h"===gdataC_curpress&&(gdataC_mainwork=gdataC_H_work),"e"===gdataC_curpress&&(gdataC_mainwork=gdataC_E_work),1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.animation.duration=500,drawChartC(),goptionsC.animation.duration=1e3,setTimeout(drawWithSetC,500,{Dtab:gdataC_mainwork,MinD:c,Dur:1e3});gdataC_perpress=b}}function curbutfun_C(){var a=$(this).attr("id"),b=a.substring(7,8);b!==gdataC_curpress&&("d"===b&&(gdataC_mainwork=gdataC_D_work,goptionsC.vAxis.format="$#",goptionsC.vAxis.minValue=0),"h"===b&&(gdataC_mainwork=gdataC_H_work,goptionsC.vAxis.format="₴#",goptionsC.vAxis.minValue=0),"e"===b&&(gdataC_mainwork=gdataC_E_work,goptionsC.vAxis.format="€#",goptionsC.vAxis.minValue=0),drawChartC(),gdataC_curpress=b)}function initialize_base_offices(){var a=["RegDate","D_C","D_NC","D_EV","D_P","H_C","H_NC","H_EV","H_P","E_C","E_NC","E_EV","E_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("comrentofAll",a,function(b){init_offices(b),GET_DTAsync("comrentof5Y",a,function(a){var b=clonetab(a);gdataO_D_5Y=b.D,gdataO_H_5Y=b.H,gdataO_E_5Y=b.E}),GET_DTAsync("comrentof3Y",a,function(a){var b=clonetab(a);gdataO_D_3Y=b.D,gdataO_H_3Y=b.H,gdataO_E_3Y=b.E})})}function init_offices(a){dateminO=a.getColumnRange(0).min,datemaxO=a.getColumnRange(0).max;var b=clonetab(a);gdataO_D_All=b.D,gdataO_H_All=b.H,gdataO_E_All=b.E,gdataO_D_work=gdataO_D_All,gdataO_H_work=gdataO_H_All,gdataO_E_work=gdataO_E_All,goptionsO={title:tct("dyncomrent","office"),vAxis:{minValue:0,format:"$#"},legend:{position:"bottom"},series:{0:{color:"#008000"},1:{color:"#DAA520"},2:{color:"#FF4500"},3:{color:"#000080"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminO,max:datemaxO}},chartArea:{left:"5%",width:"90%"}},gdataO_mainwork=gdataO_D_work,gchartO=new google.visualization.AreaChart(document.getElementById("chart_div2")),drawChartO(),setTimeout(initialize_base_trade,1e3)}function drawChartO(){gchartO.draw(gdataO_mainwork,goptionsO)}function drawWithSetO(a){gdataO_mainwork=a.Dtab,goptionsO.hAxis.viewWindow.min=a.MinD;var b=goptionsO.animation.duration;goptionsO.animation.duration=a.Dur,drawChartO(),goptionsO.animation.duration=b}function perbutfun_O(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataO_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataO_D_All)||(gdataO_D_work=gdataO_D_All,gdataO_H_work=gdataO_H_All,gdataO_E_work=gdataO_E_All),2!==b||$.isEmptyObject(gdataO_D_5Y)||(gdataO_D_work=gdataO_D_5Y,gdataO_H_work=gdataO_H_5Y,gdataO_E_work=gdataO_E_5Y),b>2&&!$.isEmptyObject(gdataO_D_3Y)&&(gdataO_D_work=gdataO_D_3Y,gdataO_H_work=gdataO_H_3Y,gdataO_E_work=gdataO_E_3Y),gdataO_perpress>2&&b>2)c=new Date(datemaxO),c.setMonth(-1*miar[b-1]),goptionsO.hAxis.viewWindow.min=c,drawChartO();else if(b>gdataO_perpress){1===b?c=new Date(dateminO):(c=new Date(datemaxO),c.setMonth(-1*miar[b-1])),goptionsO.hAxis.viewWindow.min=c;var d={};"d"===gdataO_curpress&&(d=gdataO_D_work),"h"===gdataO_curpress&&(d=gdataO_H_work),"e"===gdataO_curpress&&(d=gdataO_E_work),drawChartO(),setTimeout(drawWithSetO,1e3,{Dtab:d,MinD:c,Dur:500})}else"d"===gdataO_curpress&&(gdataO_mainwork=gdataO_D_work),"h"===gdataO_curpress&&(gdataO_mainwork=gdataO_H_work),"e"===gdataO_curpress&&(gdataO_mainwork=gdataO_E_work),1===b?c=new Date(dateminO):(c=new Date(datemaxO),c.setMonth(-1*miar[b-1])),goptionsO.animation.duration=500,drawChartO(),goptionsO.animation.duration=1e3,setTimeout(drawWithSetO,500,{Dtab:gdataO_mainwork,MinD:c,Dur:1e3});gdataO_perpress=b}}function curbutfun_O(){var a=$(this).attr("id"),b=a.substring(7,8);b!==gdataO_curpress&&("d"===b&&(gdataO_mainwork=gdataO_D_work,goptionsO.vAxis.format="$#",goptionsO.vAxis.minValue=0),"h"===b&&(gdataO_mainwork=gdataO_H_work,goptionsO.vAxis.format="₴#",goptionsO.vAxis.minValue=0),"e"===b&&(gdataO_mainwork=gdataO_E_work,goptionsO.vAxis.format="€#",goptionsO.vAxis.minValue=0),drawChartO(),gdataO_curpress=b)}function clonetab(a){var b=a.toJSON(),c=JSON.parse(b),d=[0,2,3,4,5],e=[0,7,8,9,10],f=[0,12,13,14,15],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcz("center"),type:"number"},{id:"col2",label:tcz("nearcenter"),type:"number"},{id:"col3",label:tcz("midcenter"),type:"number"},{id:"col4",label:tcz("periphery"),type:"number"}],h={cols:g},i={cols:g},j={cols:g},k=[],l=[],m=[];for(ii=0;ii<c.rows.length;ii++)k.push({c:[{v:c.rows[ii].c[d[0]].v},{v:c.rows[ii].c[d[1]].v},{v:c.rows[ii].c[d[2]].v},{v:c.rows[ii].c[d[3]].v},{v:c.rows[ii].c[d[4]].v}]}),l.push({c:[{v:c.rows[ii].c[e[0]].v},{v:c.rows[ii].c[e[1]].v},{v:c.rows[ii].c[e[2]].v},{v:c.rows[ii].c[e[3]].v},{v:c.rows[ii].c[e[4]].v}]}),m.push({c:[{v:c.rows[ii].c[f[0]].v},{v:c.rows[ii].c[f[1]].v},{v:c.rows[ii].c[f[2]].v},{v:c.rows[ii].c[f[3]].v},{v:c.rows[ii].c[f[4]].v}]});return h.rows=k,i.rows=l,j.rows=m,{D:new google.visualization.DataTable(h),H:new google.visualization.DataTable(i),E:new google.visualization.DataTable(j)}}function initialize_base_trade(){var a=["RegDate","D_C","D_NC","D_EV","D_P","H_C","H_NC","H_EV","H_P","E_C","E_NC","E_EV","E_P"];GET_DT_FROM_FILE=!0,GET_DTAsync("comrenttrAll",a,function(b){init_trade(b),GET_DTAsync("comrenttr5Y",a,function(a){var b=clonetab(a);gdataT_D_5Y=b.D,gdataT_H_5Y=b.H,gdataT_E_5Y=b.E}),GET_DTAsync("comrenttr3Y",a,function(a){var b=clonetab(a);gdataT_D_3Y=b.D,gdataT_H_3Y=b.H,gdataT_E_3Y=b.E})})}function init_trade(a){dateminT=a.getColumnRange(0).min,datemaxT=a.getColumnRange(0).max;var b=clonetab(a);gdataT_D_All=b.D,gdataT_H_All=b.H,gdataT_E_All=b.E,gdataT_D_work=gdataT_D_All,gdataT_H_work=gdataT_H_All,gdataT_E_work=gdataT_E_All,goptionsT={title:tct("dyncomrent","trading"),vAxis:{minValue:0,format:"$#"},legend:{position:"bottom"},series:{0:{color:"#9932CC"},1:{color:"#DC143C"},2:{color:"#008000"},3:{color:"#800000"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminT,max:datemaxT}},chartArea:{left:"5%",width:"90%"}},gdataT_mainwork=gdataT_D_work,gchartT=new google.visualization.AreaChart(document.getElementById("chart_div3")),drawChartT()}function drawChartT(){gchartT.draw(gdataT_mainwork,goptionsT)}function drawWithSetT(a){gdataT_mainwork=a.Dtab,goptionsT.hAxis.viewWindow.min=a.MinD;var b=goptionsT.animation.duration;goptionsT.animation.duration=a.Dur,drawChartT(),goptionsT.animation.duration=b}function perbutfun_T(){var a=$(this).attr("id"),b=+a.substring(7,8);if(gdataT_perpress!==b){var c={};if(1!==b||$.isEmptyObject(gdataT_D_All)||(gdataT_D_work=gdataT_D_All,gdataT_H_work=gdataT_H_All,gdataT_E_work=gdataT_E_All),2!==b||$.isEmptyObject(gdataT_D_5Y)||(gdataT_D_work=gdataT_D_5Y,gdataT_H_work=gdataT_H_5Y,gdataT_E_work=gdataT_E_5Y),b>2&&!$.isEmptyObject(gdataT_D_3Y)&&(gdataT_D_work=gdataT_D_3Y,gdataT_H_work=gdataT_H_3Y,gdataT_E_work=gdataT_E_3Y),gdataT_perpress>2&&b>2)c=new Date(datemaxT),c.setMonth(-1*miar[b-1]),goptionsT.hAxis.viewWindow.min=c,drawChartT();else if(b>gdataT_perpress){1===b?c=new Date(dateminT):(c=new Date(datemaxT),c.setMonth(-1*miar[b-1])),goptionsT.hAxis.viewWindow.min=c;var d={};"d"===gdataT_curpress&&(d=gdataT_D_work),"h"===gdataT_curpress&&(d=gdataT_H_work),"e"===gdataT_curpress&&(d=gdataT_E_work),drawChartT(),setTimeout(drawWithSetT,1e3,{Dtab:d,MinD:c,Dur:500})}else"d"===gdataT_curpress&&(gdataT_mainwork=gdataT_D_work),"h"===gdataT_curpress&&(gdataT_mainwork=gdataT_H_work),"e"===gdataT_curpress&&(gdataT_mainwork=gdataT_E_work),1===b?c=new Date(dateminT):(c=new Date(datemaxT),c.setMonth(-1*miar[b-1])),goptionsT.animation.duration=500,drawChartT(),goptionsT.animation.duration=1e3,setTimeout(drawWithSetT,500,{Dtab:gdataT_mainwork,MinD:c,Dur:1e3});gdataT_perpress=b}}function curbutfun_T(){var a=$(this).attr("id"),b=a.substring(7,8);b!==gdataT_curpress&&("d"===b&&(gdataT_mainwork=gdataT_D_work,goptionsT.vAxis.format="$#",goptionsT.vAxis.minValue=0),"h"===b&&(gdataT_mainwork=gdataT_H_work,goptionsT.vAxis.format="₴#",goptionsT.vAxis.minValue=0),"e"===b&&(gdataT_mainwork=gdataT_E_work,goptionsT.vAxis.format="€#",goptionsT.vAxis.minValue=0),drawChartT(),gdataT_curpress=b)}function clonetab(a){var b=a.toJSON(),c=JSON.parse(b),d=[0,2,3,4,5],e=[0,7,8,9,10],f=[0,12,13,14,15],g=[{id:"col0",label:"RegDate",type:"date"},{id:"col1",label:tcz("center"),type:"number"},{id:"col2",label:tcz("nearcenter"),type:"number"},{id:"col3",label:tcz("midcenter"),type:"number"},{id:"col4",label:tcz("periphery"),type:"number"}],h={cols:g},i={cols:g},j={cols:g},k=[],l=[],m=[];for(ii=0;ii<c.rows.length;ii++)k.push({c:[{v:c.rows[ii].c[d[0]].v},{v:c.rows[ii].c[d[1]].v},{v:c.rows[ii].c[d[2]].v},{v:c.rows[ii].c[d[3]].v},{v:c.rows[ii].c[d[4]].v}]}),l.push({c:[{v:c.rows[ii].c[e[0]].v},{v:c.rows[ii].c[e[1]].v},{v:c.rows[ii].c[e[2]].v},{v:c.rows[ii].c[e[3]].v},{v:c.rows[ii].c[e[4]].v}]}),m.push({c:[{v:c.rows[ii].c[f[0]].v},{v:c.rows[ii].c[f[1]].v},{v:c.rows[ii].c[f[2]].v},{v:c.rows[ii].c[f[3]].v},{v:c.rows[ii].c[f[4]].v}]});return h.rows=k,i.rows=l,j.rows=m,{D:new google.visualization.DataTable(h),H:new google.visualization.DataTable(i),E:new google.visualization.DataTable(j)}}google.charts.load("visualization","1",{packages:["corechart"]}),google.charts.setOnLoadCallback(initialize_base_common);var gdataC_D_All={},gdataC_H_All={},gdataC_E_All={},gdataC_D_5Y={},gdataC_H_5Y={},gdataC_E_5Y={},gdataC_D_3Y={},gdataC_H_3Y={},gdataC_E_3Y={},gdataC_D_work={},gdataC_E_work={},gdataC_H_work={},gdataC_mainwork={},gdataC_curpress="d",gdataC_perpress=1,goptionsC={},dateminC={},datemaxC={},bpc1=document.getElementById("buttp_c1"),bpc2=document.getElementById("buttp_c2"),bpc3=document.getElementById("buttp_c3"),bpc4=document.getElementById("buttp_c4"),bpc5=document.getElementById("buttp_c5"),bpc6=document.getElementById("buttp_c6"),bpc7=document.getElementById("buttp_c7");bpc1.onclick=perbutfun_C,bpc2.onclick=perbutfun_C,bpc3.onclick=perbutfun_C,bpc4.onclick=perbutfun_C,bpc5.onclick=perbutfun_C,bpc6.onclick=perbutfun_C,bpc7.onclick=perbutfun_C;var bccd=document.getElementById("buttc_cd"),bcce=document.getElementById("buttc_ce"),bcch=document.getElementById("buttc_ch");bccd.onclick=curbutfun_C,bcch.onclick=curbutfun_C,bcce.onclick=curbutfun_C;var gdataO_D_All={},gdataO_H_All={},gdataO_E_All={},gdataO_D_5Y={},gdataO_H_5Y={},gdataO_E_5Y={},gdataO_D_3Y={},gdataO_H_3Y={},gdataO_E_3Y={},gdataO_D_work={},gdataO_E_work={},gdataO_H_work={},gdataO_mainwork={},gdataO_curpress="d",gdataO_perpress=1,goptionsO={},dateminO={},datemaxO={},bpo1=document.getElementById("buttp_o1"),bpo2=document.getElementById("buttp_o2"),bpo3=document.getElementById("buttp_o3"),bpo4=document.getElementById("buttp_o4"),bpo5=document.getElementById("buttp_o5"),bpo6=document.getElementById("buttp_o6"),bpo7=document.getElementById("buttp_o7");bpo1.onclick=perbutfun_O,bpo2.onclick=perbutfun_O,bpo3.onclick=perbutfun_O,bpo4.onclick=perbutfun_O,bpo5.onclick=perbutfun_O,bpo6.onclick=perbutfun_O,bpo7.onclick=perbutfun_O;var bcod=document.getElementById("buttc_od"),bcoe=document.getElementById("buttc_oe"),bcoh=document.getElementById("buttc_oh");bcod.onclick=curbutfun_O,bcoh.onclick=curbutfun_O,bcoe.onclick=curbutfun_O;var gdataT_D_All={},gdataT_H_All={},gdataT_E_All={},gdataT_D_5Y={},gdataT_H_5Y={},gdataT_E_5Y={},gdataT_D_3Y={},gdataT_H_3Y={},gdataT_E_3Y={},gdataT_D_work={},gdataT_E_work={},gdataT_H_work={},gdataT_mainwork={},gdataT_curpress="d",gdataT_perpress=1,goptionsT={},dateminT={},datemaxT={},bpt1=document.getElementById("buttp_t1"),bpt2=document.getElementById("buttp_t2"),bpt3=document.getElementById("buttp_t3"),bpt4=document.getElementById("buttp_t4"),bpt5=document.getElementById("buttp_t5"),bpt6=document.getElementById("buttp_t6"),bpt7=document.getElementById("buttp_t7");bpt1.onclick=perbutfun_T,bpt2.onclick=perbutfun_T,bpt3.onclick=perbutfun_T,bpt4.onclick=perbutfun_T,bpt5.onclick=perbutfun_T,bpt6.onclick=perbutfun_T,bpt7.onclick=perbutfun_T;var bctd=document.getElementById("buttc_td"),bcte=document.getElementById("buttc_te"),bcth=document.getElementById("buttc_th");bctd.onclick=curbutfun_T,bcth.onclick=curbutfun_T,bcte.onclick=curbutfun_T;var miar=[0,60,36,24,12,6,3];