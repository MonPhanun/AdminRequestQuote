"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = exports.Item = exports.dressingVM = void 0;
var dressingVM = /** @class */ (function () {
    function dressingVM() {
        this.DFS = null;
        this.item = [];
    }
    dressingVM.prototype.isValid = function () {
        return this.DFS != null &&
            this.item.length != 0;
    };
    dressingVM.prototype.copy = function (value) {
        this.DFS = value.DFS;
        this.item = value.item;
    };
    return dressingVM;
}());
exports.dressingVM = dressingVM;
var Item = /** @class */ (function () {
    function Item() {
        this.item = "";
        this.image = "";
        this.size = "";
        this.color = "";
        this.quantity = "";
    }
    Item.prototype.isValid = function () {
        return this.item != "" &&
            this.color != "" &&
            this.size != "" &&
            this.quantity != "";
    };
    Item.prototype.copy = function (value) {
        this.item = value.item;
        this.size = value.size;
        this.color = value.color;
        this.image = value.image;
        this.quantity = value.quantity;
    };
    return Item;
}());
exports.Item = Item;
var Image = /** @class */ (function () {
    function Image() {
        this.item = "";
        this.size = "";
        this.color = "";
        this.image = [];
    }
    return Image;
}());
exports.Image = Image;
//# sourceMappingURL=dressingVM.js.map