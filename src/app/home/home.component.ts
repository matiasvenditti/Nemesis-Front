import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { Store } from '../../model/store';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  resultStores: Store[];
  userSearched: boolean = false;
  searchValue: string;

  constructor(private router: Router, private auth: AuthenticationService, private storeService: StoreService) { }

  ngOnInit() {
    
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
      console.log(this.resultStores[0]);
      
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
