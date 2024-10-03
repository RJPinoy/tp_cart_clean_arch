import { Product } from "../Entities/Product";
import { Storable } from "../Interfaces/Storable";

export class LocalStorage implements Storable {
    private storageKey = 'cart';

    addProduct(product: Product): void {
        const products = this.getProducts();
        products.push(product);
        localStorage.setItem(this.storageKey, JSON.stringify(products));
    }

    getProducts(): Product[] {
        const storedProducts = localStorage.getItem(this.storageKey);
        return storedProducts ? JSON.parse(storedProducts) : [];
    }

    getTotalPrice(): number {
        return this.getProducts().reduce((total, product) => total + product.getPrice(), 0);
    }

    deleteProduct(id: number): boolean {
        const products = this.getProducts();
        const initialLength = products.length;
        const updatedProducts = products.filter((product: Product) => product.id !== id);
        localStorage.setItem(this.storageKey, JSON.stringify(updatedProducts));
        return updatedProducts.length < initialLength; 
    }
}