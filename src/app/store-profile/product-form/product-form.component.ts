import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { StoreProfileComponent } from '../store-profile.component';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';

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
  @Input() categories: string[];
  @Output() emitter = new EventEmitter();
  @Output() addProductEmitter = new EventEmitter();

  category: string;
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

  setResult(event: any){
    let result = document.querySelector('.category-result') as HTMLElement;
    result.innerHTML = event.target.innerHTML;
    result.style.setProperty('display', 'inline-block');
    this.category = event.target.innerHTML;
  }

  addProduct(){
    this.productService.addProduct(this.storeId, this.name, this.price, this.amount, this.category).subscribe((res: Product) => {
      this.productService.addProductImage(this.selectedFile, res.id).subscribe(() => {
        this.hide();
        this.addProductEmitter.emit();
      });
    });
  }

  hide(){
    this.emitter.emit();
  }

}
