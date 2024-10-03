export async function addProductToCart(name: string, price: number) {
    const response = await fetch('http://localhost:3000/cart/products', {
        method: 'POST',
        mode: "cors",
        headers: { 
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        },
        body: JSON.stringify({ name, price }),
    });
    const body = await response.json();
    console.log(body);
}

export async function getCartTotal() {
    const response = await fetch('http://localhost:3000/cart/total');
    const data = await response.json();
    console.log(data);
    return data;
}