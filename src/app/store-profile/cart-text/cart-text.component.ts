import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-cart-text',
  templateUrl: './cart-text.component.html',
  styleUrls: ['./cart-text.component.css']
})
export class CartTextComponent implements OnInit {

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
