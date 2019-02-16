import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../model/comment';
import { CommentService } from '../comment.service';

@Component({
  selector: 'app-product-profile',
  templateUrl: './product-profile.component.html',
  styleUrls: ['./product-profile.component.css']
})
export class ProductProfileComponent implements OnInit {

  product: Product;
  comments: Comment[];

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private commentService: CommentService) {
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

  ngOnInit() {}

}
