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
  imageUrl: string;
  @Input() user: User;
  @Input() stores: Store[];
  
  

  constructor(private profile: ProfileService, private profileComponent: ProfileComponent, private storeService: StoreService) { }

  ngOnInit() {
  }

  addStore(){
    this.storeService.addStore(this.user.id, this.storeName).subscribe((res: Store) => {
      this.stores.push(res);
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
