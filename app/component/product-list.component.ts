/**
 * Created by amcomaschi on 22/07/16.
 */
import { Component, EventEmitter } from '@angular/core';

import { Product } from '../model/Product';
import { ProductRowComponent } from './product-row.component';

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
    selector: 'product-list',
    directives: [ProductRowComponent],
    outputs: ['onProductSelected'],
    inputs: ['productList'],
    template: `
        <div class="ui items">
            <product-row
                *ngFor="let p of productList"
                [product]="p"
                (click)='clicked(p)'
                [class.selected]="isSelected(p)">
            </product-row>
        </div>
    `
})

export class ProducListComponent {


    /**
     * @input productList - the Product[] passed to us
     */
    productList: Product[];
    /**
     * @ouput onProductSelected - outputs the current
     *
     Product whenever a new Product is selected
     */
    onProductSelected: EventEmitter<Product>;
    /**
     * @property currentProduct - local state containing
     *
     the currently selected `Product`
     */
    currentProduct: Product;

    constructor() {
        this.onProductSelected = new EventEmitter();
    }

    clicked(product: Product): void {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    }

    isSelected(product: Product): boolean {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    }
}