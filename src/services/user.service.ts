import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { User } from '../model/user';
import { Image } from '../model/image';
import { environment } from '../environments/environment';
import { Purchase } from '../model/purchase';

@Injectable()
export class UserService {

  url: string = environment.userUrl;
  baseUrl: string = environment.baseUrl;


  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getUser(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth.getToken());

    const options = {
      headers: headers
    }
    return this.http.get<User>(this.url + `/${localStorage.getItem('username')}`, options);
  }

  clearCart(userId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/${userId}/products`, options)
  }

  deleteUser(userId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/${userId}`, options)
  }

  addUserImage(image: File, userId: number){
    const data = new FormData();
    data.append('file', image);
    
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.post(`${this.url}/${userId}/images`, data, options);
  }

  getUserImage(userId: number){
    return this.http.get<Image>(`${this.url}/image/${userId}`);
  }

  updateUser(user: User){
    const body = {
      id: user.id,
      name: user.name,
      surname: user.surname,
      username: user.username,
      email: user.email,
      password: user.password,
      stores: user.stores,
      products: user.products
    }

    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.put(`${this.url}`, body, options);
  }

  getHistory(userId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    return this.http.get<Purchase[]>(`${this.baseUrl}/purchases/${userId}`, {headers});
  }

}
