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
exports.requestListComponent = void 0;
var core_1 = require("@angular/core");
var validation_service_1 = require("../../../services/validation.service");
var requestListComponent = /** @class */ (function () {
    function requestListComponent() {
        this.validator = (0, core_1.inject)(validation_service_1.ValidationService);
        this.mockData = [];
        this.startDate = new Date();
        this.endDate = new Date();
        this.isShow = false;
        this.index = null;
        this.imageUrl = [];
    }
    requestListComponent.prototype.ngOnInit = function () {
        this.mockData = [{ quote: "Quote 5", name: "Rotha Somangka", date: new Date('12/23/2024'), status: "Reject" },
            { quote: "Quote 1", name: "Vichaka Somangka", date: new Date('12/23/2024'), status: "Reject" },
            { quote: "Quote 2", name: "Dariya Somangka", date: new Date('6/18/2024'), status: "Accept" },
            { quote: "Quote 3", name: "Sreaynea Somangka", date: new Date('2/22/2024'), status: "Reject" },
            { quote: "Quote 4", name: "Monika Somangka", date: new Date('9/23/2024'), status: "Accept" },];
    };
    requestListComponent.prototype.showQuote = function () {
        this.isShow = true;
    };
    requestListComponent.prototype.closeQuote = function () {
        this.isShow = false;
    };
    requestListComponent.prototype.expanded = function () {
        this.index = 111;
    };
    requestListComponent.prototype.colapsExpanded = function () {
        this.index = null;
    };
    requestListComponent.prototype.searchByDate = function () {
        this.start = this.startDate;
        this.end = this.endDate;
        console.log(this.start);
        console.log(this.end);
    };
    requestListComponent.prototype.onFileSelected = function (event) {
        var _this = this;
        for (var i = 0; i < event.target.files.length; i++) {
            var file = event.target.files[i];
            if (file) {
                this.values.images.push(file);
                this.readFile(file).then(function (url) {
                    _this.imageUrl.push(url);
                });
            }
        }
    };
    requestListComponent.prototype.readFile = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onload = function () {
                resolve(reader.result);
            };
            reader.onerror = function () {
                reject('Error reading file');
            };
            reader.readAsDataURL(file);
        });
    };
    requestListComponent.prototype.removeImg = function (index) {
        if (index != null) {
            if (this.values.images.length != 0) {
                this.values.images.splice(index, 1);
                this.imageUrl.splice(index, 1);
            }
        }
    };
    requestListComponent = __decorate([
        (0, core_1.Component)({
            selector: "request-component",
            templateUrl: '../../../templates/quotation/viewRequest/requestList/index.html'
        }),
        __metadata("design:paramtypes", [])
    ], requestListComponent);
    return requestListComponent;
}());
exports.requestListComponent = requestListComponent;
//# sourceMappingURL=requestList.component.js.map