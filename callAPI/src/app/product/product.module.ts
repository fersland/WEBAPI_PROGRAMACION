import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductComponent,
    CreateProductComponent,
    EditProductComponent,
    DeleteProductComponent,
    ViewAllProductComponent,
    ViewAllProductByDateComponent,
    ViewAllProductByCategoryComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProductModule { }
