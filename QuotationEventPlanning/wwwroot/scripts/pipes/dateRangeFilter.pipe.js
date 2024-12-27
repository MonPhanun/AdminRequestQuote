"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateRangeFilterPipe = void 0;
var core_1 = require("@angular/core");
var DateRangeFilterPipe = /** @class */ (function () {
    function DateRangeFilterPipe() {
    }
    DateRangeFilterPipe.prototype.transform = function (items, startDate, endDate) {
        if (!items || !startDate || !endDate) {
            return items;
        }
        return items.filter(function (item) {
            console.log(item.date);
            var itemDate = new Date(item.date); // Assuming date property exists in item object
            return itemDate >= startDate && itemDate <= endDate;
        });
    };
    DateRangeFilterPipe = __decorate([
        (0, core_1.Pipe)({
            name: 'dateRangeFilter'
        })
    ], DateRangeFilterPipe);
    return DateRangeFilterPipe;
}());
exports.DateRangeFilterPipe = DateRangeFilterPipe;
//# sourceMappingURL=dateRangeFilter.pipe.js.map