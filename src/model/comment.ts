import { User } from './user';
import { Product } from './product';

export class Comment {
    id: number;
    
    constructor(public user: User, public product: Product, public comment: string){}
}