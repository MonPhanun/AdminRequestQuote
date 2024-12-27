"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmSetupNameService = void 0;
/// <reference path="../route/route.ts" />
var core_1 = require("@angular/core");
var EmSetupNameService = /** @class */ (function () {
    function EmSetupNameService() {
        this.storeProvider = [];
    }
    EmSetupNameService.prototype.mockEmbellishment = function () {
        var mock = new Array();
        //mock.push({ name: "Theara Somangkar", phone: "0123456789", email: "theara12@gmail.com", address: "Phnom Penh" } as nameSetupVM)
        //mock.push({ name: "Virak Somangkar", phone: "0456834556", email: "virak12@gmail.com", address: "Takeo" } as nameSetupVM)
        //mock.push({ name: "Dara Somangkar", phone: "08556774565", email: "dara12@gmail.com", address: "Seam Reab" } as nameSetupVM)
        //mock.push({ name: "PhySokhonThy Somangkar", phone: "01456674455", email: "khunthea12@gmail.com", address: "Ratanak kiri" } as nameSetupVM)
        return mock;
    };
    EmSetupNameService.prototype.getEmbellName = function () {
        this.storeProvider = this.mockEmbellishment();
        return this.storeProvider;
    };
    EmSetupNameService.prototype.createEmbellName = function (data) {
        if (data.isValid()) {
            this.storeProvider.push(data);
        }
    };
    EmSetupNameService.prototype.editEmbell = function (data) {
        if (data.length > 0) {
            this.storeProvider = this.storeProvider.map(function (e) { return e == data[0] ? data[1] : e; });
        }
    };
    EmSetupNameService.prototype.deleteEmbell = function (data) {
        if (data.isValid()) {
            this.storeProvider = this.storeProvider.filter(function (e) { return e != data; });
        }
    };
    EmSetupNameService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], EmSetupNameService);
    return EmSetupNameService;
}());
exports.EmSetupNameService = EmSetupNameService;
//# sourceMappingURL=emSetupName.service.js.map