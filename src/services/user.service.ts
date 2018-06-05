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

  addUserImage(image: File){
    const data = new FormData();
    data.append('image', image);

    // this.http.post(``)
  }

}
