import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SearchService {

  constructor(private http: HttpClient) { }

  postSearch(url: string, searchParam: string){
    const body = {
      search: searchParam
    }
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const options = {
      headers: headers,
    }
    this.http.post(url, body, options);
  }

}
