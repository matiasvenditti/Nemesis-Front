import { User } from './user';
import { CartItem } from './cart-item';

export class Purchase{
    user: User;
    items: CartItem[];
    amount: number;
    id: number;
    date: Date;

    constructor(user: User, items: CartItem[], amount: number){
        this.user = user;
        this.items = items;
        this.amount = amount;
    }
}