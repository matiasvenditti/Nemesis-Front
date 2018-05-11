import { Component, OnInit, Input } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-store-label',
  templateUrl: './store-label.component.html',
  styleUrls: ['./store-label.component.css']
})
export class StoreLabelComponent implements OnInit {

  @Input() name;

  constructor() { }

  ngOnInit() {
  }

  removeStore(name: string, stores: string[]){
    let index = stores.indexOf(name);
    if (index !== -1){
      stores.slice(index, 1);
    }
  }

}
