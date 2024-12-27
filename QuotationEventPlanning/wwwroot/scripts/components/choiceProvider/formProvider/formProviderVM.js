"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.providerVM = void 0;
var providerVM = /** @class */ (function () {
    function providerVM() {
        this.supplier = "";
        this.location = "";
    }
    providerVM.prototype.isValid = function () {
        return this.supplier != "" &&
            this.location != "";
    };
    providerVM.prototype.copy = function (value) {
        this.supplier = value.supplier;
        this.location = value.location;
    };
    return providerVM;
}());
exports.providerVM = providerVM;
//# sourceMappingURL=formProviderVM.js.map