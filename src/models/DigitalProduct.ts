import Product from "./Product";


class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and is a digital download of ${this.fileSize}MB.`;
    }
}

const ebook = new DigitalProduct("", "E-Book", 15, 5);
console.log(ebook.displayDetails());