import { Product } from "./product";

export class Store{
    name: string;
    id: number;
    products: Product[];
    imageUrl: any = '../../../assets/default.png';
    
    constructor(name: string, id: number, products: Product[]){
        this.name = name;
        this.id = id;
        this.products = products;
    }

}