import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchValue: string;
  url: string = 'http://localhost:8080';

  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  searchProduct(){
    this.searchService.postSearch(this.url + '/search', this.searchValue);
  }

}
