/*! PILab 13-04-2020 (c) 2017 propertyindicators@gmail.com */

function initialize_base_zonessqm(){var a=["RegDate","D_AV_1","D_AV_2","D_AV_3","D_AV_4","D_STA_1","D_STA_2","D_STA_3","D_STA_4","D_HRU_1","D_HRU_2","D_HRU_3","D_HRU_4","D_SER_1","D_SER_2","D_SER_3","D_SER_4","D_MOD_1","D_MOD_2","D_MOD_3","D_MOD_4","H_AV_1","H_AV_2","H_AV_3","H_AV_4","H_STA_1","H_STA_2","H_STA_3","H_STA_4","H_HRU_1","H_HRU_2","H_HRU_3","H_HRU_4","H_SER_1","H_SER_2","H_SER_3","H_SER_4","H_MOD_1","H_MOD_2","H_MOD_3","H_MOD_4","E_AV_1","E_AV_2","E_AV_3","E_AV_4","E_STA_1","E_STA_2","E_STA_3","E_STA_4","E_HRU_1","E_HRU_2","E_HRU_3","E_HRU_4","E_SER_1","E_SER_2","E_SER_3","E_SER_4","E_MOD_1","E_MOD_2","E_MOD_3","E_MOD_4"];GET_DT_FROM_FILE=!0,GET_DTAsync("resdiagzonessqm",a,function(a){gdata_zs=mytrasnform_z(a),init_zonessqm()})}function init_zonessqm(){goptions_zs={title:tct("dyncomrent","trading"),hAxis:{title:"Типы домов",titleTextStyle:{color:"#333"}},vAxis:{minValue:0,format:"$#"},legend:{position:"bottom"},animation:{duration:1e3,easing:"linear",startup:!0},chartArea:{left:"9%",width:"90%"}},gchart_zs=new google.visualization.ColumnChart(document.getElementById("chart_div1")),drawChart_zs()}function mytrasnform_z(a){var b=a.toJSON(),c=JSON.parse(b),d=["Типы домов","1 ком","2 ком","3 ком","4 ком"],e=["Все типы","сталинки","хрущевки","серийные","современные"],f=["d","h","e"],g={};for(i=0;i<3;i++){for(gar=[],ii=0;ii<5;ii++){var h=[];for(h[0]=d,iii=0;iii<5;iii++)for(h[iii+1]=[],h[iii+1][0]=e[iii],iiii=0;iiii<4;iiii++)h[iii+1][iiii+1]=c.rows[ii].c[20*i+4*iii+iiii+2].v;gar[ii]=google.visualization.arrayToDataTable(h)}g[f[i]]=gar}return g}function basebutfun_zs(){var a=$(this).attr("id"),b=+a.substring(8,9);b!==gdata_zs_zonepress&&(gdata_zs_zonepress=b,drawchart_zs())}function curbutfun_zs(){var a=$(this).attr("id"),b=a.substring(8,9);b!==gdata_zs_curpress&&(gdata_zs_curpress=b,"d"===b&&(goptions_zs.vAxis.format="$#"),"h"===b&&(goptions_zs.vAxis.format="₴#"),"e"===b&&(goptions_zs.vAxis.format="€#"),drawchart_zs())}function drawChart_zs(){gchart_zs.draw(gdata_zs[gdata_zs_curpress][gdata_zs_zonepress],goptions_zs)}google.charts.load("visualization","1",{packages:["corechart"]}),google.charts.setOnLoadCallback(initialize_base_zonessqm);var gdata_zs={},gdata_zs_work={},gdata_zs_mainwork={},gdata_zs_curpress="d",gdata_zs_zonepress=0,goptions_zs={},gchart_zs={},b_zs0=document.getElementById("buttb_zs0"),b_zs1=document.getElementById("buttb_zs1"),b_zs2=document.getElementById("buttb_zs2"),b_zs3=document.getElementById("buttb_zs3"),b_zs4=document.getElementById("buttb_zs4");b_zs0.onclick=basebutfun_zs,b_zs1.onclick=basebutfun_zs,b_zs2.onclick=basebutfun_zs,b_zs3.onclick=basebutfun_zs,b_zs4.onclick=basebutfun_zs;var b_zsd=document.getElementById("buttc_zsd"),b_zse=document.getElementById("buttc_zse"),b_zsh=document.getElementById("buttc_zsh");b_zsd.onclick=curbutfun_zs,b_zsh.onclick=curbutfun_zs,b_zse.onclick=curbutfun_zs;