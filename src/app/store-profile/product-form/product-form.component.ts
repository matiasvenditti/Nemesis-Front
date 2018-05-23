import { Component, OnInit, Input } from '@angular/core';
import { StoreProfileComponent } from '../store-profile.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  productName: string;
  imageUrl: string;
  @Input() categories: string[];

  category: string;
  name: string;
  amount: number = 1;
  price: number;

  constructor(private storeComponent: StoreProfileComponent) { }

  ngOnInit() {
  }

  readUrl(event: any){
    if (event.target.files && event.target.files[0]){
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
    console.log('Name ', this.name);
    console.log('Stock ', this.amount);
    console.log('Price ', this.price);
    console.log('Category ', this.category);
    
  }

}
