import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from '../../../model/cart-item';

@Component({
  selector: 'app-cart-label',
  templateUrl: './cart-label.component.html',
  styleUrls: ['./cart-label.component.css']
})
export class CartLabelComponent implements OnInit {

  
  @Input() item: CartItem;
  @Output() emitter = new EventEmitter<CartItem>();

  constructor() { }

  ngOnInit() {
  }

  emit(){
    this.emitter.emit(this.item);
  }

}
