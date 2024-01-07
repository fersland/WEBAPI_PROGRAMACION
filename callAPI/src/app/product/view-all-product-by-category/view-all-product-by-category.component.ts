import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../category';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-view-all-product-by-category',
  templateUrl: './view-all-product-by-category.component.html',
  styleUrls: ['./view-all-product-by-category.component.scss']
})
export class ViewAllProductByCategoryComponent implements OnInit {
  searchCategory: Category;
  productList: Product;

  constructor(private activate: ActivatedRoute,
                private service: ProductService){}

  ngOnInit(): void{
    this.activate.params.subscribe(data => {
      this.searchCategory = data['id'];

      this.service.searchCategoryProduct(this.searchCategory).subscribe(categoryData =>{
        this.productList = categoryData;
      });
    });
  }
}
