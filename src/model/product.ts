import { Category } from './category';
import { Comment } from './comment';

export class Product{

    id: number;
    name: string;
    price: number;
    stock: number;
    category: Category;
    image: string;

    constructor(id: number, name: string, price: number, stock: number, category: Category){
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }

}