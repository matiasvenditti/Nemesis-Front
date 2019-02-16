import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getCommentsForProduct(productId: number){
    return this.http.get<Comment[]>(`${this.baseUrl}/products/${productId}/comments`);
  }
}
