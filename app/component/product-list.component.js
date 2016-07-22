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
/**
 * Created by amcomaschi on 22/07/16.
 */
var core_1 = require('@angular/core');
/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
var ProducListComponent = (function () {
    function ProducListComponent() {
    }
    ProducListComponent = __decorate([
        core_1.Component({
            selector: 'product-list',
            directives: [ProductRow],
            outputs: ['onProductSelected'],
            template: "\n    \n    \n    \n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ProducListComponent);
    return ProducListComponent;
}());
exports.ProducListComponent = ProducListComponent;
//# sourceMappingURL=product-list.component.js.map