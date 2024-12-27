"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmSizeSetupService = void 0;
var core_1 = require("@angular/core");
var EmSizeSetupService = /** @class */ (function () {
    function EmSizeSetupService() {
        this.storeSize = [];
    }
    EmSizeSetupService.prototype.mockClothSize = function () {
        var mock = new Array();
        mock.push({ size: "XXL" });
        mock.push({ size: "XL" });
        mock.push({ size: "L" });
        mock.push({ size: "XS" });
        mock.push({ size: "S" });
        return mock;
    };
    EmSizeSetupService.prototype.getClothSize = function () {
        this.storeSize = this.mockClothSize();
        return this.storeSize;
    };
    EmSizeSetupService.prototype.createClothSizee = function (data) {
        if (data.isValid()) {
            this.storeSize.push(data);
        }
    };
    EmSizeSetupService.prototype.ediClothSize = function (data) {
        if (data.length > 0) {
            this.storeSize = this.storeSize.map(function (e) { return e == data[0] ? data[1] : e; });
        }
    };
    EmSizeSetupService.prototype.deleteClothSize = function (data) {
        if (data.isValid()) {
            this.storeSize = this.storeSize.filter(function (e) { return e != data; });
        }
    };
    EmSizeSetupService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], EmSizeSetupService);
    return EmSizeSetupService;
}());
exports.EmSizeSetupService = EmSizeSetupService;
//# sourceMappingURL=emSizeSetup.service.js.map