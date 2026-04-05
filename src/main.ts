import PhysicalProduct from "./models/PhysicalProduct"
import DigitalProduct from "./models/DigitalProduct"
import { calculateTax } from "./utils/taxCalculator"

const pBook = new PhysicalProduct("123", "Eloquent Javascript", 20, 5)
const eBook = new DigitalProduct("456", "Data Structure", 20, 10)

const productList = [pBook, eBook]

for (const product of productList) {
    console.log(product.displayDetails())
    console.log("Total Price: " + product.getPriceWithTax())
    console.log("-------------------------------------")
}