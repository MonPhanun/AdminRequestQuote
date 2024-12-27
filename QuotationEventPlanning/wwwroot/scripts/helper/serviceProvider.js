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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServiceProvider = void 0;
var http_1 = require("@angular/common/http");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var core_1 = require("@angular/core");
var loadingComponent_1 = require("./loadingComponent");
var environment_prod_1 = require("../environments/environment.prod");
var environment_test_1 = require("../environments/environment.test");
var core_2 = require("@angular/core");
var ServiceProvider = /** @class */ (function () {
    function ServiceProvider(http) {
        this.http = http;
        this.progress = (0, core_1.inject)(loadingComponent_1.LoadingComponent);
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
            }),
            withCredentials: true
        };
    }
    ServiceProvider.prototype.getNYearFromToday = function (n) {
        var currentDate = new Date();
        return new Date("".concat(currentDate.getMonth() + 1, "-").concat(currentDate.getDay(), "-").concat(currentDate.getFullYear() - n));
    };
    ServiceProvider.prototype.getIconsForDtPicker = function () {
        return {
            time: 'ri-time-line',
            date: 'ri-calendar-line',
            up: 'ri-arrow-up-s-line',
            down: 'ri-arrow-down-s-line',
            previous: 'ri-arrow-left-s-fill',
            next: 'ri-arrow-right-s-fill',
            today: 'ri-checkbox-circle-line',
            clear: 'ri-delete-bin-line',
            close: 'ri-close-line'
        };
    };
    ServiceProvider.prototype.setHeaderToken = function (token) {
        //   let env = this.getEnvironment();
        this.httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': token,
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
            })
        };
    };
    ServiceProvider.prototype.createGrid = function (id, column, dataStore) {
        $("#gridContainer").dxDataGrid({
            dataSource: {
                store: dataStore
            },
            showBorders: true,
            remoteOperations: {
                sorting: true,
                paging: true
            },
            paging: {
                pageSize: 12
            },
            pager: {
                showPageSizeSelector: true,
                allowedPageSizes: [8, 12, 20]
            },
            columns: column
        }).dxDataGrid("instance");
    };
    ServiceProvider.prototype.isGuid = function (stringToTest) {
        if (stringToTest[0] === "{") {
            stringToTest = stringToTest.substring(1, stringToTest.length - 1);
        }
        var regexGuid = /^(\{){0,1}[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}(\}){0,1}$/gi;
        return regexGuid.test(stringToTest);
    };
    ServiceProvider.prototype.formatUrl = function (url) {
        if (this.isEnvironmentUsed) {
            var domain = this.getEnvironment();
            return "".concat(domain.api, "/").concat(url);
        }
        else {
            return "".concat(url);
        }
    };
    ServiceProvider.prototype.getData = function (url, ev) {
        var _this = this;
        this.progress.show();
        return this.http.get(this.formatUrl(url), this.httpOptions)
            .pipe((0, operators_1.catchError)(this.handleError('getData', []))).subscribe(function (x) {
            if (ev)
                ev(x);
            _this.progress.hide();
        });
    };
    ServiceProvider.prototype.showProgress = function () {
        this.progress.show();
    };
    ServiceProvider.prototype.hideProgress = function () {
        this.progress.hide();
    };
    ServiceProvider.prototype.addDays = function (date, days) {
        date.setDate(date.getDate() + days);
        return date;
    };
    ServiceProvider.prototype.formatDateAsDDMMYYYY = function (date) {
        return (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
    };
    ServiceProvider.prototype.jQuery = function (selector) {
        if (selector === void 0) { selector = null; }
        if (selector == null)
            return $;
        else
            return $(selector);
    };
    ServiceProvider.prototype.getLinq = function (data) {
        return Enumerable.from(data);
    };
    ServiceProvider.prototype.putData = function (url, data, ev) {
        var _this = this;
        this.progress.show();
        return this.http.put(this.formatUrl(url), data, this.httpOptions)
            .pipe((0, operators_1.catchError)(this.handleError('petData', []))).subscribe(function (x) {
            if (ev)
                ev(x);
            _this.progress.hide();
        });
    };
    ServiceProvider.prototype.postFile = function (url, fileField, obj, callBack) {
        var _this = this;
        this.showProgress();
        var formData = new FormData();
        formData.append(fileField, obj[fileField], "file.jpg");
        var propertyNames = Object.keys(obj);
        // loop through the property names and log them to the console
        for (var _i = 0, propertyNames_1 = propertyNames; _i < propertyNames_1.length; _i++) {
            var propertyName = propertyNames_1[_i];
            if (propertyName.toLocaleLowerCase() == (fileField === null || fileField === void 0 ? void 0 : fileField.toLocaleLowerCase()))
                continue;
            formData.append(propertyName, obj[propertyName]);
        }
        // set the headers for the HTTP request
        var option = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'multipart/form-data',
                'Access-Control-Allow-Origin': "*",
                'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT'
            })
        };
        //console.log(option);
        // send the HTTP POST request with the file and fields
        return this.http.post(url //this.formatUrl(url)
        , formData, option).pipe((0, operators_1.retry)(3), (0, operators_1.catchError)(this.handleError('postData', []))).subscribe(function (x) {
            _this.progress.hide();
            if (callBack)
                callBack(x);
        });
    };
    ServiceProvider.prototype.postData = function (url, data, ev) {
        var _this = this;
        this.progress.show();
        return this.http.post(this.formatUrl(url), data, this.httpOptions)
            .pipe((0, operators_1.retry)(3), (0, operators_1.catchError)(this.handleError('postData', []))).subscribe(function (x) {
            if (ev)
                ev(x);
            _this.progress.hide();
        });
    };
    ServiceProvider.prototype.delete = function (url, data, ev) {
        var _this = this;
        var options = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
            }),
            body: data,
        };
        return this.http.delete(this.formatUrl(url), options).pipe((0, operators_1.catchError)(this.handleError('DeleteData', []))).subscribe(function (x) {
            if (ev)
                ev(x);
            _this.progress.hide();
        });
    };
    ServiceProvider.prototype.log = function (message) {
        //this.messageService.add(`HeroService: ${message}`);
    };
    ServiceProvider.prototype.getEnvironment = function () {
        if ((0, core_2.isDevMode)() == true) {
            return environment_test_1.testenvironment;
        }
        else {
            return environment_prod_1.prodenvironment;
        }
    };
    ServiceProvider.prototype.isValidateEmail = function (email) {
        if (!email)
            return true;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    ServiceProvider.prototype.isPhoneNumberValidate = function (phone) {
        var regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        return regex.test(phone);
    };
    ServiceProvider.prototype.handleError = function (operation, result) {
        var _this = this;
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            _this.progress.hide();
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            _this.log("".concat(operation, " failed: ").concat(error.message));
            // Let the app keep running by returning an empty result.
            return (0, rxjs_1.of)(result);
        };
    };
    ServiceProvider = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' }),
        __param(0, (0, core_1.Inject)(http_1.HttpClient)),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ServiceProvider);
    return ServiceProvider;
}());
exports.ServiceProvider = ServiceProvider;
;
//# sourceMappingURL=serviceProvider.js.map