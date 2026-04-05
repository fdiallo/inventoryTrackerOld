import PhysicalProduct from "../models/PhysicalProduct";
import DigitalProduct from "../models/DigitalProduct";
import Product from "../models/Product";


function calculateTax(product: Product) {
    return product.getPriceWithTax()
}

const pBook = new PhysicalProduct("123", "Eloquent Javascript", 20, 5)
const eBook = new DigitalProduct("456", "Data Structure", 20, 20)

console.log(pBook.getPriceWithTax())
console.log(eBook.getPriceWithTax())
