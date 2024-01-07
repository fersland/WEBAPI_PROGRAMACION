import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  // npm install -g json-server
  // json-server --watch db.json

  readonly apiURL = 'https://localhost:7033/api/product';
  readonly apiCategorias = 'https://localhost:7033/Api/Categorias';

  constructor(private http:HttpClient) { }

  viewProduct():Observable<any[]>{
    return this.http.get<any>(this.apiURL + '/ListarProductos');
  }

  CreateProduct(data:any){    
    return this.http.post(this.apiURL + '/AgregarProducto', data);
  }

  getCategorias():Observable<any[]>{
    return this.http.get<any>(this.apiCategorias);
  }

  viewProductId(productId): Observable<Product>{
    const latres = 'https://localhost:7033/api/product/selectProduct/' + productId;
    return this.http.get<Product>(latres);
  }
  
  searchCategoryProduct(categoryId): Observable<Product>{
    const productcategory = 'https://localhost:7033/api/product/selectCategory/' + categoryId;
    return this.http.get<Product>(productcategory);
  }
}