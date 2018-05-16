import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { StoreService } from '../../../services/store.service';
import { Store } from '../../../model/store';

@Component({
  selector: 'app-store-label',
  templateUrl: './store-label.component.html',
  styleUrls: ['./store-label.component.css']
})
export class StoreLabelComponent implements OnInit {

  @Input() stores;
  @Input() name;
 

  constructor(private storeService: StoreService) { }

  ngOnInit() {
  }

  removeStore(){
    let index = -1;
    for(let store of this.stores){
      if (store.name === this.name){
        index = this.stores.indexOf(store, 0);
      }
    }
    
    if (index !== -1){
      this.stores.splice(index, 1);
    }
    console.log(this.stores);
    
  }

}
