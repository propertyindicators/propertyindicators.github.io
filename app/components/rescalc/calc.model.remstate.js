"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RemStateModel = /** @class */ (function () {
    function RemStateModel() {
        this.common_is = false;
        this.remclass_is = false;
        this.remclass = 0;
        this.devaluation_visible = "none";
        this.devaluation_is = false;
        this.devaluation = 0;
        this.tfa_visible = "none";
        this.tech = false;
        this.furniture = false;
        this.authdesign = false;
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
    }
    return RemStateModel;
}());
exports.RemStateModel = RemStateModel;
//# sourceMappingURL=calc.model.remstate.js.map