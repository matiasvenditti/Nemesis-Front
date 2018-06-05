import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Store } from '../../../model/store';
import { User } from '../../../model/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-label',
  templateUrl: './product-label.component.html',
  styleUrls: ['./product-label.component.css']
})
export class ProductLabelComponent implements OnInit {

  @Input() admin: boolean;
  @Input() product: Product;
  @Input() products: Product[];
  @Input() store: Store; 
  @Input() user: User;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() {
  }

  removeProduct(){
    this.productService.removeProduct(this.store.id, this.product.id).subscribe(() => {
      this.removeFromArray();
    })
  }

  addToCart(){
    this.productService.addToCart(this.user.id, this.product).subscribe(() => {
      this.user.products.push(this.product);
    })
  }

  removeFromArray(){
    let index = -1;
    for(let store of this.products){
      if (store.name === this.store.name){
        index = this.products.indexOf(store, 0);
      }
    }
    if (index !== -1){
      this.products.splice(index, 1);
    }
    
  }

  editProduct(){
    this.router.navigate([`edit/product/${this.product.id}`]);
  }


}
