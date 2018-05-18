import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Store } from '../model/store';


@Injectable()
export class StoreService {

  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getStore(id: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth.getToken());

    const options = {
      headers: headers
    }

    return this.http.get<Store>(this.url + `/stores/${id}`, options);
  }

  addStore(id: number, name: string){
    const body = {
      name: name
    }
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth.getToken());
    const options = {
      headers: headers
    }
    return this.http.post<Store>(this.url + `/users/${id}/stores`, body, options);
  }

  removeStore(userId: number, storeId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`);

    const options = {
      headers: headers
    }
    return this.http.delete(this.url + `/users/${userId}/stores/${storeId}`, options);
  }

}
