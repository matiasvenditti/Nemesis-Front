import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { AuthenticationService } from './authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Purchase } from '../model/purchase';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  generatePurchase(purchase: Purchase){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth.getToken());

    return this.http.post(`${environment.baseUrl}/purchases`, purchase, { headers });
  }
}
