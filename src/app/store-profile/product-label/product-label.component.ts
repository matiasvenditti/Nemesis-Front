import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Store } from '../../../model/store';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CartModalComponent } from '../../cart-modal/cart-modal.component';
import { SnackbarService } from '../../../services/snackbar.service';
import { AuthenticationService } from '../../../services/authentication.service';

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
  isLoggedIn: boolean;

  constructor(private productService: ProductService, private router: Router, private dialog: MatDialog, private snackbar: SnackbarService, private auth: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.auth.isLoggedIn();
    this.productService.getProduct(this.product.id).subscribe((resProduct: Product) => {
      this.product = resProduct;
    });
  }

  removeProduct(){
    this.productService.removeProduct(this.product.id).subscribe(() => {
      this.snackbar.openSnackBar(`${this.product.name} Was Deleted Successfully`);
      this.removeFromArray();
      this.removeProductEmitter.emit();
    })
  }

  addToCart(){
    this.productService.addToCart(this.user.id, this.product).subscribe(() => {
      this.snackbar.openSnackBar('Product Successfully Added To Cart!');
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

  openModal(){
    const title = "Esto es un titulo";
    const dialogRef = this.dialog.open(CartModalComponent, {
      width: '500px',
      data: {
        user: this.user,
        product: this.product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.snackbar.openSnackBar(`${this.product.name} Successfully Added To Cart!`);
    });
  }

  visitProduct(){
    this.router.navigate([`product/${this.product.id}`]);
  }


}
