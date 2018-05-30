import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Store } from '../../../model/store';
import { User } from '../../../model/user';

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

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  removeProduct(){
    this.productService.removeProduct(this.store.id, this.product.id).subscribe(() => {
      this.removeFromArray();
    })
  }

  addToCart(){
    console.log('User ', this.user);
    console.log('Product ', this.product);

    
    this.productService.addToCart(this.user.id, this.product).subscribe(() => {
      console.log(this.user.products);
      console.log(this.user);
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


}
