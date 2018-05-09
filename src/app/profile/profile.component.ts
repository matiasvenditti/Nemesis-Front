import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  url: string = 'http://localhost:8080/user/';
  id: string;
  stores: string[] = ['Starbucks', 'Apple', 'Adidas', 'Nike'];
  closed: boolean = false;
  

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.url + localStorage.getItem('username')).subscribe(value => 
      {
      console.log(value);
      this.username = this.capitalize(value['username']);
      this.id = value['id'];
      }
    );
    // console.log(this.http.get(this.url + localStorage.getItem('username')).subscribe());
    
  }

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  addStore(name: string){
    this.stores.push(name);
  }

  removeStore(name: string){
    let index = this.stores.indexOf(name);
    if (index !== -1){
      this.stores.slice(index, 1);
    }
  }

}
