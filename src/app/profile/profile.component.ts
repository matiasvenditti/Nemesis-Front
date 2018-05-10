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
  stores: string[] = ['Apple', 'Adidas', 'Nike'];
  settingsVisible: boolean = false;
  formVisible: boolean = false;
  

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
    let settings = document.querySelector('app-settings') as HTMLElement;
    
    if (this.settingsVisible){
      settings.style.setProperty('display', 'none');
    } else{
      settings.style.setProperty('display', 'inline-block');
    }
    this.settingsVisible = !this.settingsVisible;
    
  }

  toggleForm(){
    let container = document.querySelector('.container');
    if (!this.formVisible){
      container.classList.add('blur');
    } else if (this.focusedBody()){
      container.classList.remove('blur');
    } 
    this.formVisible = !this.formVisible;
  }

  showForm(){
    document.querySelector('.container').classList.add('blur');
    this.formVisible = true;
  }

  hideForm(){
      document.querySelector('.container').classList.remove('blur');
      this.formVisible = false;
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  private focusedBody(): boolean{
    let body = document.body;
    console.log(document.activeElement);
    
    return document.activeElement === body;
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
