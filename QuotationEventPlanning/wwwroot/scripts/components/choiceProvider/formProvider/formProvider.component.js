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
exports.providerComponent = void 0;
var core_1 = require("@angular/core");
var validation_service_1 = require("../../../services/validation.service");
var formProviderVM_1 = require("./formProviderVM");
var router_1 = require("@angular/router");
var providerComponent = /** @class */ (function () {
    function providerComponent() {
        this.validator = (0, core_1.inject)(validation_service_1.ValidationService);
        this.router = (0, core_1.inject)(router_1.Router);
        this.oldValue = new formProviderVM_1.providerVM();
        this.values = new formProviderVM_1.providerVM();
        this.mockProvider = [];
        this.onSave = new core_1.EventEmitter();
        this.errMsSupplier = '';
        this.errMsLocation = '';
    }
    providerComponent.prototype.ngOnInit = function () {
        this.mockProvider = [{ supplier: 'Rotha Somangka', location: "Phnom Penh" },
            { supplier: 'Rachana Somangka', location: "Phnom Penh" },
            { supplier: 'Monika Somangka', location: "Phnom Penh" },
            { supplier: 'Chackrya Somangka', location: "Phnom Penh" },];
    };
    providerComponent.prototype.Save = function () {
        if (this.Validator() && this.values.isValid()) {
            this.onSave.emit(this.values);
            this.router.navigate(['/home/dressing']);
        }
        else {
            // this.toast.error('Invalid input !', 'Error', { closeButton: true, });
        }
    };
    providerComponent.prototype.Cancel = function () {
    };
    providerComponent.prototype.Validator = function () {
        this.errMsSupplier = this.validator.ValidateStringLength(this.values.supplier, 30, "Supplier is required !", "Invalid supplier !", "Supplier is too long !");
        this.errMsLocation = this.validator.ValidateStringNumberLength(this.values.location, 50, "Location is required !", "Invalid Location !", "Location is too long !");
        return this.errMsSupplier == '' && this.errMsLocation == '';
    };
    __decorate([
        (0, core_1.Output)("onSave"),
        __metadata("design:type", core_1.EventEmitter)
    ], providerComponent.prototype, "onSave", void 0);
    providerComponent = __decorate([
        (0, core_1.Component)({
            selector: "proform-component",
            templateUrl: '../../../templates/quotation/choiceProvider/formProvider/index.html'
        })
    ], providerComponent);
    return providerComponent;
}());
exports.providerComponent = providerComponent;
//# sourceMappingURL=formProvider.component.js.map