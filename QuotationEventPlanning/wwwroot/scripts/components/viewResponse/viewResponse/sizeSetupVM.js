"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sizeSetupVM = void 0;
var sizeSetupVM = /** @class */ (function () {
    function sizeSetupVM() {
        this.size = "";
    }
    sizeSetupVM.prototype.isValid = function () {
        return this.size != "";
    };
    sizeSetupVM.prototype.copy = function (value) {
        this.size = value.size;
    };
    return sizeSetupVM;
}());
exports.sizeSetupVM = sizeSetupVM;
//# sourceMappingURL=sizeSetupVM.js.map