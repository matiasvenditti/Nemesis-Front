import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ProfileComponent } from '../profile.component';
import { User } from '../../../model/user';
import { Store } from '../../../model/store';
import { StoreService } from '../../../services/store.service';

@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  storeName: string;
  url: string = 'http://localhost:8080';
  imageUrl: string;
  @Input() user: User;
  @Input() stores;

  constructor(private profile: ProfileService, private profileComponent: ProfileComponent, private storeService: StoreService) { }

  ngOnInit() {
  }

  addStore(){
    this.storeService.addStore(this.user.id, this.storeName).subscribe(() => {
      this.stores.push(new Store(name));
      this.profileComponent.hideForm();
    })
  }

  readUrl(event: any){
    if (event.target.files && event.target.files[0]){
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
