import { Product } from "./product";

export class Store{
    name: string;
    id: number;
    products: Product[]
    
    constructor(name: string, id: number, products: Product[]){
        this.name = name;
        this.id = id;
        this.products = products;
    }

}