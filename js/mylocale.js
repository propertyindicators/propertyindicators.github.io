/*! PILab 24-02-2019 (c) 2017 propertyindicators@gmail.com */

function tcz(a){return i18next.t("tc:zone."+a)}function tck(a){return i18next.t("tc:kind."+a)}function tcc(a){return i18next.t("tc:currency."+a)}function tcsubtres(a){return i18next.t("tc:subtitleres."+a)}function tcitabs(a){return i18next.t("tc:itabs."+a)}function tct(a,b){var c=i18next.t("tc:title."+a);if(b){var d=i18next.t("tc:kindnm."+b);c=c.replace("__kkind__",d)}return c}function getlang(){return i18next.t("tc:getlang.v")}var i18nextOpts={debug:!0,backend:{loadPath:"locales/{{lng}}/{{ns}}.json"},fallbackLng:!1,ns:["t","tc"],defaultNS:"t",load:"languageOnly",whitelist:["ru","ua","en"],useLocalStorage:!1};i18next.use(i18nextXHRBackend).use(i18nextBrowserLanguageDetector).init(i18nextOpts,function(a,b){jqueryI18next.init(i18next,$),$(".nav").localize(),$(".content").localize(),$(".my-page-container").localize()}),i18next.on("languageChanged",function(a){if(a){var b=a.split("-");i18next.language!==b[0]&&i18next.changeLanguage(b[0],function(a,b){})}}),$("#i18n-chart-ref").click(function(){var a=i18next.t("mycontact.skypehref");a&&(this.href=a)});