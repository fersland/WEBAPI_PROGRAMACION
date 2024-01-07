import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productList$!:Observable<any[]>;
  productId = 0;

  constructor(private productService:ProductService,
              private activatedRouted:ActivatedRoute){}

  ngOnInit(): void{
    this.productList$ = this.productService.viewProduct();
    this.activatedRouted.params.subscribe(data => {
      this.productId = data["id"];
    })
  }
}
