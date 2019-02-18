import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { Purchase } from '../../../model/purchase';
import { CartService } from '../../../services/cart.service';
import { PurchaseService } from '../../../services/purchase.service';
import { PaymentData } from '../../../model/payment-data';

@Component({
  selector: 'app-cart-form',
  templateUrl: './cart-form.component.html',
  styleUrls: ['./cart-form.component.css']
})
export class CartFormComponent implements OnInit {

  displayAddressInput: boolean = false;
  name: string = '';
  dni: number;
  radioButtonValue: string = '';
  address: string = '';
  defaultValue: string = 'Se retira por el mismo local.';

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
    let address = (this.radioButtonValue) ? this.address : this.defaultValue;
    const data: PaymentData = new PaymentData(this.name, this.dni, address);
    this.cartService.checkout(this.purchase.user.id, data).subscribe(() => {
      this.router.navigate(['/success']);
    });
  }

}
