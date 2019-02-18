import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Product } from '../model/product';
import { Image } from '../model/image';
import { Category } from '../model/category';

@Injectable()
export class ProductService {

  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  addProduct(storeId: number, name: string, price: number, stock: number, category: Category){
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

    return this.http.get<Product[]>(`${this.url}/search/stores/${storeId}/products/${productKey}`);
  }

  searchProductHome(productKey: string){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.get<Product[]>(`${this.url}/search/products/${productKey}`);
  }

  searchByCategory(storeId: number, categoryId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.get<Product[]>(`${this.url}/stores/${storeId}/products/${categoryId}`)
  }

  removeProduct(productId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)
    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/products/${productId}`, options);
  }

  addToCart(userId: number, product: Product){
    
    const body = {
      product: product
    }

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }
    return this.http.post(`${this.url}/users/${userId}/products/${product.id}`, body, options);
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

  getProduct(productId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.get<Product>(`${this.url}/products/${productId}`, options);
  }

  updateProduct(product: Product){
    const body = {
      id: product.id,
      name: product.name,
      price: product.price,
      category: product.category,
      stock: product.stock
    }
    

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.auth.getToken()}`)
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.put(`${this.url}/products`, body, options);
  }

  getProductImage(productId: number){
    return this.http.get<Image>(`${this.url}/products/image/${productId}`);
  }

  addProductImage(image: File, productId: number){
    let data = new FormData()
    data.append('file', image);

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }
    
    return this.http.post(`${this.url}/products/${productId}/images`, data, options)
  }
}
