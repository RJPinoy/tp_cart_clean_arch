import { Request, Response } from 'express';
import { Product } from "../Entities/Product";
import { Storable } from "../Interfaces/Storable";
import { AddProductToCart } from "../UseCases/AddProductToCart";
import { GetCartTotal } from "../UseCases/GetCartTotal";

export class CartController {
    constructor(private storage: Storable) {}

    addProduct(req: Request, res: Response): void {
        const { name, price } = req.body;
        const product = new Product(-1, name, price);
        const addProductUseCase = new AddProductToCart(this.storage);
        addProductUseCase.execute(product);
        res.status(200).json({
            productId: product.id,
            message: 'Product added to cart'
        });
    }

    getTotal(req: Request, res: Response): void {
        const getTotalUseCase = new GetCartTotal(this.storage);
        const products = getTotalUseCase.executeProducts();
        const total = getTotalUseCase.execute();
        res.status(200).json({ products, total });
    }

    deleteProduct(req: Request, res: Response): void {
        const { id } = req.params;
        const success = this.storage.deleteProduct(Number(id));
        
        // if (success) {
        //     return res.status(200).json({ message: 'Product deleted successfully' });
        // } else {
        //     return res.status(404).json({ message: 'Product not found' });
        // }
    }
}