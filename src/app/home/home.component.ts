import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Store } from '../../model/store';
import { StoreService } from '../../services/store.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultStores: Store[];
  userSearched: boolean = false;
  searchValue: string;
  stores: Store[] = [];
  products: Product[] = [];

  constructor(private router: Router, private auth: AuthenticationService, private storeService: StoreService) { }

  ngOnInit() {
    this.storeService.getAllStores().subscribe((res: Store[]) => {
      this.stores = res;
      for(let store of this.stores){
        if (store.products.length >= 1){
          let index = Math.floor(Math.random() * store.products.length);
          this.products.push(store.products[index]);
        }
      }
    })
  }

  @HostListener('window: scroll')
  scrollHandler(){
    var nav = document.getElementById("nav");
    var scroll = window.scrollY;
    var opacity = 2*scroll/window.innerHeight;
    nav.style.setProperty("opacity", "" + opacity);
  }

  logOut(){
    this.auth.logOut();
  }

  searchProduct(){
    this.storeService.searchStore(this.searchValue).subscribe((res: Store[]) => {
      this.searchValue = '';
      this.userSearched = true;
      this.resultStores = res;
    })
  }

  navigate(route: string){
    this.userSearched = false;
    this.router.navigate([`/${route}`]);
  }

  enterStore(id: number){ 
    this.router.navigate([`store/${id}`]);
  }
}
