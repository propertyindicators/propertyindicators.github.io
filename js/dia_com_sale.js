/*! PILab 18-05-2018 (c) 2017 propertyindicators@gmail.com */

function DrawWithCurrencyC(){var a=$(this).attr("id"),b=a.substring(7,8);b!==pressbuttC&&(pressbuttC=b,"d"===b&&(gdataC_work=gdataC_D,goptionsC.vAxis.format="$#"),"h"===b&&(gdataC_work=gdataC_H,goptionsC.vAxis.format="₴#"),"e"===b&&(gdataC_work=gdataC_E,goptionsC.vAxis.format="€#"),drawChartC())}function DrawWithCurrencyO(){var a=$(this).attr("id"),b=a.substring(7,8);b!==pressbuttO&&(pressbuttO=b,"d"===b&&(gdataO_work=gdataO_D,goptionsO.vAxis.format="$#"),"h"===b&&(gdataO_work=gdataO_H,goptionsO.vAxis.format="₴#"),"e"===b&&(gdataO_work=gdataO_E,goptionsO.vAxis.format="€#"),drawChartO())}function DrawWithCurrencyT(){var a=$(this).attr("id"),b=a.substring(7,8);b!==pressbuttT&&(pressbuttT=b,"d"===b&&(gdataT_work=gdataT_D,goptionsT.vAxis.format="$#"),"h"===b&&(gdataT_work=gdataT_H,goptionsT.vAxis.format="₴#"),"e"===b&&(gdataT_work=gdataT_E,goptionsT.vAxis.format="€#"),drawChartT())}function DrawWithCurrencyB(){var a=$(this).attr("id"),b=a.substring(7,8);b!==pressbuttB&&(pressbuttB=b,"d"===b&&(gdataB_work=gdataB_D,goptionsB.vAxis.format="$#"),"h"===b&&(gdataB_work=gdataB_H,goptionsB.vAxis.format="₴#"),"e"===b&&(gdataB_work=gdataB_E,goptionsB.vAxis.format="€#"),drawChartB())}function drawChartC(){gchartC.draw(gdataC_work,goptionsC)}function drawChartO(){gchartO.draw(gdataO_work,goptionsO)}function drawChartT(){gchartT.draw(gdataT_work,goptionsT)}function drawChartB(){gchartB.draw(gdataB_work,goptionsB)}function initialize_data(){var a=["ID","Name","D_K_1","D_K_2","D_C_1","D_C_2","D_NC_1","D_NC_2","D_EV_1","D_EV_2","D_P_1","D_P_2","H_K_1","H_K_2","H_C_1","H_C_2","H_NC_1","H_NC_2","H_EV_1","H_EV_2","H_P_1","H_P_2","E_K_1","E_K_2","E_C_1","E_C_2","E_NC_1","E_NC_2","E_EV_1","E_EV_2","E_P_1","E_P_2"];GET_DT_FROM_FILE=!0,GET_DTAsync("comdiagsale",a,function(a){var b=a.toJSON(),c=JSON.parse(b),d={"Диаграмма1":{first:["#8B0000","#FF0000"],other:["#9932CC","#808000"]},"Диаграмма2":{first:["#8B0000","#FF0000"],other:["#006400","#808000"]},"Диаграмма3":{first:["#8B0000","#FF0000"],other:["#800080","#9932CC"]},"Диаграмма4":{first:["#8B0000"],other:["#D2691E"]}},e={"Диаграмма1":{name:tct("diacomsale","nonresidential"),rows:[tck("trading"),tck("office")]},"Диаграмма2":{name:tct("diacomsale","office"),rows:[tck("profoffice"),tck("office")]},"Диаграмма3":{name:tct("diacomsale","trading"),rows:[tck("proftrading"),tck("trading")]},"Диаграмма4":{name:tct("diacomsale","basement"),rows:[tck("basement")]}};zonesnames=[tcz("nm"),tcz("kiev"),tcz("center"),tcz("nearcenter"),tcz("midcenter"),tcz("periphery")];var f=c.rows.map(function(a,b){return GetDiagDataTableFromRow(a,d[a.c[1].v],e[a.c[1].v])});gdataC_D=f[0].D,gdataC_H=f[0].H,gdataC_E=f[0].E,goptionsC=f[0].OPT,gdataO_D=f[1].D,gdataO_H=f[1].H,gdataO_E=f[1].E,goptionsO=f[1].OPT,gdataT_D=f[2].D,gdataT_H=f[2].H,gdataT_E=f[2].E,goptionsT=f[2].OPT,gdataB_D=f[3].D,gdataB_H=f[3].H,gdataB_E=f[3].E,goptionsB=f[3].OPT,gdataC_work=gdataC_D,gchartC=new google.visualization.ColumnChart(document.getElementById("chart_div1")),drawChartC(),gdataO_work=gdataO_D,gchartO=new google.visualization.ColumnChart(document.getElementById("chart_div2")),drawChartO(),gdataT_work=gdataT_D,gchartT=new google.visualization.ColumnChart(document.getElementById("chart_div3")),drawChartT(),gdataB_work=gdataB_D,gchartB=new google.visualization.ColumnChart(document.getElementById("chart_div4")),drawChartB()})}function GetDiagDataTableFromRow(a,b,c){var d=c.rows.length,e=[];for(i=0;i<3;i++){var f=[zonesnames[0]];for(iii=0;iii<d;iii++)f.push(c.rows[iii],{role:"style"});for(e[i]=[f],ii=0;ii<5;ii++){var g=[zonesnames[ii+1]],h=[];for(iii=0;iii<d;iii++)0===ii?h[iii]=b.first[iii]:h[iii]=b.other[iii];for(iii=0;iii<d;iii++)g.push(a.c[2+10*i+2*ii+iii].v,h[iii]);e[i].push(g)}}var j={title:c.name,vAxis:{minValue:0,format:"$#"},legend:{position:"bottom"},colors:[],animation:{duration:1e3,easing:"linear",startup:!0},chartArea:{left:"9%",width:"90%"}};for(i=0;i<d;i++)j.colors[i]=b.other[i];return{D:google.visualization.arrayToDataTable(e[0]),H:google.visualization.arrayToDataTable(e[1]),E:google.visualization.arrayToDataTable(e[2]),OPT:j}}google.charts.load("visualization","1",{packages:["corechart"]}),google.charts.setOnLoadCallback(initialize_data);var gdataC_D={},gdataC_H={},gdataC_E={},gdataC_work={},goptionsC={},gchartC={},pressbuttC="d",gdataO_D={},gdataO_H={},gdataO_E={},gdataO_work={},goptionsO={},gchartO={},pressbuttO="d",gdataT_D={},gdataT_H={},gdataT_E={},gdataT_work={},goptionsT={},gchartT={},pressbuttT="d",gdataB_D={},gdataB_H={},gdataB_E={},gdataB_work={},goptionsB={},gchartB={},pressbuttB="d",zonesnames=[],bccd=document.getElementById("buttc_cd"),bcce=document.getElementById("buttc_ce"),bcch=document.getElementById("buttc_ch"),bcod=document.getElementById("buttc_od"),bcoe=document.getElementById("buttc_oe"),bcoh=document.getElementById("buttc_oh"),bctd=document.getElementById("buttc_td"),bcte=document.getElementById("buttc_te"),bcth=document.getElementById("buttc_th"),bcbd=document.getElementById("buttc_bd"),bcbe=document.getElementById("buttc_be"),bcbh=document.getElementById("buttc_bh");bccd.onclick=DrawWithCurrencyC,bcce.onclick=DrawWithCurrencyC,bcch.onclick=DrawWithCurrencyC,bcod.onclick=DrawWithCurrencyO,bcoe.onclick=DrawWithCurrencyO,bcoh.onclick=DrawWithCurrencyO,bctd.onclick=DrawWithCurrencyT,bcte.onclick=DrawWithCurrencyT,bcth.onclick=DrawWithCurrencyT,bcbd.onclick=DrawWithCurrencyB,bcbe.onclick=DrawWithCurrencyB,bcbh.onclick=DrawWithCurrencyB;