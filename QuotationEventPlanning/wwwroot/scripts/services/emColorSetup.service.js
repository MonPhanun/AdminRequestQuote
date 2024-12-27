"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmColorSetupService = void 0;
var core_1 = require("@angular/core");
var EmColorSetupService = /** @class */ (function () {
    function EmColorSetupService() {
        this.storeColor = [];
    }
    EmColorSetupService.prototype.mockClothSize = function () {
        var mock = new Array();
        //mock.push({ color: "Red" } as colorSetupVM)
        //mock.push({ color: "Pink" } as colorSetupVM)
        //mock.push({ color: "Blue" } as colorSetupVM)
        //mock.push({ color: "Green" } as colorSetupVM)
        //mock.push({ color: "Yellow" } as colorSetupVM)
        return mock;
    };
    EmColorSetupService.prototype.getClothSize = function () {
        this.storeColor = this.mockClothSize();
        return this.storeColor;
    };
    EmColorSetupService.prototype.createClothSizee = function (data) {
        if (data.isValid()) {
            this.storeColor.push(data);
        }
    };
    EmColorSetupService.prototype.ediClothSize = function (data) {
        if (data.length > 0) {
            this.storeColor = this.storeColor.map(function (e) { return e == data[0] ? data[1] : e; });
        }
    };
    EmColorSetupService.prototype.deleteClothSize = function (data) {
        if (data.isValid()) {
            this.storeColor = this.storeColor.filter(function (e) { return e != data; });
        }
    };
    EmColorSetupService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], EmColorSetupService);
    return EmColorSetupService;
}());
exports.EmColorSetupService = EmColorSetupService;
//# sourceMappingURL=emColorSetup.service.js.map