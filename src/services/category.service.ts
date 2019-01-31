import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../model/category';
import { environment } from '../environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class CategoryService {

  url: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCategories(storeId: number){
    return this.http.get(`${this.url}/categories/stores/${storeId}`);
  }

}
