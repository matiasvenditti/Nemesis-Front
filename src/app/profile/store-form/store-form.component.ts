import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ProfileComponent } from '../profile.component';
import { User } from '../../../model/user';
import { Store } from '../../../model/store';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  storeName: string;
  url: string = 'http://localhost:8080';
  @Input() user: User;
  @Input() stores;

  constructor(private profile: ProfileService, private profileComponent: ProfileComponent) { }

  ngOnInit() {
  }

  addStore(){
    this.profile.addStore(this.url + "/user/" + this.user.id + "/addStore", this.storeName).subscribe(() => {
      this.stores.push(new Store(this.storeName));
      this.profileComponent.hideForm();
    });
  }
}
