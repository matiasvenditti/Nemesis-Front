import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { StoreService } from '../../../services/store.service';
import { Store } from '../../../model/store';
import { User } from '../../../model/user';

@Component({
  selector: 'app-store-label',
  templateUrl: './store-label.component.html',
  styleUrls: ['./store-label.component.css']
})
export class StoreLabelComponent implements OnInit {

  @Input() stores: Store[];
  @Input() store: Store;
  @Input() user: User;
 

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  removeStore(event: Event){
    event.stopPropagation();
    this.storeService.removeStore(this.user.id, this.store.id).subscribe(() => {
      this.removeFromArray();
    })
  }

  removeFromArray(){
    let index = -1;
    for(let store of this.stores){
      if (store.name === this.store.name){
        index = this.stores.indexOf(store, 0);
      }
    }
    if (index !== -1){
      this.stores.splice(index, 1);
    }
    
  }

}
