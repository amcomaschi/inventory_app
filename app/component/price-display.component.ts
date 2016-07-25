/**
 * Created by ariel on 24/07/16.
 */

import { Component } from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
@Component({
    selector: 'price-display',
    inputs: ['price'],
    template: `
        <div class="price-display">\${{ price }}</div>
    `
})
class PriceDisplay {
    price:number;
}