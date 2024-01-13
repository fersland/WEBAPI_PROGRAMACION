import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  createProduct(model: Product): Observable<Product>{
    return this.http.post<Product>(this.apiURL+'/AgregarProducto', model);
  }

  getCategorias():Observable<any[]>{
    return this.http.get<any>(this.apiCategorias);
  }

  viewProductId(productId): Observable<Product>{
    const urlProductoId = 'https://localhost:7033/api/product/selectProduct/' + productId;
    return this.http.get<Product>(urlProductoId);
  }
  
  searchCategoryProduct(categoryId): Observable<Product>{
    const urlProductcategory = 'https://localhost:7033/api/product/selectCategory/' + categoryId;
    return this.http.get<Product>(urlProductcategory);
  }
}