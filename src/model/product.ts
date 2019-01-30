export class Product{

    id: number;
    name: string;
    price: number;
    stock: number;
    category: string;
    image: string;

    constructor(id: number, name: string, price: number, stock: number, category: string){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

}