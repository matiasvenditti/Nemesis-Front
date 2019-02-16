import { Component, OnInit, Input } from '@angular/core';
import { StoreService } from '../../../services/store.service';
import { Store } from '../../../model/store';
import { User } from '../../../model/user';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material';
import { StoreModalComponent } from '../../../app/store-modal/store-modal.component';

@Component({
  selector: 'app-store-label',
  templateUrl: './store-label.component.html',
  styleUrls: ['./store-label.component.css']
})
export class StoreLabelComponent implements OnInit {

  @Input() stores: Store[];
  @Input() store: Store;
  @Input() user: User;
 

  constructor(private storeService: StoreService, private router: Router, private sanitizer: DomSanitizer, private dialog: MatDialog) { }

  ngOnInit() {
    this.storeService.getStore(this.store.id).subscribe((res: Store) => {
      this.store = res;
    })
  }

  removeStore(event: Event){
    event.stopPropagation();
    this.storeService.removeStore(this.user.id, this.store.id).subscribe(() => {
      this.removeFromArray();
    })
  }

  removeFromArray(){
    let index = -1;
    for(let store of this.stores){
      if (store.name === this.store.name){
        index = this.stores.indexOf(store, 0);
      }
    }
    if (index !== -1){
      this.stores.splice(index, 1);
    }
    
  }

  openEditModal(){
    const dialogRef = this.dialog.open(StoreModalComponent, {
      width: '500px',
      data: {
        store: this.store
      }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  enterStore(){  
    this.router.navigate([`store/${this.store.id}`]);
  }

}
