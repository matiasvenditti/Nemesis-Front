import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Store } from '../../../model/store';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '../../../model/image';

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
  @Output() emitter = new EventEmitter<Product>();
  @Output() removeProductEmitter = new EventEmitter();

  constructor(private productService: ProductService, private router: Router, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.productService.getProductImage(this.product.id).subscribe((res: Image) => {
      this.product.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + res.code);
    })
  }

  removeProduct(){
    this.productService.removeProduct(this.store.id, this.product.id).subscribe(() => {
      this.removeFromArray();
      this.removeProductEmitter.emit();
    })
  }

  addToCart(){
    this.productService.addToCart(this.user.id, this.product).subscribe(() => {
      this.user.products.push(this.product);
      this.emitter.emit(this.product);
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
