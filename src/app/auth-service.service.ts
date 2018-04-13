import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthServiceService {

  url: string = 'localhost/8080/login';

  constructor(private http: HttpClient) { }

  postLogIn(){
    this.http.post(this.url, {})
  }

}
