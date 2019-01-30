import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProfileService } from '../../../services/profile.service';
import { ProfileComponent } from '../profile.component';
import { User } from '../../../model/user';
import { Store } from '../../../model/store';
import { StoreService } from '../../../services/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '../../../model/image';


@Component({
  selector: 'app-store-form',
  templateUrl: './store-form.component.html',
  styleUrls: ['./store-form.component.css']
})
export class StoreFormComponent implements OnInit {

  storeName: string;
  storeDescription: string;
  imageUrl: string;
  @Input() user: User;
  selectedFile: File;
  @Output() emitter = new EventEmitter<string>();
  @Output() storeEmitter = new EventEmitter<Store>();
  
  

  constructor(private profileComponent: ProfileComponent, private storeService: StoreService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
  }

  addStore(){
    this.storeService.addStore(this.user.id, this.storeName, this.storeDescription).subscribe((storeResponse: Store) => {
      this.storeService.addStoreImage(this.selectedFile, storeResponse.id).subscribe(res => {
        storeResponse.image = this.imageUrl;
        this.storeEmitter.emit(storeResponse);
        this.profileComponent.hideForm();
      });
      
    })
  }

  readUrl(event: any){
    if (event.target.files && event.target.files[0]){
      this.selectedFile = event.target.files[0];
      var reader = new FileReader();

      reader.onload = (event: any) => {
        this.imageUrl = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
