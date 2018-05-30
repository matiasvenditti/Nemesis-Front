import { Store } from "./store";
import { Product } from "./product";

export class User{

    name: string;
    surname: string;
    email: string;
    password: string;
    username: string;
    stores: Store[];
    id: number;
    products: Product[];


    constructor(id: number, name: string, surname: string, username: string, email: string, password: string, stores: Store[], products: Product[]){
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.email = email;
        this.password = password;
        this.stores = stores;
        this.products = products;
    }

}