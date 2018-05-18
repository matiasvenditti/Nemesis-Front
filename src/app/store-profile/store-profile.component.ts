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

  constructor(private route: ActivatedRoute, private storeService: StoreService, private auth: AuthenticationService, private http:HttpClient) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.logged = this.auth.isLoggedIn();
      this.storeService.getStore(params.id).subscribe((storeResponse: Store) => {
        this.store = storeResponse;
        
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

}
