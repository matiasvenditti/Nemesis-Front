import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { Product } from '../../model/product';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { CartItem } from '../../model/cart-item';
import { CartService } from '../../services/cart.service';
import { Purchase } from '../../model/purchase';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  user: User = new User(0, 'Default', 'Default', 'Default', 'Default', 'Default', [], []);
  total: number = 0;
  formVisible: boolean = false;
  cartList: CartItem[] = [];
  purchase: Purchase;

  constructor(private userService: UserService, private router: Router, private productService: ProductService, private cartService: CartService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((userRes: User) => {
      this.user = userRes;
      this.cartService.getItems(userRes.id).subscribe((cartItemRes: CartItem[]) => {
        this.cartList = cartItemRes;
        this.total = this.getTotal(this.cartList);
        this.purchase = new Purchase(this.user, this.cartList, this.total);
      });
    });
  }

  getTotal(array: CartItem[]){
    let total = 0;
    for(let item of array){
      total += item.product.price*item.quantity;
    }
    return total;
  }

  removeFromCart(event: any){
    let item: CartItem = event as CartItem;
    this.cartService.removeItem(item.id).subscribe(() => {
      let index = this.cartList.indexOf(item, 0);
      if (index > -1){
        this.cartList.splice(index, 1);
      }
      this.total = this.getTotal(this.cartList);
    })
  }

  continue(){
    let cartContainer = document.querySelector('.container') as HTMLElement;
    cartContainer.style.setProperty('display','none');
    this.formVisible = true;
    const purchase: Purchase = new Purchase(this.user, this.cartList, this.total);
  }

  home(){
    this.router.navigate(['/']);
  }

  isEmpty(){ 
    return this.cartList.length < 1;
  }

}
