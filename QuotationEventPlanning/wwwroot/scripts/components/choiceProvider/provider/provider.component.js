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
exports.ProviderComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var ProviderComponent = /** @class */ (function () {
    function ProviderComponent() {
        this.route = (0, core_1.inject)(router_1.Router);
        this.providerData = new Array();
    }
    ProviderComponent.prototype.ngOnInit = function () {
        this.getEmbell();
    };
    ProviderComponent.prototype.getEmbell = function () {
        //this.NameData = this.embellService.getEmbellName();
    };
    ProviderComponent.prototype.onSave = function (data) {
        if (data.isValid()) {
            this.providerData.push(data);
            //this.embellService.createEmbellName(data);
        }
    };
    ProviderComponent = __decorate([
        (0, core_1.Component)({
            selector: 'provider-component',
            templateUrl: '../../../templates/quotation/choiceProvider/provider/index.html',
        }),
        __metadata("design:paramtypes", [])
    ], ProviderComponent);
    return ProviderComponent;
}());
exports.ProviderComponent = ProviderComponent;
//# sourceMappingURL=provider.component.js.map