import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-store-label',
  templateUrl: './store-label.component.html',
  styleUrls: ['./store-label.component.css']
})
export class StoreLabelComponent implements OnInit {

  @Input() name;
  @Input() stores;

  constructor() { }

  ngOnInit() {
  }

  removeStore(){
    let index = this.stores.indexOf(this.name, 0);
    console.log(index);
    
    if (index !== -1){
      this.stores.splice(index, 1);
    }
    console.log(this.stores);
    
  }

}
