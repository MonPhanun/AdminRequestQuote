"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestVM = void 0;
var RequestVM = /** @class */ (function () {
    function RequestVM() {
        this.quote = "";
        this.name = "";
        this.status = '';
    }
    RequestVM.prototype.isValid = function () {
        return this.quote != "" &&
            this.name != "" &&
            this.date != null &&
            this.status != "";
    };
    RequestVM.prototype.copy = function (value) {
        this.quote = value.quote;
        this.name = value.name;
        this.date = value.date;
        this.status = value.status;
    };
    return RequestVM;
}());
exports.RequestVM = RequestVM;
//# sourceMappingURL=requestVM.js.map