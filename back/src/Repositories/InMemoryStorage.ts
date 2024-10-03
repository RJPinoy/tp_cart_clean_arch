import { Product } from "../Entities/Product";
import { Storable } from "../Interfaces/Storable";

export class InMemoryStorage implements Storable {
    private products: Product[] = [];
    private nextId: number = 0;

    addProduct(product: Product): void {
        product.id = this.nextId++;
        this.products.push(product);
    }

    getProducts(): Product[] {
        return this.products;
    }

    getTotalPrice(): number {
        return this.products.reduce((total, product) => total + product.getPrice(), 0);
    }

    deleteProduct(id: number): boolean {
        const initialLength = this.products.length;
        this.products = this.products.filter(product => product.id !== id);
        return this.products.length < initialLength;
    }
}