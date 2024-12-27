"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.layoutComponent = void 0;
var core_1 = require("@angular/core");
var layoutComponent = /** @class */ (function () {
    function layoutComponent() {
        this.colapesSidebar = false;
    }
    layoutComponent.prototype.colapes = function (clp) {
        this.colapesSidebar = clp;
    };
    layoutComponent = __decorate([
        (0, core_1.Component)({
            selector: 'layout-component',
            templateUrl: '../../templates/quotation/layout/index.html',
        })
    ], layoutComponent);
    return layoutComponent;
}());
exports.layoutComponent = layoutComponent;
//# sourceMappingURL=layout.component.js.map