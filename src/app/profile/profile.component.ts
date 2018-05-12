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
  storeList: string[] = ['Apple', 'Adidas', 'Nike'];
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

  private capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}
