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
exports.viewListComponent = void 0;
var core_1 = require("@angular/core");
var viewListComponent = /** @class */ (function () {
    function viewListComponent() {
    }
    viewListComponent.prototype.ngOnInit = function () {
    };
    viewListComponent = __decorate([
        (0, core_1.Component)({
            selector: 'view-component',
            templateUrl: '../../../templates/quotation/viewRequest/viewList/index.html',
        }),
        __metadata("design:paramtypes", [])
    ], viewListComponent);
    return viewListComponent;
}());
exports.viewListComponent = viewListComponent;
//# sourceMappingURL=viewList.component.js.map