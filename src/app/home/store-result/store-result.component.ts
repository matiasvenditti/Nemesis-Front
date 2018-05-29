import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../../model/store';

@Component({
  selector: 'app-store-result',
  templateUrl: './store-result.component.html',
  styleUrls: ['./store-result.component.css']
})
export class StoreResultComponent implements OnInit {

  @Input() store:Store;

  constructor() {}

  ngOnInit() {}

}
