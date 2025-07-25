/**
 * Created by amcomaschi on 22/07/16.
 */
import { Component } from '@angular/core'

import { Product } from '../model/Product';
import { ProducListComponent } from './product-list.component';

@Component({
    selector: 'inventory-app',
    directives: [ProducListComponent],
    template: `
        <div> 
            <product-list 
                          [producList]="products"
                          (onProductSelected)="productWasSelected($event)">            
            </product-list>
        </div>
    `
})

export class AppComponent{

    products: Product[];

    constructor(){
        this.products = [
            new Product(
            'MYSHOES', 'Black Running Shoes',
            '/resources/images/products/black-shoes.jpg',
            ['Men', 'Shoes', 'Running Shoes'],
            109.99),
            new Product(
                'NEATOJACKET', 'Blue Jacket',
                '/resources/images/products/blue-jacket.jpg',
                ['Women', 'Apparel', 'Jackets & Vests'],
                238.99),
            new Product(
                'NICEHAT', 'A Nice Black Hat',
                '/resources/images/products/black-hat.jpg',
                ['Men', 'Accessories', 'Hats'],
                29.99)];
    }

    productWasSelected(product: Product): void {
        console.log('Product clicked: ', product);
    }
}
