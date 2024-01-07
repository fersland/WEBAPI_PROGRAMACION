import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductByCategoryComponent } from './view-all-product-by-category/view-all-product-by-category.component';
import { ViewAllProductByDateComponent } from './view-all-product-by-date/view-all-product-by-date.component';
import { ViewAllProductComponent } from './view-all-product/view-all-product.component';

const routes: Routes = [
  { path: '', component: ProductComponent },
  { path: 'create-product', component: CreateProductComponent },
  { path: 'delete-product/:id', component: DeleteProductComponent },
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'product/:id', component: ViewProductComponent },
  { path: 'category/:id', component: ViewAllProductByCategoryComponent },
  { path: 'search', component: ViewAllProductByDateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
