import { Product } from "../Entities/Product";

export interface Storable {
    addProduct(product: Product): void;
    getProducts(): Product[];
    getTotalPrice(): number;
    deleteProduct(id: number): boolean;
}