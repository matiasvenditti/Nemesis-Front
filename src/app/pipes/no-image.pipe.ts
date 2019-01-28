import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: any): any {
    console.log('Image: ',image);
    if (!image){
      return 'assets/perfil.png';
    } else {
      return image;
    }
  }

}
