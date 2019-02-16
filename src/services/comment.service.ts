import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Comment } from '../model/comment';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient, private auth: AuthenticationService) { }

  getCommentsForProduct(productId: number){
    return this.http.get<Comment[]>(`${this.baseUrl}/products/${productId}/comments`);
  }

  addComment(comment: Comment){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${this.auth.getToken()}`);

    return this.http.post(`${this.baseUrl}/comments`, comment, {headers});
  }
}
