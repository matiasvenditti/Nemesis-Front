import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(image: any, defaultSource: string): any {
    if (!image){
      return defaultSource;
    } else {
      return image;
    }
  }

}
