import express from 'express';
import cors from 'cors';
import { LocalStorage } from './src/Repositories/LocalStorage';
import { InMemoryStorage } from './src/Repositories/InMemoryStorage';
import { CartController } from './src/Controllers/CartController';

const app = express();
app.use(cors({
    origin: '*'
}));
app.use(express.json());

const storage = new InMemoryStorage(); // Vous pouvez changer pour LocalStorage
// const storage = new LocalStorage();
const cartController = new CartController(storage);

app.post('/cart/products', (req, res) => cartController.addProduct(req, res));
app.get('/cart/total', (req, res) => cartController.getTotal(req, res));
app.delete('/cart/delete/:id', (req, res) => cartController.deleteProduct(req, res));

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});