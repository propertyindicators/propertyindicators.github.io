/*! PILab 28-01-2018 (c) 2017 propertyindicators@gmail.com */

function GET_DTAsync(a,b,c){var d=new DataTableSource(GET_DT_FROM_FILE);d.TableId=a,d.Fields=b,d.FilePath=GET_DT_FILE_PATH,d.initialize(function(a){c(a.DataSource)})}var GET_DT_FROM_FILE=!1,GET_DT_FILE_PATH="./data/test/",DataTableSource=function(){function a(a){this.IsFileSrc=a}return a.prototype.initialize=function(a){this.IsFileSrc?this.initializeFile(a):this.initializeFusion(a)},a.prototype.initializeFile=function(a){var b=this.FilePath+this.TableId+".json";$.getJSON(b,function(b){this.DataSource=new google.visualization.DataTable;for(var c=[],d=0;d<b.cols.length;d++)"date"==b.cols[d].type&&c.push(d),this.DataSource.addColumn(b.cols[d].type,b.cols[d].label,b.cols[d].id);for(var d=0;d<b.rows.length;d++){for(var e=b.rows[d],f=0;f<c.length;f++)e[f]=new Date(e[f]);this.DataSource.addRow(e)}a(this)}).fail(function(a,b,c){alert("error occurred:"+a.responseText)})},a.prototype.getQuery=function(){var a=this.Fields.toString(),b="SELECT "+a+" FROM "+this.TableId;return"https://www.google.com/fusiontables/gvizdata?tq="+encodeURIComponent(b)},a.prototype.initializeFusion=function(a){new google.visualization.Query(this.getQuery()).send(function(b){if(b.isError())return void alert("Error in query: "+b.getMessage()+" "+b.getDetailedMessage());this.DataSource=b.getDataTable(),a(this)})},a}();