import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';

@Component({
  selector: 'app-product-label',
  templateUrl: './product-label.component.html',
  styleUrls: ['./product-label.component.css']
})
export class ProductLabelComponent implements OnInit {

  @Input() admin: boolean;

  @Input() product: Product;

  constructor() { }

  ngOnInit() {
  }

}
