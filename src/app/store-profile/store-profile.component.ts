import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { Store } from '../../model/store';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../model/product';
import { ProductService } from '../../services/product.service';
import { PaginationService } from '../../services/pagination.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  categories: string[] = ['Shirts', 'Pants', 'Shorts', 'Shoes', 'Accesories', 'Other'];
  store: Store = new Store('Default', 1, []);
  admin: boolean = false;
  user: User;
  logged: boolean = false;
  products: Product[] = [new Product(1, 'Silla', 399, 1), new Product(2, 'Mesa', 399, 1), new Product(3, 'Remera', 399, 1), new Product(4, 'Pantalon', 399, 1)];
  intervals: number[] = [];
  displayedValues: Product[] = [];
  itemsPerPage = 3;
  current: number = 1;
  formVisible: boolean = false;
  searchValue: string;

  constructor(private route: ActivatedRoute, private storeService: StoreService, private auth: AuthenticationService, private pagination: PaginationService, private userService: UserService, private productService: ProductService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.logged = this.auth.isLoggedIn();
      this.storeService.getStore(params.id).subscribe((storeResponse: Store) => {
        this.store = storeResponse;
        this.arrangeData();
        // this.intervals = this.pagination.divide(this.products, this.itemsPerPage, this.intervals);
        // this.displayedValues = this.pagination.display(this.displayedValues, this.products, this.current, this.itemsPerPage);
        if (this.auth.isLoggedIn()){
          this.userService.getUser().subscribe((userResponse: User) => {
            this.admin = this.storeService.isAdmin(userResponse, this.store);
          })
        }
      })
    })
  }

  previous(){
    this.setCurrent(this.current-1);
  }

  next(){
    this.setCurrent(this.current+1);
  }

  setCurrent(index: number){
    this.current = index;
    this.displayedValues = this.pagination.display(this.displayedValues, this.products, this.current, this.itemsPerPage);
  }

  checkNegative(): boolean{
    return this.pagination.checkNegative(this.current);
  }

  checkGreater(): boolean{
    return this.pagination.checkGreater(this.current, this.intervals);
  }

  checkCurrent(index: number): boolean{
    return this.pagination.checkCurrent(index, this.current);
  }

  toggleForm(){
    this.formVisible = !this.formVisible;
  }

  showForm(){
    document.querySelector('.container').classList.add('blur');
    this.formVisible = true;
  }

  hideForm(){
    document.querySelector('.container').classList.remove('blur');
    this.formVisible = false;
  }

  searchProduct(){
    this.productService.searchProduct(this.store.id, this.searchValue).subscribe((res: Product[]) => {
      this.products = [];
      for (let product of res){
        this.products.push(product);
      }
      this.arrangeData();
    })
  }

  searchByCategory(category: string){
    this.productService.searchByCategory(this.store.id, category).subscribe((res: Product[]) => {
      this.products = [];
      for (let product of res){
        this.products.push(product);
      }
      this.arrangeData();
    })
  }

  arrangeData(){
    this.intervals = this.pagination.divide(this.products, this.itemsPerPage, this.intervals);
    this.displayedValues = this.pagination.display(this.displayedValues, this.products, this.current, this.itemsPerPage);
    this.setCurrent(this.intervals[0]);
  }

}
