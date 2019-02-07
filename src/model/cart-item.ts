import { User } from './user';
import { Product } from './product';

export class CartItem{

    user: User;
    product: Product;
    quantity: number;
    id: number;

    constructor(user: User, product: Product, quantity: number){
        this.user = user;
        this.product = product;
        this.quantity = quantity;
    }

}