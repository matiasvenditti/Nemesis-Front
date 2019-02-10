import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Purchase } from '../../../model/purchase';
import { CartService } from '../../../services/cart.service';
import { PurchaseService } from '../../../services/purchase.service';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  displayAddressInput: boolean = false;
  name: string = '';
  dni: string = '';
  radioButtonValue: string = '';
  address: string = '';

  @Input() purchase: Purchase;

  constructor(private userService: UserService, private router: Router, private cartService: CartService, private purchaseService: PurchaseService) { }

  ngOnInit() {
  }


  setTrue(){
    this.displayAddressInput = true;
    this.radioButtonValue = "Address";
  }

  setFalse(){
    this.displayAddressInput = false;
    this.radioButtonValue = "Store";
  }

  buy(){
    this.purchaseService.generatePurchase(this.purchase).subscribe(() => {
      this.cartService.clearCart(this.purchase.user.id).subscribe(() => {
        this.router.navigate(['/success']);
      })
    });
  }

}
