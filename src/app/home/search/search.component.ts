import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product';
import { PaginationService } from '../../../services/pagination.service';
import { StoreProfileComponent } from '../../store-profile/store-profile.component';
import { StoreService } from '../../../services/store.service';
import { Store } from '../../../model/store';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchValue: string;
  url: string = 'http://localhost:8080';
  @Input() storeId: number;
  @Input() products: Product[];
  @Output() userSearched = new EventEmitter();

  constructor(private storeService: StoreService) {}

  ngOnInit() {
  }


}
