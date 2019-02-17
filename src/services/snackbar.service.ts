import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar, private zone: NgZone) { }

  openSnackBar(message: string){
    this.snackBar.open(message);
  }

  handleError(message: string){
    this.zone.run(() => {
      this.snackBar.open(message);
    })
  }
}
