"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
// zone ������������ angular - ��� ���������
//import 'zone.js/dist/zone';
//��� ��
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
// import 'core-js/es6/regexp'; - ����� ������
require("core-js/es6/map");
require("core-js/es6/set");
// ��� ��������� Reflect Api
require("core-js/es7/reflect");
require("tslib");
var calc_module_1 = require("./components/rescalc/calc.module");
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(calc_module_1.AppModule);
//# sourceMappingURL=main.js.map