import { Product } from "./product";

export class Store{
    name: string;
    id: number;
    description: string;
    products: Product[];
    image: string;
    
    constructor(name: string, id: number, products: Product[], description: string){
        this.name = name;
        this.id = id;
        this.products = products;
        this.description = description;
    }

}