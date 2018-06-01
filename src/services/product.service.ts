import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Product } from '../model/product';

@Injectable()
export class ProductService {

  url: string = 'http://localhost:8080';

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
    
    return this.http.post<Product>(`${this.url}/stores/${storeId}/products`, body, options);
  }

  searchProduct(storeId: number, productKey: string){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.get<Product[]>(`${this.url}/stores/${storeId}/search/${productKey}`);
  }

  searchByCategory(storeId: number, category: string){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.get<Product[]>(`${this.url}/stores/${storeId}/products/${category}`)
  }

  removeProduct(storeId: number, productId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)
    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/stores/${storeId}/products/${productId}`, options);
  }

  addToCart(userId: number, product: Product){
    
    const body = {
      name: product.name,
      price: product.price,
      stock: product.stock,
      category: product.category
    }

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }
    return this.http.post(`${this.url}/users/${userId}/products`, body, options);
  }

  removeFromCart(userId: number, productId: number){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/users/${userId}/products/${productId}`, options)
  }
}
