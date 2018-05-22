import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { Store } from '../../model/store';
import { AuthenticationService } from '../../services/authentication.service';
import { User } from '../../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../model/product';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  store: Store = new Store('Default', 1, []);
  admin: boolean = false;
  url: string = 'http://localhost:8080';
  user: User;
  logged: boolean = false;
  products: Product[] = [new Product(1, 'Silla', 399), new Product(2, 'Mesa', 399), new Product(3, 'Remera', 399), new Product(4, 'Pantalon', 399)];
  intervals: number[] = [];
  displayedValues: Product[] = [];
  itemsPerPage = 2;
  current: number = 1;
  formVisible: boolean;

  constructor(private route: ActivatedRoute, private storeService: StoreService, private auth: AuthenticationService, private http:HttpClient) {
    this.formVisible = false;
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.logged = this.auth.isLoggedIn();
      this.storeService.getStore(params.id).subscribe((storeResponse: Store) => {
        this.store = storeResponse;
        this.divide(this.products, this.itemsPerPage, this.intervals);
        this.display();
        
        if (this.auth.isLoggedIn()){
          this.getUser().subscribe((userResponse: User) => {
            this.admin = this.storeService.isAdmin(userResponse, this.store);
          })
        }
      })
    })
  }

  logOut(){
    this.auth.logOut();
  }

  getUser(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', 'Bearer ' + this.auth.getToken());

    const options = {
      headers: headers
    }

    return this.http.get<User>(this.url + `/users/${localStorage.getItem('username')}`, options);
  }

  divide(array: any[], x: number, indexes: number[]){
    this.intervals = [];
    let result = Math.ceil(array.length/x);
    for(let i = 0; i < result; i++){
      this.intervals.push(i+1);
    }
  }

  display(){
    this.displayedValues = [];
    let from = (this.current-1)*this.itemsPerPage;
    let to = this.current*this.itemsPerPage - 1;
    for(let i = from; i <= to; i++){
      if (i < this.products.length){
        this.displayedValues.push(this.products[i]);
      }
    }
  }

  setCurrent(newCurrent: number){
    this.current = newCurrent;
    this.display();
  }

  next(){
    this.setCurrent(this.current+1);
  }

  previous(){
    this.setCurrent(this.current-1);
  }

  checkCurrent(index: number): boolean{
    return this.current == index;
  }

  checkGreater(): boolean{
    return this.current >= this.intervals.length;
  }

  checkNegative(): boolean{
    return this.current <= 1;
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

}
