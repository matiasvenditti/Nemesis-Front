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
  userImage: any = '../../assets/perfil.png';
  

  constructor(private userService: UserService, private router: Router, private sanitizer: DomSanitizer, private storeService:StoreService) {
  }

  ngOnInit() {
    this.userService.getUser().subscribe((value: User) => {
      this.user = value;
      this.name = this.capitalize(this.user.name);
      this.storeList = this.user.stores;
      this.storeList.forEach(store => {
        this.storeService.getStoreImage(store.id).subscribe((res: Image) => {
          store.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + res.code);
        })
      });
      
      this.userService.getUserImage(this.user.id).subscribe((res: Image) => {
        this.userImage = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + res.code);
      })
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

  enterStore(id: number){  
    this.router.navigate([`store/${id}`]);
  }

  changeImage(event: any){
    this.userImage = event;
  }
}
