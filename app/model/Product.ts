/**
 * Created by amcomaschi on 22/07/16.
 */

export class Product {
    constructor(
        public sku: string,
        public name: string,
        public imageUrl: string,
        public department: string[],
        public price: number) {
    }
}