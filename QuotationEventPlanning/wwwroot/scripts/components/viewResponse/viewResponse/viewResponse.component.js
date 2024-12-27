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
exports.ViewResponseComponent = void 0;
var core_1 = require("@angular/core");
var validation_service_1 = require("../../../services/validation.service");
var ViewResponseComponent = /** @class */ (function () {
    function ViewResponseComponent() {
        this.validator = (0, core_1.inject)(validation_service_1.ValidationService);
        this.isShow = false;
        this.errMsSize = '';
    }
    ViewResponseComponent.prototype.ngOnInit = function () {
    };
    ViewResponseComponent.prototype.showQuote = function () {
        this.isShow = true;
    };
    ViewResponseComponent.prototype.closeQuote = function () {
        this.isShow = false;
    };
    ViewResponseComponent.prototype.Validator = function () {
        //this.errMsSize = this.validator.ValidateStringNumberLength(this.values.size,30, "Size is required !", "Invalid size !","Size is too long !");
        return this.errMsSize == '';
    };
    ViewResponseComponent = __decorate([
        (0, core_1.Component)({
            selector: "viewresp-component",
            templateUrl: '../../../templates/quotation/viewResponse/viewResponse/index.html'
        }),
        __metadata("design:paramtypes", [])
    ], ViewResponseComponent);
    return ViewResponseComponent;
}());
exports.ViewResponseComponent = ViewResponseComponent;
//# sourceMappingURL=viewResponse.component.js.map