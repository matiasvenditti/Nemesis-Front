import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  storeName: string;
  url: string = 'http://localhost:8080';

  @Input() stores;

  constructor(private profile: ProfileService) { }

  ngOnInit() {
  }

  addStore(){
    this.profile.addStore(this.url + '/profile/add', this.storeName);
    this.stores.push(this.storeName);
    console.log(this.stores);
    
  }
}
