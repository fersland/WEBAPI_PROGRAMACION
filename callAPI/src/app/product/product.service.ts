import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  readonly apiURL = 'https://localhost:7033/api/product/ListarProductos';

  constructor(private http:HttpClient) { }

  viewProduct():Observable<any[]>{
    return this.http.get<any>(this.apiURL);
  }
}
