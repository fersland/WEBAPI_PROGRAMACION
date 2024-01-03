import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent {
  productList$!:Observable<any[]>;

  constructor(private productService:ProductService){}

  ngOnInit(): void{
    this.productList$ = this.productService.viewProduct();
  }
}
