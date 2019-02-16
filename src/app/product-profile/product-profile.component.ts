import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../model/comment';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent implements OnInit {

  product: Product;
  comments: Comment[];
  message: string;
  user: User;

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private commentService: CommentService, private userService: UserService) {
    this.getComments();
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProduct(params['id']).subscribe((res: Product) => {
        this.product = res;
        this.commentService.getCommentsForProduct(this.product.id).subscribe((comments: Comment[]) => {
          console.log(comments);
          this.comments = comments;
        });
      })
    });
  }

  getComments(){
    this.userService.getUser().subscribe(res => {this.user = res});
  }

  ngOnInit() {}

  addComment(){
    if (this.message !== ''){
      this.commentService.addComment(new Comment(this.user, this.product, this.message)).subscribe();
      this.message = '';
      this.getComments();
    }
  }

}
