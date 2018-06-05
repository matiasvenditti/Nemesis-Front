import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfileService } from '../../services/profile.service';
import { User } from '../../model/user';
import { Store } from '../../model/store';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  name: string;
  url: string = 'http://localhost:8080';
  storeList: Store[];
  settingsVisible: boolean = false;
  formVisible: boolean = false;
  imageFormVisible = false;
  user: User;
  

  constructor(private http: HttpClient, private profile: ProfileService, private router: Router) {
  }

  ngOnInit() {
    this.http.get(this.url + '/users/' + localStorage.getItem('username')).subscribe(value => 
      {
      this.user = value as User;
      this.name = this.capitalize(this.user.name);
      this.storeList = this.user.stores;
      }
    );
  }

  toggleSettings(){
    this.settingsVisible = !this.settingsVisible;
  }

  showForm(){
    document.querySelector('.container').classList.add('blur');
    this.formVisible = true;
  }

  hideForm(){
    document.querySelector('.container').classList.remove('blur');
    this.formVisible = false;
  }

  showImageForm(){
    document.querySelector('.container').classList.add('blur');
    this.imageFormVisible = true;
  }

  hideImageForm(){
    document.querySelector('.container').classList.remove('blur');
    this.imageFormVisible = false;
  }

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

  enterStore(id: number){  
    this.router.navigate([`store/${id}`]);
  }
}
