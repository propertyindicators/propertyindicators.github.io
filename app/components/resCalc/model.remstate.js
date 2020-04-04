"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemStateModel = /** @class */ (function () {
    function RemStateModel() {
        this.common_is = false;
        this.common_val = 0;
        this.remclass_is = false;
        this.remclass = 0;
        this.devaluation_visible = "none";
        this.devaluation_is = false;
        this.devaluation = 0;
        this.avail_visible = "none";
        this.avail_is = false;
        this.avail = 0;
        this.tfa_visible = "none";
        this.mainParametersAreFilled = false;
        this.remclass_dict = {
            0: ["Укажите класс отделки", 0],
            1: ["После строителей - без  (строительный минимум)", 1],
            2: ["После строителей + качественная стяжка и эл. разводка", 2],
            3: ["Изношенная отделка (необходим капремонт всех элементов)", 2],
            4: ["Ремонт \"Эконом\" (нижний ценовой диапазон материалов и СМР)", 5],
            5: ["Ремонт \"Стандарт\" (средний ценовой диапазон материалов и СМР)", 6],
            6: ["Ремонт \"Люкс\" (верхний ценовой диапазон материалов и СМР)", 7]
        };
        this.devaluation_dict = {
            0: ["Укажите состояние ремонта", 0],
            1: ["Незаконченный ремонт", 0],
            2: ["Сильно изношенный (пригодный для проживания) б/у ремонт", 0.25],
            3: ["Б/у ремонт в средне изношенном состоянии", 0.5],
            4: ["Б/у ремонт в хорошем состоянии (почти новый)", 0.75],
            5: ["Абсолютно новый ремонт", 1]
        };
        this.avail_dict = {
            0: ["Укажите готовность неоконченного ремонта", 0],
            1: ["Готовность 20%", 0.2],
            2: ["Готовность 30%", 0.3],
            3: ["Готовность 40%", 0.4],
            4: ["Готовность 50%", 0.5],
            5: ["Готовность 60%", 0.6],
            6: ["Готовность 70%", 0.7],
            7: ["Готовность 80%", 0.8],
            8: ["Готовность 90%", 0.9]
        };
        //рабочий словарь, связанный с логическими значениями переключателей в хтмл
        this.tfa_dict = {
            tech: ["Наличие кондиционеров и встроенной бытовой техники", false, 2],
            furniture: ["Полностю меблированана в соответсвие с классом ремонта", false, 2],
            authdesign: ["Профессиональный авторский дизай интерьера (дизайн-проект)", false, 1],
        };
        //private IsMainParsFilled(): boolean {
        //	return this.
        //}
    }
    RemStateModel.prototype.validateModel = function (reqparam) {
        var tbool = true;
        if (this.remclass_is) {
            reqparam.remclass = false; // dehighlight remclass "select"
            if (this.remclass > 3) {
                tbool = tbool && this.devaluation_is;
                this.devaluation_visible = "block";
                if (this.devaluation === 1) { // 1 means unfinished repair
                    tbool = tbool && this.avail_is;
                    this.avail_visible = "block";
                    this.tfa_visible = "none";
                    // next required field highlighting
                    reqparam.avail = !this.avail_is && this.mainParametersAreFilled;
                }
                else {
                    this.tfa_visible = "block";
                    this.avail_visible = "none";
                    // next required field highlighting
                    reqparam.avail = false;
                }
                // next required field highlighting
                reqparam.devaluation = !this.devaluation_is && this.mainParametersAreFilled;
            }
            else {
                this.devaluation_visible = "none";
                this.avail_visible = "none";
                this.tfa_visible = "none";
            }
        }
        else {
            tbool = false;
            this.devaluation_visible = "block";
            this.tfa_visible = "none";
            this.avail_visible = "none";
            // next required field highlighting
            reqparam.remclass = true && this.mainParametersAreFilled;
        }
        this.common_is = tbool;
        if (tbool)
            this.calculateVal();
    };
    RemStateModel.prototype.calculateVal = function () {
        var tval = this.remclass_dict[this.remclass][1];
        if (this.remclass > 3 && this.devaluation > 1) {
            for (var k in this.tfa_dict) {
                if (this.tfa_dict[k][1])
                    tval = tval + this.tfa_dict[k][2] * (this.remclass - 2) / 4;
            }
        }
        if (this.devaluation === 1) {
            tval = 2 + (tval - 2) * this.avail_dict[this.avail][1];
        }
        else {
            tval = 2 + (tval - 2) * this.devaluation_dict[this.devaluation][1];
        }
        this.common_val = tval;
    };
    return RemStateModel;
}());
exports.RemStateModel = RemStateModel;
//# sourceMappingURL=model.remstate.js.map