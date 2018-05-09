import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  username: string;
  url: string = 'http://localhost:8080';
  id: string;
  stores: string[] = ['Starbucks', 'Apple', 'Adidas', 'Nike'];
  settingsVisible: boolean = false;
  

  constructor(private http: HttpClient, private profile: ProfileService) {
  }

  ngOnInit() {
    this.http.get(this.url + '/user/' + localStorage.getItem('username')).subscribe(value => 
      {
      console.log(value);
      this.username = this.capitalize(value['username']);
      this.id = value['id'];
      }
    );
  }

  toggleSettings(){
    var settings = document.querySelector('app-settings') as HTMLElement;
    
    if (this.settingsVisible){
      settings.style.setProperty('display', 'none');
    } else{
      settings.style.setProperty('display', 'inline-block');
    }
    this.settingsVisible = !this.settingsVisible;
    
  }

  capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  addStore(name: string){
    this.profile.addStore(this.url + '/profile/add', 'Starbucks');
    this.stores.push(name);
  }

  removeStore(name: string){
    let index = this.stores.indexOf(name);
    if (index !== -1){
      this.stores.slice(index, 1);
    }
  }

}
