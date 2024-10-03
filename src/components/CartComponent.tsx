import * as React from 'react';
import { getCartTotal } from '../services/CartService';

interface CartComponentProps {
    update: number;
}

type ProductsType = {
    id: number;
    name: string;
    price: number;
}

const CartComponent: React.FC<CartComponentProps> = ({ update }) => {
    const [total, setTotal] = React.useState<number>(0);
    const [products, setProducts] = React.useState<ProductsType[]>([]);

    React.useEffect(() => {
        async function fetchTotal() {
            const totalPrice = await getCartTotal();
            setTotal(totalPrice.total);
            setProducts(totalPrice.products)
        }
        fetchTotal();
    }, [update]);

    const handleDelete = (id: number) => {
        console.log(id)
    }

    const showProducts = (products: ProductsType[]) => {
        return products.map((product: ProductsType) => {
            return <li key={ product.id } className='li-product'>{product.name} : {product.price} € <i className="fa fa-trash" aria-hidden="true" onClick={ () => handleDelete(product.id) }></i></li>
        })
    }

    return (
        <>
            <h2>Votre panier :</h2>
            <ul>
                {showProducts(products)}
            </ul>
            <div>Total du panier: {total} €</div>
        </>
    );
}
 
export default CartComponent;