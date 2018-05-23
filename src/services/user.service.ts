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

}