"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// Zone (is needed for angular - already imported)
// import 'zone.js/dist/zone';
// For InternetExplorer support:
require("core-js/es6/symbol");
require("core-js/es6/object");
require("core-js/es6/function");
require("core-js/es6/parse-int");
require("core-js/es6/parse-float");
require("core-js/es6/number");
require("core-js/es6/math");
require("core-js/es6/string");
require("core-js/es6/date");
require("core-js/es6/array");
// import 'core-js/es6/regexp'; - generates error
require("core-js/es6/map");
require("core-js/es6/set");
// Reflect Api support:
require("core-js/es7/reflect");
require("tslib");
var module_1 = require("./components/resCalc/module");
var module_2 = require("./components/premisesCalc/module");
if (window.location.pathname == "/calc_res.html") {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_1.ResidentialCalcModule);
}
else if (window.location.pathname == "/calc_premises.html") {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(module_2.PremisesCalcModule);
}
//# sourceMappingURL=main.js.map