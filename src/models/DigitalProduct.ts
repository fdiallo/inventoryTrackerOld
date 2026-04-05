import Product from "./Product";


class DigitalProduct extends Product {
    private _fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price} and is a digital download of ${this.fileSize}MB.`;
    }

    getPriceWithTax(): number {
        return this.price
    }

    get fileSize(): string {
        return `${this._fileSize}MB`
    }
}

const ebook = new DigitalProduct("", "E-Book", 15, 5);
console.log(ebook.displayDetails());