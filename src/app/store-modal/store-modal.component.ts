import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-store-modal',
  templateUrl: './store-modal.component.html',
  styleUrls: ['./store-modal.component.css']
})
export class StoreModalComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<StoreModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private storeService: StoreService) { }

  ngOnInit() {
  }

}
