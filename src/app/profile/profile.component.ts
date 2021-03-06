import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { User } from '../../model/user';
import { Store } from '../../model/store';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Image } from '../../model/image';
import { DomSanitizer } from '@angular/platform-browser';
import { StoreService } from '../../services/store.service';


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
  

  constructor(private userService: UserService, private router: Router, private sanitizer: DomSanitizer, private storeService:StoreService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe((value: User) => {
      this.user = value;
      this.name = this.capitalize(this.user.name);
      this.storeList = this.user.stores;
    });
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

  changeImage(event: any){
    this.user.image = event;
  }

  addStore(event){
    this.storeList.push(event);
  }
}
