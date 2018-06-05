import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-form',
  templateUrl: './image-form.component.html',
  styleUrls: ['./image-form.component.css']
})
export class ImageFormComponent implements OnInit {

  selectedFile: File;
  imageUrl: string;
  @Output() emitter = new EventEmitter<boolean>();
  constructor() { }

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
    console.log(this.selectedFile);
    this.hide();
  }

}
