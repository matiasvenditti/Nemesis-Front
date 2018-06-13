import { Component, OnInit, Input } from '@angular/core';
import { Store } from '../../../model/store';
import { StoreService } from '../../../services/store.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '../../../model/image';

@Component({
  selector: 'app-store-result',
  templateUrl: './store-result.component.html',
  styleUrls: ['./store-result.component.css']
})
export class StoreResultComponent implements OnInit {

  @Input() store:Store;

  constructor(private storeService: StoreService, private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.storeService.getStoreImage(this.store.id).subscribe((res: Image) => {
      this.store.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + res.code);
    })
  }

}
