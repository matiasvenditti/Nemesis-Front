import { Store } from "./store";
import { User } from "./user";
import { Product } from "./product";

export class Sale {

    id: number;
    store: Store;
    user: User;
    products: Product[];
    amount: number;
    date: Date;

    constructor(id: number, store: Store, user: User, products: Product[], date: Date){
        this.id = id;
        this.store = store;
        this.user = user;
        this.products = products;
        this.amount = this.getAmounts(products);
        this.date = date;
    }

    getAmounts(products: Product[]): number {
        let result = 0;
        for (let product of products){
            result += product.price;
        }
        return result;
    }
}