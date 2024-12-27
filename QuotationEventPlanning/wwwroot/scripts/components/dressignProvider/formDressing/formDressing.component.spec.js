"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var ngx_toastr_1 = require("ngx-toastr");
var formDressing_component_1 = require("./formDressing.component");
describe('FormSizeComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [formDressing_component_1.FormDressingComponent],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
                ngx_toastr_1.ToastrModule.forRoot(),
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(formDressing_component_1.FormDressingComponent);
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
    it("add Item should be call", function () {
        var component = fixture.componentInstance;
        fixture.detectChanges();
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.additem'));
        var add = spyOn(component, "addItem");
        btn.triggerEventHandler('click', {});
        expect(add).toHaveBeenCalled();
    });
    it("Value should be valid", function () {
        var component = fixture.componentInstance;
        component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" };
        component.values.item = [item];
        fixture.detectChanges();
        expect(component.values.isValid()).toBeTrue();
        expect(component.Validator()).toBeTrue();
    });
    it("Value should be invalid", function () {
        var component = fixture.componentInstance;
        //component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" };
        component.values.item = [item];
        fixture.detectChanges();
        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    });
    it("Value should be invalid", function () {
        var component = fixture.componentInstance;
        component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" };
        component.values.item = [];
        fixture.detectChanges();
        expect(component.values.isValid()).toBeFalse();
        expect(component.Validator()).toBeFalse();
    });
    it("Label type should be show error emty .", function () {
        var component = fixture.componentInstance;
        // component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" };
        component.values.item = [item];
        var TextDate = fixture.elementRef.nativeElement.querySelector('.label-date');
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.save'));
        btn.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(TextDate.innerHTML.trim()).toBe("Date of service is required !");
    });
    it("Label type should be show error emty .", function () {
        var component = fixture.componentInstance;
        component.values.DFS = new Date("12-12-2024");
        var item = { item: "item", image: "image", quantity: "123" };
        component.values.item = [];
        var TextDate = fixture.elementRef.nativeElement.querySelector('.label-item');
        var btn = fixture.debugElement.query(platform_browser_1.By.css('.save'));
        btn.triggerEventHandler("click", {});
        fixture.detectChanges();
        expect(TextDate.innerHTML.trim()).toBe("Item is required !");
    });
});
//# sourceMappingURL=formDressing.component.spec.js.map