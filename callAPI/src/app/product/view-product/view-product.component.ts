import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  productListId: Product;
  productId = 0;

  constructor(private productService:ProductService,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void{
  
    this.activatedRoute.params.subscribe(data => {
      this.productId = data['id'];

      this.productService.viewProductId(this.productId).subscribe(productData =>{
        this.productListId = productData;
      });
      
    });
  }
}
