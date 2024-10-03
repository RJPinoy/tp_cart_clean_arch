import * as React from 'react';
import { addProductToCart } from '../services/CartService';

interface ProductComponentProps {
    setUpdate: Function
}

const ProductComponent: React.FC<ProductComponentProps> = ({ setUpdate }) => {
    const [name, setName] = React.useState<string>('');
    const [price, setPrice] = React.useState<number>(0);
    const [errorMessage, setErrorMessage] = React.useState<string>('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!name.trim()) {
            setErrorMessage('Le nom du produit ne peut pas être vide.');
            return;
        }

        if (price < 0) {
            setErrorMessage('Le prix ne peut pas être négatif.');
            return;
        }

        setErrorMessage('');
        await addProductToCart(name, price);
        setName('');
        setPrice(0);
        setUpdate((newUpdate: number) => newUpdate + 1)
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Nom du produit"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required={true}
            />
            <input
                type="number"
                placeholder="Prix"
                value={price}
                min="0"
                onChange={(e) => setPrice(Number(e.target.value))}
            />
            <button type="submit">Ajouter au panier</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </form>
    );
}
 
export default ProductComponent;