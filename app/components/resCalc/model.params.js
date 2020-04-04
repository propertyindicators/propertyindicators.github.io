"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ParamsModel = /** @class */ (function () {
    function ParamsModel() {
        this.rooms_is = false;
        this.rooms = "";
        this.buildtype_is = false;
        this.buildtype = "";
        this.floor_is = false;
        this.floor = "";
        this.square_is = false;
        this.square_str = "";
        this.square_err = "";
        this.square = 0;
        this.state_is = false;
        this.rooms_dict = {
            0: ["Укажите количество комнат", "", true],
            1: ["1-но однокомнатная", "1r", false],
            2: ["2-х комнатная", "2r", false],
            3: ["3-х комнатная", "3r", false],
            4: ["4-х и более комнатная", "4r", false]
        };
        this.buildtype_dict = {
            0: ["Выберите тип дома", "", true],
            1: ["\"гостинка\" - все квартры в доме однокомнатные", "hot", false],
            2: ["\"сталинки\" и прочие дома постройки до ~1958 года", "sta", false],
            3: ["дома 60-х годов постройки типа \"хрущёвка\" (5 этажей)", "hru", false],
            4: ["\"чешка\" и прочие дома 60-70-х годов постройки (8-10 этажей)", "che", false],
            5: ["дома улучшенной планировки 70-80-х годов постройки (СОВМИН и пр. ведомственные дома)", "80y", false],
            6: ["серийные дома позднего массового советского домостроения (сери Т, КТ, КП, АППС, 96 и пр.)", "ser", false],
            7: ["серийные дома улучшеной планировки 90-2000-х годов постройки (сери КТУ, АППС-Люкс и пр.)", "90y", false],
            8: ["дома современной постройки после 2003-го года", "mod", false],
        };
        this.floor_dict = {
            0: ["Укажите этаж", ""],
            1: ["первый этаж", "first"],
            2: ["средний этаж", "aver"],
            3: ["последний этаж", "last"],
            4: ["пентхаусы в элитных домах", "pent"],
        };
        //убрать потом
        this.state_dict = {
            0: "Определите состояние квартиры по 10-ти бальной шкале",
            1: "0  : Требуется ремонт с заменой всех элементов отделки; Квартиры после пожара, затопления, длительного запущения; Квартиры в новых домах без перегородок (свободное планирование) и стяжки",
            2: "1  : Квартиры в новых домах с базовой строительной отделкой (черновая стяжка, перегородки, стеклопакеты); Убитые квартиры, в которых хоть один раз была выполнена финишная отделка",
            3: "2  : Квартиры в новых домах с улучшеной строительной отделкой (чистовая стяжка, штукатурка, базовые точки инженерных сетей)",
            4: "3  : Полностью изношенная отделка любого класса, но квартира может эксплуатироваться для проживания без немедленного ремонта",
            5: "4  : Б/у ремонт  класса \"Эконом\" или сильно изношенный ремонт класса \"Стандарт\"",
            6: "5  : Новый ремонт класса \"Эконом\" (элементы отделки выполнены из материалов  нижнего ценового диапазона); б/у ремонт класса \"Стандарт\" или сильно изношенный ремонт класса \"Люкс\" (без необходимости немедленного ремонта)",
            7: "6  : Новый ремонт класса \"Стандарт\" (элементы отделки выполнены из материалов хорошего качества среднего ценового диапазона); или б/у ремонт класса \"Люкс\"; или сильно изношенный ремонт \"Люкс\" с бытовой техникой; или сильно изношенный ремонт класса \"VIP\" без бытовой техники",
            8: "7  : Новый ремонт класса \"Люкс\" (элементы отделки выполнены из импортных материалов высокого ценового диапазона с высоким качеством строительных работ); или новый ремонт класса \"Стандарт\" + встроенная бытовая техника (стиральныая машина, вытяжка,кондиционеры/посудомоечная машина); или б/у ремонт класса \"Люкс\" + техника; или сильно изношенный ремонт \"VIP\" + техника",
            9: "8  : Новый ремонт класса \"Люкс\" + техника (стиральныая машина, вытяжка, посудомоечная машина, система видеонаблюдения, встроенные телевизоры); или б/у ремонт класса \"VIP\" с техникой",
            10: "9  : Новый ремонт класса \"VIP\" (элементы отделки выполнены из импортных материалов элитного ценового диапазона с максимальным качеством строительных работ + авторский дизайн)",
            11: "10 : Новый ремонт класса \"VIP\" + техника (стиральныая машина, вытяжка, посудомоечная машина, система видеонаблюдения, встроенные телевизоры и др.)"
        };
        this.typeSqrRanges = [
            [22, 10, 44],
            [25.5, 10, 44],
            [30, 10, 44],
            [34.5, 10, 44],
            [38, 25, 56],
            [30, 25, 41],
            [33, 25, 41],
            [35, 25, 46],
            [39, 25, 59],
            [38, 29, 61],
            [52, 29, 91],
            [52, 37, 79],
            [47, 33, 59],
            [48, 33, 64],
            [50, 41, 71],
            [52, 44, 64],
            [63, 44, 89],
            [70, 44, 121],
            [70, 44, 121],
            [58, 41, 84],
            [60, 44, 89],
            [70, 56, 109],
            [72, 58, 121],
            [80, 67, 154],
            [100, 67, 350],
            [85, 72, 450],
            [82, 67, 154],
            [95, 67, 154],
            [95, 74, 350],
            [120, 79, 1000]
        ];
        this.typesnumeric = {
            "sta": 0,
            "hru": 1,
            "che": 2,
            "80y": 3,
            "ser": 4,
            "90y": 5,
            "mod": 6,
        };
    }
    ParamsModel.prototype.getRoomTypeRange = function () {
        var typeindex = this.getTypeIndex();
        var temp = { min: this.typeSqrRanges[typeindex][1], max: this.typeSqrRanges[typeindex][2] };
        return temp;
    };
    ParamsModel.prototype.getRoomTypeAverage = function () {
        var trange = this.getTypeIndex();
        if (trange === 0)
            return;
        return this.typeSqrRanges[this.getTypeIndex()][0];
    };
    ParamsModel.prototype.getTypeIndex = function () {
        var a = 0;
        var p = this;
        var typenum;
        //проверка логики параметров
        if (p.buildtype === "hot" && p.rooms !== "1r") {
            alert("\"гостинка\" не может иметь 2-е и более комнат - выберите другой тип квартиры");
            return 0;
        }
        if (p.buildtype === "hru" && p.rooms === "4r") {
            alert("\"хрущёвки\" имеют  максимум 3 комнаты - выберите другой тип квартиры");
            return 0;
        }
        if (p.buildtype === "che" && p.rooms === "4r") {
            alert("\"чешки\" имеют максимум 3 комнаты - выберите другой тип квартиры");
            return 0;
        }
        //основная логика (работает при условии валидации)
        if (p.buildtype === "hot") {
            if (p.square < 24)
                typenum = 0;
            else if (p.square >= 24 && p.square < 28)
                typenum = 1;
            else if (p.square >= 28 && p.square < 33)
                typenum = 2;
            else
                typenum = 3;
            return typenum;
        }
        else {
            if (p.rooms === "1r")
                typenum = 4;
            if (p.rooms === "2r")
                typenum = 11;
            if (p.rooms === "3r")
                typenum = 18;
            if (p.rooms === "4r")
                typenum = 25;
        }
        var offset = this.typesnumeric[p.buildtype];
        if (p.rooms === "4r" && offset > 2)
            offset = offset - 2;
        typenum = typenum + offset;
        return typenum;
    };
    ParamsModel.prototype.validateSqrRange = function () {
        if (!this.rooms_is || !this.buildtype_is) {
            this.square_is = false;
            this.square_err = "";
        }
        else {
            var range = this.getRoomTypeRange();
            if (this.square >= range.min && this.square <= range.max) {
                this.square_is = true;
                this.square_err = "";
            }
            else {
                this.square_is = false;
                this.square_err = "*Для выбранного типа дома и количества комнат значение площади должно быть в диапазоне " + range.min + "-" + range.max + " кв.м";
            }
        }
    };
    ParamsModel.prototype.schemaTypeRooms = function () {
        //на 2-х и более комнатах отключен тип "гостинки"
        if (this.rooms !== "1r")
            this.buildtype_dict[1][2] = true;
        else
            this.buildtype_dict[1][2] = false;
        //на 4-х комнатных отключаются хрущёвки и чешки
        if (this.rooms === "4r") {
            this.buildtype_dict[3][2] = true;
            this.buildtype_dict[4][2] = true;
        }
        else {
            this.buildtype_dict[3][2] = false;
            this.buildtype_dict[4][2] = false;
        }
        ////и обратная валидация
        //при гостинках отключаются 2-3-4 кометаный выбор
        if (this.buildtype === "hot") {
            this.rooms_dict[2][2] = true;
            this.rooms_dict[3][2] = true;
            this.rooms_dict[4][2] = true;
        }
        else {
            this.rooms_dict[2][2] = false;
            this.rooms_dict[3][2] = false;
            this.rooms_dict[4][2] = false;
        }
        //при чешках и хрущёвках отключается 4-ком выбор 
        if (this.buildtype === "che" || this.buildtype === "hru") {
            this.rooms_dict[4][2] = true;
        }
        else {
            if (this.buildtype !== "hot")
                this.rooms_dict[4][2] = false;
        }
    };
    return ParamsModel;
}());
exports.ParamsModel = ParamsModel;
//# sourceMappingURL=model.params.js.map