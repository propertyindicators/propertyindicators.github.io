"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParamsModel = /** @class */ (function () {
    function ParamsModel() {
        this.square_is = false;
        this.square_str = "";
        this.square_err = "";
        this.square = 0;
        this.placement_is = false;
        this.placement = 0;
        this.placement_index = 0;
        this.buildtype_mb_is = false;
        this.buildtype_mb = 0;
        this.buildtype_otb_is = false;
        this.buildtype_otb = 0;
        this.entry_type_is = false;
        this.entry_type_index = 0;
        this.entry_placement_is = false;
        this.entry_placement_index = 0;
        this.is_residential_fund = false;
        this.tv = 0; // Trade features
        this.state_is = false;
        this.placement_dict = {
            0: ["Укажите размещение в здании", 0],
            1: ["1-й этаж", 0],
            2: ["2-й этаж", 0.1],
            3: ["3-й этаж", 0.2],
            4: ["Выше 3-го этажа", 0.3],
            5: ["Подвал без окон", 1],
            6: ["Подвал с приямками", 0.7],
            7: ["Полуподвал", 0.5],
            8: ["Цоколь (больше 50% над землей)", 0.3]
        };
        this.buildtype_mb_dict = {
            0: ["Выберите период постройки", 0],
            1: ["Старая застройка (до 2003-го года)", 0],
            2: ["Здание после частичной реконструкции (капремонта)", 0.5],
            3: ["Современная постройка (или после полной реконструкции в современном формате)", 1]
        };
        this.buildtype_otb_dict = {
            0: ["Выберите тип здания", 0],
            1: ["Жилой дом", 0],
            2: ["Нежилая пристройка к жилому дому", 0.5],
            3: ["Нежилое отдельностоящее здание", 1]
        };
        this.entery_type_dict = [
            "Выберите тип входа",
            "Отдельный вход",
            "Общий с другими помещениями вход"
        ];
        this.entery_placement_dict = [
            "Выберите размещение входа",
            "С фасада улицы",
            "Не фасадный, но хорошо просматривается с фасада улицы",
            "Не фасадный, не просматривается с фасада улицы"
        ];
        this.tradevalue_features = {
            traderow: ["Расположено в торговом ряду (места высокой концентрации людских потоков)", false, 1],
            glasscase: ["Наличие торговых витрин", false, 1.5],
            shopwindow: ["Представительская входная группа или фасадные окна с возможностью размещения внешней рекламы", false, 1]
        };
        // Experiment
        this.additional_params = {
            res_fund: ["В жилом фонде", false],
        };
    }
    ParamsModel.prototype.change_sqr = function (sqrStr) {
        this.square_str = sqrStr;
        this.validateSquare();
    };
    ParamsModel.prototype.change_placement = function (index) {
        this.placement_is = true;
        this.placement_index = index;
        this.placement = this.placement_dict[index][1];
        this.recalculate_tv();
    };
    ParamsModel.prototype.change_buildtype_mb = function (index) {
        this.buildtype_mb_is = true;
        this.buildtype_mb = this.buildtype_mb_dict[index][1];
    };
    ParamsModel.prototype.change_buildtype_otb = function (index) {
        this.buildtype_otb_is = true;
        this.buildtype_otb = this.buildtype_otb_dict[index][1];
    };
    ParamsModel.prototype.change_entery_type = function (index) {
        this.entry_type_is = true;
        this.entry_type_index = index;
        this.recalculate_tv();
    };
    ParamsModel.prototype.change_entery_placement = function (index) {
        this.entry_placement_is = true;
        this.entry_placement_index = index;
        this.recalculate_tv();
    };
    ParamsModel.prototype.recalculate_tv = function () {
        // TV recalculation
        var res = 0;
        if (this.entry_placement_index != 3 && this.entry_placement_index != 0) {
            if (this.entry_type_index === 1) { // If premises has own entry
                res = 1.5;
            }
            else if (this.entry_type_index === 2) { // If main entry is used with other premises
                res = 1;
            }
            if (this.placement_index === 3) { // 3-d floor - reduce in 1.5 time
                res /= 1.5;
            }
            else if (this.placement_index === 4) { // over 3-d floor - reduce in 2 times
                res /= 2;
            }
            if (this.entry_placement_index === 2) { // Non-front entry from a street redline, but the entry has good visibility from a street redline
                res /= 2;
            }
        }
        if (this.tradevalue_features["glasscase"][1]) {
            res += this.tradevalue_features["glasscase"][2];
        }
        else if (this.tradevalue_features["shopwindow"][1]) {
            res += this.tradevalue_features["shopwindow"][2];
        }
        this.tv = res;
    };
    // валидатор поля площади
    ParamsModel.prototype.validateSquare = function () {
        if (/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/.test(this.square_str)) {
            this.square = Number(this.square_str);
            if (this.square < 1 || this.square > 10000) {
                this.square_is = false;
                this.square_err = "Площадь помещения должна быть в диапазоне 1 - 10 000 кв.м";
            }
            else {
                this.square_is = true;
                this.square_err = "";
            }
        }
        else {
            this.square = 0;
            this.square_is = false;
            if (this.square_str === "") {
                this.square_err = "";
            }
            else {
                this.square_err = "*значение площади не является числовым";
            }
        }
    };
    ParamsModel.prototype.allRequiredAssigned = function () {
        return this.square_is
            && this.placement_is
            && this.buildtype_mb_is
            && this.buildtype_otb_is
            && this.entry_type_is
            && this.entry_placement_is
            && this.state_is;
    };
    return ParamsModel;
}());
exports.ParamsModel = ParamsModel;
//# sourceMappingURL=model.params.js.map