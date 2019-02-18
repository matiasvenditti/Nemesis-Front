import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../environments/environment';
import { CartItem } from '../model/cart-item';
import { AuthenticationService } from './authentication.service';
import { PaymentData } from '../model/payment-data';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private url: string = environment.baseUrl;

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  addToCart(item: CartItem){

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`);

    return this.http.post(`${this.url}/items`, item, { headers });
  }

  getItems(userId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`);

    return this.http.get<CartItem[]>(`${this.url}/items/${userId}`, { headers });
  }

  removeItem(itemId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`);

    return this.http.delete(`${this.url}/items/${itemId}`, { headers });

  }

  checkout(userId: number, data: PaymentData){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`);

    return this.http.post(`${this.url}/items/${userId}/checkout`, data, { headers });
  }
}
