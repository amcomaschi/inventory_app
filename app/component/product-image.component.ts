/**
 * Created by ariel on 24/07/16.
 */

import { Component } from '@angular/core';

import { Product } from '../model/Product';

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
    selector: 'product-image',
    host: {class: 'ui small image'},
    inputs: ['product'],
    template: `
<img class="product-image" [src]="product.imageUrl">
`
})
class ProductImageComponent {
    product: Product;
}