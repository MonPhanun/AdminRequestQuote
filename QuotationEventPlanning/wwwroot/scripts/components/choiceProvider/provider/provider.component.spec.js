"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var provider_component_1 = require("./provider.component");
describe('ProviderComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [provider_component_1.ProviderComponent],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(provider_component_1.ProviderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it("Save should be call ", function () {
        var component = fixture.componentInstance;
        var cancel = spyOn(component, "onSave");
        var event;
        component.onSave(event);
        fixture.detectChanges();
        expect(cancel).toHaveBeenCalled();
        expect(component.providerData.length).toEqual(0);
    });
});
//# sourceMappingURL=provider.component.spec.js.map