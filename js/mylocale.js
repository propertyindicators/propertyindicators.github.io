/*! PILab 23-01-2021 (c) 2017 propertyindicators@gmail.com */

function SetHandleAfterLocalize(a){_onAfterLocalize&&console.log("MyLocale: handlerAfterLocalize reinitialization"),_isLocalized?a():_onAfterLocalize=a}function tcz(a){return i18next.t("tc:zone."+a)}function tck(a){return i18next.t("tc:kind."+a)}function tcc(a){return i18next.t("tc:currency."+a)}function tcsubtres(a){return i18next.t("tc:subtitleres."+a)}function tcitabs(a){return i18next.t("tc:itabs."+a)}function tct(a,b){var c=i18next.t("tc:title."+a);if(b){var d=i18next.t("tc:kindnm."+b);c=c.replace("__kkind__",d)}return c}function getlang(){return"ru"==i18next.language?1:"en"==i18next.language?2:"ua"==i18next.language?3:2}function getlangAttrShow(a){switch(a){case 1:return"[i18n-ru]";case 2:return"[i18n-en]";case 3:return"[i18n-ua]";default:return getlangclassShow(2)}}function getlangAttrHide(a){var b=[];for(inx=1;inx<4;inx++)inx!=a&&b.push(getlangAttrShow(inx));return b}function LocalizeElems(){var a=getlang();$(getlangAttrShow(a)).show(),getlangAttrHide(a).forEach(function(a,b,c){$(a).hide()})}var _isLocalized=!1,_onAfterLocalize,i18nextOpts={debug:!0,backend:{loadPath:"locales/{{lng}}/{{ns}}.json"},fallbackLng:!1,ns:["t","tc"],defaultNS:"t",load:"languageOnly",whitelist:["ru","ua","en"],useLocalStorage:!1};i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init(i18nextOpts,function(a,b){if(a)return console.log("i18next: something went wrong loading",a);jqueryI18next.init(i18next,$),$(".nav").localize(),$(".content").localize(),$(".my-page-container").localize(),_isLocalized=!0,_onAfterLocalize&&_onAfterLocalize()}),i18next.on("languageChanged",function(a){if(a){var b=a.split("-"),c=b[0];i18next.language!==c&&i18next.changeLanguage(c,function(a,b){})}LocalizeElems()}),$("#i18n-chart-ref").click(function(){var a=i18next.t("mycontact.skypehref");a&&(this.href=a)});