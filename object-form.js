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
var core_1 = require('@angular/core');
var objects_service_1 = require('services/objects.service');
var ObjectForm = (function () {
    function ObjectForm(_objectService) {
        var _this = this;
        this._objectService = _objectService;
        this.addProperty = function (newKey, newValue) {
            console.log(newKey.value + ": " + newValue.value);
            if (!_this.object.hasOwnProperty(newKey.value)) {
                _this.object[newKey.value] = newValue.value;
                _this.arrayOfKeys = Object.keys(_this.object);
                newKey.value = null;
                newValue.value = null;
            }
            else {
                console.log("Propety '" + newKey + "' already exists.");
            }
        };
        this.print = function (x) {
            console.log(x);
        };
    }
    ObjectForm.prototype.ngAfterContentInit = function () {
        this.arrayOfKeys = Object.keys(this.object);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], ObjectForm.prototype, "object", void 0);
    ObjectForm = __decorate([
        core_1.Component({
            selector: 'object-form',
            template: "\n\t\t<button class=\"btn btn-mini\" (click)=\"print(object)\">Print</button>\n\t\t<ul>\n\t\t\t<li *ngFor=\"let key of arrayOfKeys\">{{key}}: \n\t\t\t\t<div class=\"float-right\">\n\t\t\t\t\t<input type=\"text\" [(ngModel)]=\"object[key]\"/>\n\t\t\t\t\t<i class=\"fa fa-times fa-lg red-text pointer block-icon\" aria-hidden=\"true\"></i>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li><input type=\"text\" #newKey/>:  \n\t\t\t\t<div class=\"float-right\"><input type=\"text\" style=\"margin-right: 3px;\" #newValue/><i class=\"fa fa-plus fa-lg block-icon\" (click)=\"addProperty(newKey, newValue)\"></i></div>\n\t\t\t</li>\n\t\t</ul>\n\t",
            styles: ["\n\t\tli {\n\t\t\tmargin:\t\t\t\t0;\n\t\t\theight:\t\t\t\t21px;\n\t\t}\n\t"]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof objects_service_1.ObjectService !== 'undefined' && objects_service_1.ObjectService) === 'function' && _a) || Object])
    ], ObjectForm);
    return ObjectForm;
    var _a;
}());
exports.ObjectForm = ObjectForm;
//# sourceMappingURL=object-form.js.map