import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../model/cart-item';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.component.html',
  styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit {

  amount: number = 0;

  constructor(public dialogRef: MatDialogRef<CartModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private cartService: CartService) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addToCart(){
    this.cartService.addToCart(new CartItem(this.data.user, this.data.product, this.amount)).subscribe(res => {
      this.dialogRef.close();
    });
  }

}
