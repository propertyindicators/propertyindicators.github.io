/*! PILab 20-07-2020 (c) 2017 propertyindicators@gmail.com */

function initialize_base(){var a="https://www.google.com/fusiontables/gvizdata?tq="+encodeURIComponent("SELECT * FROM 1Y2SwUITAvZ8qjZanJS1sXd4_bAxAE76FDxaj03zJ");new google.visualization.Query(a).send(function(a){if(a.isError())return void alert("Error in query: "+a.getMessage()+" "+a.getDetailedMessage());gdataC_DH=a.getDataTable(),initialize_common()})}function curbutfun_C(){var a=$(this).attr("id"),b=a.substring(7,9);"dh"===b&&(gviewC_work=gdataC_DH,goptionsC.series[0].targetAxisIndex=0,goptionsC.series[0].color="#0000FF",goptionsC.series[1].targetAxisIndex=1,goptionsC.series[1].color="#8B0000",goptionsC.vAxes[0].format="$#",goptionsC.vAxes[0].textStyle.color="#0000FF",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="₴#",goptionsC.vAxes[1].textStyle.color="#8B0000",goptionsC.vAxes[1].viewWindow.min=8e3),"eh"===b&&(gviewC_work=gdataC_EH,goptionsC.series[0].targetAxisIndex=1,goptionsC.series[0].color="#8B0000",goptionsC.series[1].targetAxisIndex=0,goptionsC.series[1].color="#228B22",goptionsC.vAxes[0].format="€#",goptionsC.vAxes[0].textStyle.color="#228B22",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="₴#",goptionsC.vAxes[1].textStyle.color="#8B0000",goptionsC.vAxes[1].viewWindow.min=8e3),"de"===b&&(gviewC_work=gdataC_DE,goptionsC.series[0].targetAxisIndex=0,goptionsC.series[0].color="#0000FF",goptionsC.series[1].targetAxisIndex=1,goptionsC.series[1].color="#228B22",goptionsC.vAxes[0].format="$#",goptionsC.vAxes[0].textStyle.color="#0000FF",goptionsC.vAxes[0].viewWindow.min=700,goptionsC.vAxes[1].format="€#",goptionsC.vAxes[1].textStyle.color="#228B22",goptionsC.vAxes[1].viewWindow.min=700),drawChartC()}function perbutfun_C(){var a=$(this).attr("id"),b=+a.substring(7,8),c={};1===b?c=new Date(dateminC):(c=new Date(datemaxC),c.setMonth(-1*miar[b-1])),goptionsC.hAxis.viewWindow.min=c,drawChartC()}function initialize_common(){gdataC_DH=google.visualization.arrayToDataTable(Common_All),dateminC=gdataC_DH.getColumnRange(0).min,datemaxC=gdataC_DH.getColumnRange(0).max,gdataC_EH=gdataC_DH.clone(),gdataC_DE=gdataC_DH.clone(),gdataC_DH.removeColumn(3),gdataC_EH.removeColumn(1),gdataC_DE.removeColumn(2),goptionsC={title:tct("dynressale1","null"),legend:{position:"bottom"},series:{0:{targetAxisIndex:0,color:"#0000FF"},1:{targetAxisIndex:1,color:"#8B0000"}},animation:{duration:1e3,easing:"linear",startup:!0},hAxis:{viewWindow:{min:dateminC,max:datemaxC}},chartArea:{left:"10%",width:"89%"},vAxes:{0:{viewWindow:{min:750},format:"$#",textStyle:{color:"#0000FF"}},1:{viewWindow:{min:8e3},format:"₴#",textStyle:{color:"#8B0000"}}}},gviewC_work=gdataC_DH,gchartC=new google.visualization.LineChart(document.getElementById("chart_div1")),drawChartC()}function drawChartC(){gchartC.draw(gviewC_work,goptionsC)}google.charts.load("visualization","1",{packages:["corechart"]});var Common_All=[["date",tcc("usd"),tcc("hrn"),tcc("eur")],[new Date(2006,3,14),1600,8300,1400],[new Date(2007,3,14),1500,8e3,1300],[new Date(2008,3,14),1400,7700,1200],[new Date(2009,3,14),1300,7400,1100],[new Date(2010,3,14),1200,7100,1e3],[new Date(2011,3,14),1100,6800,900],[new Date(2012,3,14),1e3,6500,900]],gdataC_D={},gdataC_E={},gdataC_H={},gdataC_work={},goptionsC={},gchartC={},gdataO_D={},gdataO_E={},gdataO_H={},gdataO_work={},goptionsO={},gchartO={},gdataT_D={},gdataT_E={},gdataT_H={},gdataT_work={},goptionsT={},gchartT={},datemax={},datemin={},gdataC_DH={},gdataC_EH={},gdataC_DE={},gviewC_work={},goptionsC={},gchartC={},dateminC={},datemaxC={},bpc1=document.getElementById("buttp_c1"),bpc2=document.getElementById("buttp_c2"),bpc3=document.getElementById("buttp_c3"),bpc4=document.getElementById("buttp_c4"),bpc5=document.getElementById("buttp_c5"),bpc6=document.getElementById("buttp_c6"),bpc7=document.getElementById("buttp_c7"),bpc8=document.getElementById("buttp_c8");bpc1.onclick=perbutfun_C,bpc2.onclick=perbutfun_C,bpc3.onclick=perbutfun_C,bpc4.onclick=perbutfun_C,bpc5.onclick=perbutfun_C,bpc6.onclick=perbutfun_C,bpc7.onclick=perbutfun_C,bpc8.onclick=perbutfun_C;var bccdh=document.getElementById("buttc_cdh"),bcceh=document.getElementById("buttc_ceh"),bccde=document.getElementById("buttc_cde");bccdh.onclick=curbutfun_C,bcceh.onclick=curbutfun_C,bccde.onclick=curbutfun_C,google.charts.setOnLoadCallback(initialize_common);var miar=[0,120,60,36,24,12,6,3];