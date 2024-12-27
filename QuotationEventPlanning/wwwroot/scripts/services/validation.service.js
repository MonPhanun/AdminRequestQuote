"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationService = void 0;
var core_1 = require("@angular/core");
var ValidationService = /** @class */ (function () {
    function ValidationService() {
        this.isAlphabetic = /^[A-Za-z ]+$/; // string only
        this.isSpecialCharacters = /^[^A-Za-z0-9]+$/; // special charator
        this.isNumeric = /^[0-9]+$/; // number only
        this.isAlphanumeric = /^[A-Za-z0-9 ]+$/; //  string and number only
        this.isEmail = '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}';
    }
    // string only
    ValidationService.prototype.stringValidator = function (str) {
        return str.match(this.isAlphabetic);
    };
    // string only
    ValidationService.prototype.emailValidator = function (str) {
        return str.match(this.isEmail);
    };
    // special charator
    ValidationService.prototype.specialCaratorValidator = function (str) {
        return str.match(this.isSpecialCharacters);
    };
    // number only
    ValidationService.prototype.numberValidator = function (str) {
        return str.match(this.isNumeric);
    };
    //  string and number only
    ValidationService.prototype.numberAndStringValidator = function (str) {
        return str.match(this.isAlphanumeric);
    };
    // string and charator
    ValidationService.prototype.ValidateString = function (value, msEmty, msInvalid) {
        if (value == '') {
            return msEmty;
        }
        else {
            if (!this.stringValidator(value)) {
                return msInvalid;
            }
            else {
                return '';
            }
        }
    };
    ValidationService.prototype.ValidateStringNumber = function (value, msEmty, msInvalid) {
        if (value == '') {
            return msEmty;
        }
        else {
            if (!this.numberAndStringValidator(value)) {
                return msInvalid;
            }
            else {
                return '';
            }
        }
    };
    ValidationService.prototype.ValidateStringNumberLength = function (value, length, msEmty, msInvalid, mslength) {
        if (value == '') {
            return msEmty;
        }
        else {
            if (!this.numberAndStringValidator(value)) {
                return msInvalid;
            }
            else {
                if (value.length > length) {
                    return mslength;
                }
                else {
                    return '';
                }
            }
        }
    };
    // string and charator and length
    ValidationService.prototype.ValidateStringLength = function (value, length, msEmty, msInvalid, mslength) {
        if (value == '') {
            return msEmty;
        }
        else {
            if (!this.stringValidator(value)) {
                return msInvalid;
            }
            else {
                if (value.length > length) {
                    return mslength;
                }
                else {
                    return '';
                }
            }
        }
    };
    // validate Date and Time
    ValidationService.prototype.ValidateDateTimeEmty = function (value, message) {
        if (value == undefined) {
            return message;
        }
        else {
            return '';
        }
    };
    // CompeirDate
    ValidationService.prototype.ValidateCompeir = function (Start, End, msage) {
        if (Start > End) {
            return msage;
        }
        else {
            return '';
        }
    };
    ValidationService.prototype.ValidateNotEqualCompeir = function (Start, End, msage) {
        if (Start >= End) {
            return msage;
        }
        else {
            return '';
        }
    };
    ValidationService.prototype.ValidateNumber = function (value, msEmty, msInvalid) {
        if (isNaN(Number(value))) {
            return msEmty;
        }
        if (value == undefined) {
            return msInvalid;
        }
        if (value < 0) {
            return msInvalid;
        }
        if (!this.numberValidator(value.toString())) {
            return msInvalid;
        }
        else {
            return '';
        }
    };
    ValidationService.prototype.ValidatePhone = function (value, length, mesEmty, msInvalid) {
        if (value == '') {
            return mesEmty;
        }
        if (!this.numberValidator(value)) {
            return msInvalid;
        }
        if (value.length > length) {
            return msInvalid;
        }
        else {
            return '';
        }
    };
    ValidationService.prototype.ValidateEmail = function (value, length, mesEmty, msInvalid) {
        if (value == '') {
            return mesEmty;
        }
        if (!this.emailValidator(value)) {
            return msInvalid;
        }
        if (value.length > length) {
            return msInvalid;
        }
        else {
            return '';
        }
    };
    ValidationService = __decorate([
        (0, core_1.Injectable)({ providedIn: 'root' })
    ], ValidationService);
    return ValidationService;
}());
exports.ValidationService = ValidationService;
//# sourceMappingURL=validation.service.js.map