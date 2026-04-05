import Product from "./Product";

export default class PhysicalProduct extends Product {
     private _weight: number = 0
    
    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this._weight = weight;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price}`;
    }

    getPriceWithTax() {
        return this.price * (Product.taxRate + 0.1)
     }
    
    get weight(): string{
        return `${this._weight} kg`
    }
}

const ebook = new PhysicalProduct("123", "E-Book", 15, 5);
console.log(ebook.displayDetails());