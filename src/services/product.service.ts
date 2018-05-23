import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  url: string = 'http://localhost:8080/stores';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  addProduct(storeId: number, name: string, price: number, stock: number, category: string){
    const body = {
      name: name,
      price: price,
      stock: stock,
      category: category
    }

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }
    
    return this.http.post<Product>(`${this.url}/${storeId}/products`, body, options);
  }
}
