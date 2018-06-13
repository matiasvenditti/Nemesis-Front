import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../model/product';
import { ProductService } from '../../../services/product.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Image } from '../../../model/image';

@Component({
  selector: 'app-product-result',
  templateUrl: './product-result.component.html',
  styleUrls: ['./product-result.component.css']
})
export class ProductResultComponent implements OnInit {

  @Input() product: Product;

  constructor(private productService: ProductService, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.productService.getProductImage(this.product.id).subscribe((res: Image) => {
      this.product.imageUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + res.code);
    })
  }

}
