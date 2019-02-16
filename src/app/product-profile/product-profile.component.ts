import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../model/product';
import { ActivatedRoute } from '@angular/router';
import { Comment } from '../../model/comment';
import { CommentService } from '../../services/comment.service';
import { UserService } from '../../services/user.service';
import { User } from '../../model/user';
import { MatDialog } from '@angular/material';
import { CartModalComponent } from '../cart-modal/cart-modal.component';
import { Location } from '@angular/common';

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

  constructor(private productService: ProductService, private activatedRoute: ActivatedRoute, private commentService: CommentService, private userService: UserService, private dialog: MatDialog, private location: Location) {
    this.getUser();
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProduct(params['id']).subscribe((res: Product) => {
        this.product = res;
        this.getComments();
      })
    });
  }

  getUser(){
    this.userService.getUser().subscribe(res => {this.user = res});
  }

  getComments(){
    this.commentService.getCommentsForProduct(this.product.id).subscribe(res => {
      this.comments = res;
    })
  }

  ngOnInit() {}

  addComment(){
    if (this.message !== ''){
      this.commentService.addComment(new Comment(this.user, this.product, this.message)).subscribe(res => {
        this.getComments();
      });
      this.clear();
    }
  }

  clear(){
    this.message = '';
  }

  openModal(){
    const title = "Esto es un titulo";
    const dialogRef = this.dialog.open(CartModalComponent, {
      width: '500px',
      data: {
        user: this.user,
        product: this.product
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  back(){
    this.location.back();
  }

}