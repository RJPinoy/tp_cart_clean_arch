import { Product } from "../Entities/Product";
import { Storable } from "../Interfaces/Storable";

export class GetCartTotal {
    constructor(private storage: Storable) {}

    executeProducts(): Product[] {
        return this.storage.getProducts();
    }

    execute(): number {
        return this.storage.getTotalPrice();
    }
}