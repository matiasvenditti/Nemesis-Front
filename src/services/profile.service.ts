import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class ProfileService {

  

  constructor(private http: HttpClient, private login: AuthenticationService) { }

  addStore(name: string, url: string){
    const body = {
      name: name
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers
    }
    this.http.post(url, body, options)
  }
}
