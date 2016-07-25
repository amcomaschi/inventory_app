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
var Product_1 = require('../model/Product');
var product_list_component_1 = require('./product-list.component');
var AppComponent = (function () {
    function AppComponent() {
        this.products = [
            new Product_1.Product('MYSHOES', 'Black Hat', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
            new Product_1.Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new Product_1.Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)];
    }
    AppComponent.prototype.productWasSelected = function (product) {
        console.log('Product clicked: ', product);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'inventory-app',
            directives: [product_list_component_1.ProducListComponent],
            template: "\n        <div> \n            <product-list \n                          [productList]=\"products\"\n                          (onProductSelected)=\"productWasSelected($event)\">            \n            </product-list>\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map