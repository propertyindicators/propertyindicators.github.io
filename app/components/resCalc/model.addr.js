"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddrModel = /** @class */ (function () {
    function AddrModel(district, street_is, street, street_found, number_is, number_str, number_int, multimas, massive_is, massive_int, massive_str, validate_colors, street_color, massive_color, req_district, req_street, req_number) {
        if (validate_colors === void 0) { validate_colors = ["rgb(152,15,0)", "rgb(0, 152, 8)"]; }
        if (street_color === void 0) { street_color = validate_colors[0]; }
        if (massive_color === void 0) { massive_color = validate_colors[0]; }
        if (req_district === void 0) { req_district = true; }
        if (req_street === void 0) { req_street = true; }
        if (req_number === void 0) { req_number = true; }
        this.district = district;
        this.street_is = street_is;
        this.street = street;
        this.street_found = street_found;
        this.number_is = number_is;
        this.number_str = number_str;
        this.number_int = number_int;
        this.multimas = multimas;
        this.massive_is = massive_is;
        this.massive_int = massive_int;
        this.massive_str = massive_str;
        this.validate_colors = validate_colors;
        this.street_color = street_color;
        this.massive_color = massive_color;
        this.req_district = req_district;
        this.req_street = req_street;
        this.req_number = req_number;
        this.distrdict = {
            0: "Выберите район",
            1: "Голосеевский",
            2: "Дарницкий",
            3: "Деснянский",
            4: "Днепровский",
            5: "Оболонский",
            6: "Печерский",
            7: "Подольский",
            8: "Святошинский",
            9: "Соломенский",
            10: "Шевченковский"
        };
        this.massivedict = {
            1: "Березняки",
            2: "Борщаговка (Никольская)",
            3: "Борщаговка (Серединная)",
            4: "Борщаговка (Южная)",
            5: "Виноградарь",
            6: "Воскресенка",
            7: "Голосеево (Демиевка)",
            8: "Голосеево (Ломоносова)",
            9: "Голосеево (Сапёрная Слободка)",
            10: "Дарница (ДВРЗ)",
            11: "Дарница (Комсомольский м-в)",
            12: "Дарница (Дарницкая площадь)",
            13: "Дарница (Новая)",
            14: "Дарница (Соцгород)",
            15: "Дарница (Старая)",
            16: "Индустриальный м-в",
            17: "Корчеватое",
            18: "КПИ",
            19: "Куреневка (Ближняя)",
            20: "Куреневка (Дальняя)",
            21: "Лесной м-в",
            22: "Лукьяновка",
            23: "Минский м-в",
            24: "Нивки (Ближние)",
            25: "Нивки (Дальние)",
            26: "Никольская Слободка",
            27: "Оболонь",
            28: "Оболонь (Липки)",
            29: "Отрадный м-в",
            30: "Печерск (Киквидзе)",
            31: "Печерск (Кловский)",
            32: "Печерск (Липки)",
            33: "Печерск (Старонаводницкая)",
            34: "Печерск (Щорса_Кудри)",
            35: "Подол",
            36: "Радужный м-в",
            37: "Русановка",
            38: "Святошино",
            39: "Святошино (Беличи)",
            40: "Святошино (Новобеличи)",
            41: "Соломенка (Батыева гора)",
            42: "Соломенка (Ближняя)",
            43: "Соломенка (Дальняя)",
            44: "Сырец",
            45: "Татарка",
            46: "Теремки-1",
            47: "Теремки-2",
            48: "Троещина (Ближняя)",
            49: "Троещина (Дальняя)",
            50: "Харьковский (Массив)",
            51: "Харьковский (Осокорки)",
            52: "Харьковский (Позняки Ближние)",
            53: "Харьковский (Позняки Дальние)",
            54: "Центр (Бехтеревский)",
            55: "Центр (Гончара)",
            56: "Центр (Дворец Украина)",
            57: "Центр (Коцюбинского)",
            58: "Центр (Майдан)",
            59: "Центр (Руставели)",
            60: "Центр (Саксаганского)",
            61: "Чоколовка (Ближняя)",
            62: "Чоколовка (Дальняя)",
            63: "Шулявка (Северная)",
            64: "Шулявка (Южная)"
        };
    }
    AddrModel.prototype.setIformColors = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.street_is) {
                _this.street_color = _this.validate_colors[1];
                _this.req_street = false;
            }
            else {
                _this.street_color = _this.validate_colors[0];
                _this.req_street = true;
            }
            if (_this.massive_is) {
                _this.massive_color = _this.validate_colors[1];
                _this.req_number = false;
            }
            else {
                _this.massive_color = _this.validate_colors[0];
                _this.req_number = true;
            }
        }, 0);
    };
    AddrModel.prototype.setNullData = function () {
        this.street_is = false;
        this.street = "";
        this.street_found = "";
        this.number_is = false;
        this.number_str = "";
        this.number_int = null;
        this.multimas = null;
        this.massive_is = false;
        this.massive_int = null;
        this.massive_str = "";
        this.street_color = this.validate_colors[0];
        this.massive_color = this.validate_colors[0];
        this.req_street = true,
            this.req_number = true;
    };
    return AddrModel;
}());
exports.AddrModel = AddrModel;
//# sourceMappingURL=model.addr.js.map