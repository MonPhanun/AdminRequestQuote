"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var dressing_component_1 = require("./dressing.component");
describe('SetupColorComponent', function () {
    var component;
    var fixture;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [dressing_component_1.DressingComponent],
            imports: [
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule,
            ],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = testing_1.TestBed.createComponent(dressing_component_1.DressingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
    it("onSave should be call ", function () {
        var component = fixture.componentInstance;
        var onSave = spyOn(component, "onSave");
        var event;
        component.onSave(event);
        fixture.detectChanges();
        expect(onSave).toHaveBeenCalled();
        expect(component.dressingData.length).toEqual(0);
    });
});
//# sourceMappingURL=dressing.component.spec.js.map