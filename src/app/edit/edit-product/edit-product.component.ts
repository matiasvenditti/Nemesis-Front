import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  productId: number;
  categories: string[] = ['Shirts', 'Pants', 'Shorts', 'Shoes', 'Accesories', 'Other'];
  product: Product;
  
  name: string;
  category: string;
  stock: number;
  price: number;

  constructor(private route: ActivatedRoute, private productService: ProductService, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = params.id;
      this.productService.getProduct(params.id).subscribe((res: Product) => {
        this.name = res.name;
        this.category = res.category;
        this.stock = res.stock;
        this.price = res.price;
        this.loadCategory();
      })
    })
  }

  setResult(event: any){
    let result = document.querySelector('.category-result') as HTMLElement;
    result.innerHTML = event.target.innerHTML;
    result.style.setProperty('display', 'inline-block');
    this.category = event.target.innerHTML;
  }

  loadCategory(){
    let result = document.querySelector('.category-result') as HTMLElement;
    result.innerHTML = this.category;
    result.style.setProperty('display', 'inline-block');
  }

  update(){
    let result = new Product(this.productId, this.name, this.price, this.stock, this.category);
    console.log(result);
    
    this.productService.updateProduct(result).subscribe(() => this.goBack());
  }

  goBack(){
    this.location.back();
  }

}
