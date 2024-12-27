"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var formProvider_component_1 = require("./formProvider.component");
describe('ChoiceProviderComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [formProvider_component_1.providerComponent],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ngx_toastr_1.ToastrModule.forRoot(),
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(formProvider_component_1.providerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it("Save should be call", function () {
        var component = fixture.componentInstance;
        fixture.detectChanges();
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.save'));
        var Save = spyOn(component, "Save");
        btn.triggerEventHandler('click', {});
        expect(Save).toHaveBeenCalled();
    });
    it("cancel form should be call", function () {
        var component = fixture.componentInstance;
        fixture.detectChanges();
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.cancel'));
        var cancel = spyOn(component, "Cancel");
        btn.triggerEventHandler('click', {});
        expect(cancel).toHaveBeenCalled();
    });
    it("Value should be valid", function () {
        var component = fixture.componentInstance;
        component.values.supplier = 'name';
        component.values.location = 'location';
        fixture.detectChanges();
        expect(component.values.isValid()).toBeTrue();
        expect(component.Validator()).toBeTrue();
    });
    it("Value should be Invalid", function () {
        var component = fixture.componentInstance;
        component.values.supplier = '';
        component.values.location = 'location';
        fixture.detectChanges();
        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    });
    it("Value should be Invalid", function () {
        var component = fixture.componentInstance;
        component.values.supplier = 'name';
        component.values.location = '';
        fixture.detectChanges();
        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    });
    it('Label should be not error', function () {
        var component = fixture.componentInstance;
        var TextSupplier = fixture.elementRef.nativeElement.querySelector('.label-suplier');
        var TextLocation = fixture.elementRef.nativeElement.querySelector('.label-location');
        fixture.detectChanges();
        expect(TextSupplier.innerHTML.trim()).toBe('no message');
        expect(TextLocation.innerHTML.trim()).toBe('no message');
    });
    it('Label should be not error', function () {
        var component = fixture.componentInstance;
        var TextSupplier = fixture.elementRef.nativeElement.querySelector('.label-suplier');
        var TextLocation = fixture.elementRef.nativeElement.querySelector('.label-location');
        fixture.detectChanges();
        expect(TextSupplier.innerHTML.trim()).toBe('no message');
        expect(TextLocation.innerHTML.trim()).toBe('no message');
    });
    it("Label type should be show error required .", function () {
        var component = fixture.componentInstance;
        component.values.supplier = '';
        component.values.location = 'location';
        fixture.detectChanges();
        var TextName = fixture.elementRef.nativeElement.querySelector('.label-suplier');
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.save'));
        btn.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(TextName.innerHTML.trim()).toBe("Supplier is required !");
    });
    it("Label type should be show error required .", function () {
        var component = fixture.componentInstance;
        component.values.supplier = 'suplier';
        component.values.location = '';
        fixture.detectChanges();
        var TextName = fixture.elementRef.nativeElement.querySelector('.label-location');
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.save'));
        btn.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(TextName.innerHTML.trim()).toBe("Location is required !");
    });
});
//# sourceMappingURL=formProvider.component.spec.js.map