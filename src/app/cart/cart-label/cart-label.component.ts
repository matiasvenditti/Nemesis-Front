import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-cart-label',
  templateUrl: './cart-label.component.html',
  styleUrls: ['./cart-label.component.css']
})
export class CartLabelComponent implements OnInit {

  
  @Input() product: Product;
  @Output() emitter = new EventEmitter<Product>();

  constructor() { }

  ngOnInit() {
  }

  emit(){
    this.emitter.emit(this.product);
  }

}
