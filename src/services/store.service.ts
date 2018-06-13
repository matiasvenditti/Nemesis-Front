import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { Store } from '../model/store';
import { User } from '../model/user';
import { Product } from '../model/product';
import { Image } from '../model/image';


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

  getStoreImage(storeId: number){
    return this.http.get<Image>(`${this.url}/stores/image/${storeId}`);
  }

  addStoreImage(image: File, storeId: number){
    let data = new FormData()
    data.append('file', image);

    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }
    
    return this.http.post(`${this.url}/stores/images/${storeId}`, data, options)
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

  isAdmin(user: User, store: Store){
    for (let arrayStore of user.stores){
      if (arrayStore.name === store.name){
        return true;
      }
    }
    return false;
  }

  searchStore(key: string){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.get<Store[]>(`${this.url}/search/stores/${key}`, options);
  }

  getAllProductsFromStore(storeId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.get<Product[]>(`${this.url}/stores/${storeId}/products`)
  }

  getAllStores(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')

    const options = {
      headers: headers
    }

    return this.http.get<Store[]>(`${this.url}/stores`);
  }

}
