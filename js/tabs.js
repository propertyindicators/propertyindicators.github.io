/*! PILab 11-04-2020 (c) 2017 propertyindicators@gmail.com */

"use strict";function MyTab(a,b){this.tabinit=b,this.id=+a,this.basepress=0,this.rxpress="x",this.curpress="d",this.buttons={},this.options={},this.tabs=[],this.chart={},this.finaldate=[],this.create_chart=function(){this.chart=new google.visualization.Table(document.getElementById("tab_div_"+this.id))},this.create_buttons=function(){if(b.length>1)for(var a=0;a<b.length;a++)this.buttons[a]=document.getElementById("buttb_"+this.id+String(a)),this.buttons[a].onclick=this.basebuttonfunc.bind(this);var c=this;rxkeys.forEach(function(a,b,d){c.buttons[a]=document.getElementById("butti_"+c.id+a),c.buttons[a].onclick=c.ibuttonfunc.bind(c)}),currencykeys.forEach(function(a,b,d){c.buttons[a]=document.getElementById("buttc_"+c.id+a),c.buttons[a].onclick=c.curbuttonfunc.bind(c)})},this.create_options=function(){this.options={animation:{duration:1e3,easing:"linear",startup:!0},width:"100%",height:"100%",allowHtml:!0,cssClassNames:{headerRow:"tabheader",tableRow:"",oddTableRow:"",selectedTableRow:"",hoverTableRow:"",headerCell:"tabheadercell",tableCell:"",rowNumberCell:""}}},this.create_tabs_and_firstdraw=function(a){GET_DT_FROM_FILE=a;var c="fusion";a&&(c="file");var d=this;b.forEach(function(a,b,e){GET_DTAsync(a[c],a.sql,function(a){d.set_tabs(a,b),b===d.basepress&&d.drawchart()})})},this.set_tabs=function(a,c){for(var d=a.toJSON(),e=JSON.parse(d),f=[[tcitabs("firstcol")],[tcitabs("firstcol")]],g=0;g<e.rows.length;g++)f[0][g+1]=e.rows[g].c[4].v,f[1][g+1]=e.rows[g].c[getlang()].v;for(var h={},i=0;i<2;i++){for(var j={},k=0;k<3;k++){var l=[];l[0]=f[i];for(var m=0;m<b[c].rows.length;m++){for(var n=[tcitabs(b[c].rows[m])],o=0;o<e.rows.length;o++){var p=e.rows[o].c[5+2*b[c].rows.length*k+2*m+i].v;n[o+1]=0===i?{v:p,f:this.set_indexed_f(p,i,o,k),p:{style:this.set_indexed_style(p,i,o,m)}}:0===o?{v:e.rows[o].c[5+2*b[c].rows.length*k+2*m].v,f:this.set_indexed_f(e.rows[o].c[5+2*b[c].rows.length*k+2*m].v,i,o,k),p:{style:this.set_indexed_style(p,i,o,m)}}:{v:p,f:this.set_indexed_f(p,i,o,k),p:{style:this.set_indexed_style(p,i,o,m)}}}l[1+m]=n}j[currencykeys[k]]=google.visualization.arrayToDataTable(l)}h[rxkeys[i]]=j}this.tabs[c]=h,this.finaldate[c]=e.rows[0].c[4].v},this.set_indexed_f=function(a,b,c,d){if(0===b||1===b&&0===c){var e=Math.round(10*a)/10,f="";return f=2===getlang()?"/m²":"/м²",formatdict[currencykeys[d]]+e+f}var g=Math.round(1e3*a)/10,h="",i="";return g>0?(h="↑",i="+"):g<0&&(h="↓"),i+g+"% "+h},this.set_indexed_style=function(a,b,c,d){return"color: "+(0===b?0===c?"#000000":"#696969":0===c?"#000000":a<0?"#800000":"#008000")+"; text-align: center;"},this.initall=function(a){this.create_chart(),this.create_buttons(),this.create_options(),this.create_tabs_and_firstdraw(a)},this.drawchart=function(){this.chart.draw(this.tabs[this.basepress][this.rxpress][this.curpress],this.options),document.getElementById("tab_notes_"+this.id).innerHTML="<h6>*"+tcitabs("notdat")+" "+this.finaldate[this.basepress]+"</h6>"},this.basebuttonfunc=function(a){a=a||window.event;var b=a.currentTarget.id,c=(b.substring(6,7),+b.substring(7,8));c!==this.basepress&&(this.basepress=c,this.drawchart())},this.curbuttonfunc=function(a){a=a||window.event;var b=a.currentTarget.id,c=(b.substring(6,7),b.substring(7,8));c!==this.curpress&&(this.curpress=c,this.drawchart())},this.ibuttonfunc=function(a){a=a||window.event;var b=a.currentTarget.id,c=(b.substring(6,7),b.substring(7,8));c!==this.rxpress&&(this.rxpress=c,this.drawchart())}}var currencykeys=["d","h","e"],rxkeys=["r","x"],formatdict={d:"$",h:"₴",e:"€"};