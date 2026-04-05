export default class Product {
    public static taxRate = 0.05;

    private sku: string;
    public name: string;
    protected price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `${this.name} costs $${this.price}.`;
    }

    getPriceWithTax(): number {
        return this.price * (1 + Product.taxRate)
    }
}


