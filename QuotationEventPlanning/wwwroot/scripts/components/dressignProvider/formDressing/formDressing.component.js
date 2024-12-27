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
exports.FormDressingComponent = void 0;
var core_1 = require("@angular/core");
var validation_service_1 = require("../../../services/validation.service");
var dressingVM_1 = require("./dressingVM");
var router_1 = require("@angular/router");
var FormDressingComponent = /** @class */ (function () {
    function FormDressingComponent() {
        this.validator = (0, core_1.inject)(validation_service_1.ValidationService);
        this.router = (0, core_1.inject)(router_1.Router);
        this.oldValue = new dressingVM_1.dressingVM();
        this.values = new dressingVM_1.dressingVM();
        this.oldItem = new dressingVM_1.Item();
        this.Item = new dressingVM_1.Item();
        this.mockItem = [];
        this.mockImage = [];
        this.errMsItem = '';
        this.errMsDFS = '';
        this.isEditItem = false;
        this.search = '';
        this.onSave = new core_1.EventEmitter();
        this.imgSeleted = '';
    }
    FormDressingComponent.prototype.ngOnInit = function () {
        this.mockItem = [
            { item: "product 1", size: "XL", color: "Yellow", image: ["https://i.pinimg.com/236x/48/f7/2c/48f72c60c75150816bd1cfd82aa9d1c0.jpg", "https://i.pinimg.com/236x/7b/43/12/7b4312df51518746d15be1e50ad1447f.jpg", "https://i.pinimg.com/236x/24/2d/b6/242db63f5d3d8a231c204dc7a0dd5ed2.jpg"] },
            { item: "product 2", size: "L", color: "Red", image: ["https://i.pinimg.com/236x/de/3a/a0/de3aa0f6fc8ed62071e7b9d607fa6749.jpg", "https://i.pinimg.com/236x/c4/36/7e/c4367e905217c4f24c04f39ea6b76a7b.jpg", "https://i.pinimg.com/236x/4e/73/a2/4e73a2873966cba446476a69fcb1855d.jpg"] },
            { item: "product 3", size: "Sm", color: "Green", image: ["https://i.pinimg.com/236x/73/d5/f4/73d5f484c75bba5a7a3614603aa7d5ed.jpg", "https://i.pinimg.com/474x/18/51/38/1851386787533da93c52077f2cf97421.jpg", "https://i.pinimg.com/236x/8f/21/49/8f2149635a21c4808fa97b078d5fc460.jpg"] }
        ];
    };
    FormDressingComponent.prototype.Save = function () {
        if (this.Validator() && this.values.isValid()) {
            this.onSave.emit(this.values);
            this.router.navigate(['/home/request']);
        }
        else {
            // this.toast.error('Invalid input !', 'Error', { closeButton: true, });
        }
    };
    FormDressingComponent.prototype.editItem = function () {
        var _this = this;
        if (this.oldItem.isValid()) {
            var value = new dressingVM_1.Item();
            value.copy(this.Item);
            this.values.item = this.values.item.map(function (e) { return e == _this.oldItem ? value : e; });
        }
        this.clear();
        this.isEditItem = false;
    };
    FormDressingComponent.prototype.getValEdit = function (value) {
        this.oldItem = value;
        var val = new dressingVM_1.Item();
        val.copy(value);
        this.Item.copy(val);
        this.isEditItem = true;
    };
    FormDressingComponent.prototype.addItem = function () {
        this.Item.image = this.imgSeleted;
        if (this.Item.isValid()) {
            var value = new dressingVM_1.Item();
            value.copy(this.Item);
            this.values.item.push(value);
            this.imgSeleted = '';
        }
        this.clear();
    };
    FormDressingComponent.prototype.clear = function () {
        this.Item.image = '';
        this.Item.item = '';
        this.Item.quantity = '';
    };
    FormDressingComponent.prototype.deleteItem = function (item) {
        if (item.isValid()) {
            this.values.item = this.values.item.filter(function (e) { return e != item; });
        }
    };
    FormDressingComponent.prototype.trigerImage = function (data) {
        var _this = this;
        this.mockItem.map(function (e) {
            if (e.color.trim() == data.target.value.trim()) {
                _this.mockImage = e.image;
            }
        });
    };
    FormDressingComponent.prototype.selectImg = function (url) {
        var oldItem = new String();
        oldItem = url;
        this.imgSeleted = oldItem.toString();
    };
    FormDressingComponent.prototype.Validator = function () {
        this.errMsDFS = this.validator.ValidateDateTimeEmty(this.values.DFS, "Date of service is required !");
        if (this.values.item.length == 0) {
            this.errMsItem = "Item is required !";
        }
        else {
            this.errMsItem = "";
        }
        return this.errMsDFS == '' &&
            this.errMsItem == '';
    };
    __decorate([
        (0, core_1.Output)("onSave"),
        __metadata("design:type", core_1.EventEmitter)
    ], FormDressingComponent.prototype, "onSave", void 0);
    FormDressingComponent = __decorate([
        (0, core_1.Component)({
            selector: "colorform-component",
            templateUrl: '../../../templates/quotation/dressingProvider/formDressing/index.html'
        }),
        __metadata("design:paramtypes", [])
    ], FormDressingComponent);
    return FormDressingComponent;
}());
exports.FormDressingComponent = FormDressingComponent;
//# sourceMappingURL=formDressing.component.js.map