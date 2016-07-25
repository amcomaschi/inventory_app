/**
 * Created by ariel on 24/07/16.
 */

import { Component } from '@angular/core';

import { Product } from '../model/Product';
import { ProductImageComponent } from './*';

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
    selector: 'product-row',
    inputs: ['product'],
    host: {'class': 'item'},
    directives: [ProductImageComponent, ProductDepartmentComponent, PriceDisplayComponent],
    template: `
        <product-image [product]="product"></product-image>
        <div class="content">
            <div class="header">{{ product.name }}</div>
            <div class="meta">
                <div class="product-sku">SKU #{{ product.sku }}</div>
            </div>
            <div class="description">
                <product-department [product]="product"></product-department>
            </div>
        </div>
        <price-display [price]="product.price"></price-display>
    `
})

export class ProductRowComponent {
    product : Product;
}