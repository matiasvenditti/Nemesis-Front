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
  imageUrl: string;
  @Input() user: User;
  @Input() stores: Store[];
  selectedFile: File;
  @Output() emitter = new EventEmitter<string>();
  
  

  constructor(private profileComponent: ProfileComponent, private storeService: StoreService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  addStore(){
    this.storeService.addStore(this.user.id, this.storeName).subscribe((res: Store) => {
      this.uploadImage(res.id);
      res.imageUrl = this.imageUrl;
      this.stores.push(res);
      this.profileComponent.hideForm();
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

  uploadImage(id: number){
    this.storeService.addStoreImage(this.selectedFile, id).subscribe();
  }
}
