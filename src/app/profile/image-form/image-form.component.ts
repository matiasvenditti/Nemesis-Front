import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../model/user';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {

  selectedFile: File;
  imageUrl: string;
  @Input() user: User;
  @Output() emitter = new EventEmitter<boolean>();
  @Output() imageEmitter = new EventEmitter<string>();

  constructor(private userService: UserService) { }

  ngOnInit() {
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

  hide(){
    this.emitter.emit(false);
  }

  upload(){
    if (this.selectedFile != null){
      this.userService.addUserImage(this.selectedFile, this.user.id).subscribe();
      this.imageEmitter.emit(this.imageUrl);
      this.hide();
    }
  }

}
