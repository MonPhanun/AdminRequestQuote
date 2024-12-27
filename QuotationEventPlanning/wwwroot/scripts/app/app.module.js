"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var route_1 = require("../route/route");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var animations_1 = require("@angular/platform-browser/animations");
var app_component_1 = require("./app.component");
var layout_component_1 = require("../components/layout/layout.component");
var header_component_1 = require("../components/header/header.component");
var formProvider_component_1 = require("../components/choiceProvider/formProvider/formProvider.component");
var provider_component_1 = require("../components/choiceProvider/provider/provider.component");
var formDressing_component_1 = require("../components/dressignProvider/formDressing/formDressing.component");
var dressing_component_1 = require("../components/dressignProvider/dressing/dressing.component");
var requestList_component_1 = require("../components/viewRequest/viewRequest/requestList.component");
var viewList_component_1 = require("../components/viewRequest/viewList/viewList.component");
var response_component_1 = require("../components/viewResponse/response/response.component");
var viewResponse_component_1 = require("../components/viewResponse/viewResponse/viewResponse.component");
var filter_pipe_1 = require("../pipes/filter.pipe");
var dateRangeFilter_pipe_1 = require("../pipes/dateRangeFilter.pipe");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, core_1.NgModule)({
            declarations: [
                layout_component_1.layoutComponent,
                header_component_1.headerComponent,
                formProvider_component_1.providerComponent,
                provider_component_1.ProviderComponent,
                formDressing_component_1.FormDressingComponent,
                dressing_component_1.DressingComponent,
                requestList_component_1.requestListComponent,
                viewList_component_1.viewListComponent,
                response_component_1.ResponseComponent,
                viewResponse_component_1.ViewResponseComponent,
                app_component_1.AppComponent,
                dateRangeFilter_pipe_1.DateRangeFilterPipe,
                filter_pipe_1.FilterPipe
            ],
            imports: [
                platform_browser_1.BrowserModule,
                router_1.RouterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                route_1.AdminUiRoute,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map