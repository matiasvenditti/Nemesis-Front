import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ProfileService {

  constructor(private http: HttpClient) { }

  addStore(url: string, name: string){
    const body = {
      name: name
    }

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers
    }
    return this.http.post(url, body, options);
  }
}
