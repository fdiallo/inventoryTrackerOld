import Product from "./Product";


class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and is a digital download of ${this.weight}MB.`;
    }

     getPriceWithTax() {
        return this.price * (Product.taxRate + 0.1)
     }
    
    get weight(): string{
        return `${this.weight} kg`
    }
}

const ebook = new PhysicalProduct("123", "E-Book", 15, 5);
console.log(ebook.displayDetails());