import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Product } from '../../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: User = new User(0, 'Default', 'Default', 'Default', 'Default', 'Default', [], []);
  total: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((res: User) => {
      this.user = res;
      this.total = this.getTotal(this.user.products);
    })
  }

  getTotal(array: Product[]){
    let total = 0;
    for(let product of array){
      total += product.price;
    }
    return total;
  }

  removeFromCart(event: any){
    let product: Product = event as Product;
    let index = this.user.products.indexOf(product, 0);
    if (index > -1){
      this.user.products.splice(index, 1);
    }
    this.total = this.getTotal(this.user.products);
  }

}
