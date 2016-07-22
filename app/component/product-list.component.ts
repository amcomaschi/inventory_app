/**
 * Created by amcomaschi on 22/07/16.
 */
import { Component } from '@angular/core';

/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
@Component({
    selector: 'product-list',
    directives: [ProductRow],
    outputs: ['onProductSelected'],
    template: `
    
    
    
    `
})

export class ProducListComponent {

}