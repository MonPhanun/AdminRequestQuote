"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DressingComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var DressingComponent = /** @class */ (function () {
    function DressingComponent() {
        this.route = (0, core_1.inject)(router_1.Router);
        this.dressingData = new Array();
    }
    DressingComponent.prototype.ngOnInit = function () {
    };
    DressingComponent.prototype.onSave = function (data) {
        if (data.isValid()) {
            this.dressingData.push(data);
        }
    };
    DressingComponent = __decorate([
        (0, core_1.Component)({
            selector: 'dressing-component',
            templateUrl: '../../../templates/quotation/dressingProvider/dressing/index.html',
        }),
        __metadata("design:paramtypes", [])
    ], DressingComponent);
    return DressingComponent;
}());
exports.DressingComponent = DressingComponent;
//# sourceMappingURL=dressing.component.js.map