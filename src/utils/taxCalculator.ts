import PhysicalProduct from "../models/PhysicalProduct";
import DigitalProduct from "../models/DigitalProduct";
import Product from "../models/Product";

export function calculateTax(product: Product): number {
    return product.getPriceWithTax()
}

