"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminUiRoute = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var layout_component_1 = require("../components/layout/layout.component");
var provider_component_1 = require("../components/choiceProvider/provider/provider.component");
var dressing_component_1 = require("../components/dressignProvider/dressing/dressing.component");
var viewList_component_1 = require("../components/viewRequest/viewList/viewList.component");
var response_component_1 = require("../components/viewResponse/response/response.component");
var adminRoute = [
    {
        path: 'home',
        component: layout_component_1.layoutComponent,
        children: [
            {
                path: 'provider',
                component: provider_component_1.ProviderComponent
            },
            {
                path: 'dressing',
                component: dressing_component_1.DressingComponent
            },
            {
                path: 'request',
                component: viewList_component_1.viewListComponent
            },
            {
                path: 'response',
                component: response_component_1.ResponseComponent
            }
        ]
    }
];
var AdminUiRoute = /** @class */ (function () {
    function AdminUiRoute() {
    }
    AdminUiRoute = __decorate([
        (0, core_1.NgModule)({
            imports: [router_1.RouterModule.forRoot(adminRoute, { useHash: true })],
            exports: [router_1.RouterModule],
            schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
        })
    ], AdminUiRoute);
    return AdminUiRoute;
}());
exports.AdminUiRoute = AdminUiRoute;
//# sourceMappingURL=route.js.map