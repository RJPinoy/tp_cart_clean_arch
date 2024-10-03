export class Product {
    constructor (public id: number, private name: string, private price: number) {

    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPrice(): number {
        return this.price;
    }
}