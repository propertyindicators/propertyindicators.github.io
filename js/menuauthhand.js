/*! PILab 18-04-2021 */

CryptoJS.MyCfg.Host="https://localhost:5001",CryptoJS.MyCfg.ReqPK="38066";var PageAuthActions=function(a){};$(function(){var a=CryptoJS.MyCN(function(){a.GetAuthName()&&($("#menuLogin").hide(),$("#menuLogout").show(),$("#menuMyObj").show());var b={returnUrl:window.location.href},c=decodeURIComponent(jQuery.param(b)),d=CryptoJS.MyCfg.Host+"/Account";$("#menuLogoutRef").attr("href",d+"/Logout?"+c),PageAuthActions(a)},function(a){alert("ERR: \n"+a)})});