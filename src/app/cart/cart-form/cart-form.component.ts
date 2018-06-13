import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../../model/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

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

  @Input() user: User;

  constructor(private userService: UserService, private router: Router) { }

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
    this.userService.clearCart(this.user.id).subscribe(() => {
      this.router.navigate(['/success']);
    })
  }

}
