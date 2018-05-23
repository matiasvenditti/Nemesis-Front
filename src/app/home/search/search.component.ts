import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';
import { PaginationService } from '../../../services/pagination.service';
import { StoreProfileComponent } from '../../store-profile/store-profile.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue: string;
  url: string = 'http://localhost:8080';
  @Input() storeId: number;
  @Input() products: Product[];

  constructor(private productService: ProductService, private pagination: PaginationService) {}

  ngOnInit() {
  }

  searchProduct(){
    this.productService.searchProduct(this.storeId, this.searchValue).subscribe((res: Product[]) => {
      this.products = [];
      for(let product of res){
        this.products.push(new Product(product.id, product.name, product.price, product.stock));
      }
      
      console.log(this.products);
    });
  }

}
