import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreProfileComponent } from '../store-profile.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';
import { Category } from '../../../model/category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productName: string;
  imageUrl: string;
  selectedFile: File;
  @Input() storeId: number;
  @Input() categories: Category[];
  @Output() emitter = new EventEmitter();
  @Output() addProductEmitter = new EventEmitter<Product>();

  category: Category;
  name: string;
  amount: number = 1;
  price: number;

  constructor(private productService: ProductService) { }

  ngOnInit() {
  }

  readUrl(event: any){
    if (event.target.files && event.target.files[0]){
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  setResult(category: Category){
    this.category = category;
  }

  addProduct(){
    console.log(this.category);
    this.productService.addProduct(this.storeId, this.name, this.price, this.amount, this.category).subscribe((productResponse: Product) => {
      this.productService.addProductImage(this.selectedFile, productResponse.id).subscribe((res) => {
        productResponse.image = this.imageUrl;
        this.addProductEmitter.emit(productResponse);
        this.hide();
      });
    });
  }

  hide(){
    this.emitter.emit();
  }

}
