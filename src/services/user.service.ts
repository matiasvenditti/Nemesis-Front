import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import { User } from '../model/user';

@Injectable()
export class UserService {

  url: string = 'http://localhost:8080';

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getUser(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth.getToken());

    const options = {
      headers: headers
    }

    return this.http.get<User>(this.url + `/users/${localStorage.getItem('username')}`, options);
  }

  clearCart(userId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/users/${userId}/products`, options)
  }

  deleteUser(userId: number){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.delete(`${this.url}/users/${userId}`, options)
  }

  addUserImage(image: File, userId: number){
    const data = new FormData();
    data.append('file', image);
    
    const headers = new HttpHeaders()
    .set('Authorization', `Bearer ${this.auth.getToken()}`)

    const options = {
      headers: headers
    }

    return this.http.post(`${this.url}/images/users/${userId}`, data, options);
  }

  getUserImage(userId: number){
    return this.http.get(`${this.url}/images/users/${userId}`);
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

    return this.http.put(`${this.url}/users`, body, options);
  }

}
