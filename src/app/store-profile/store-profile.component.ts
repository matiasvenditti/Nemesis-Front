import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoreService } from '../../services/store.service';
import { Store } from '../../model/store';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-store-profile',
  templateUrl: './store-profile.component.html',
  styleUrls: ['./store-profile.component.css']
})
export class StoreProfileComponent implements OnInit {

  store: Store = new Store('Default', 1);

  constructor(private route: ActivatedRoute, private storeService: StoreService, private auth: AuthenticationService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.storeService.getStore(params.id).subscribe((res: Store) => {
        this.store = res;
      })
    })
  }

  logOut(){
    this.auth.logOut();
  }

}
