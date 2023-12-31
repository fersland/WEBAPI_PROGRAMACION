import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {
  readonly apiURL = 'https://localhost:7033/Api/Programacion/Lenguajes/ListarLenguajes';
  constructor(private http:HttpClient) { }
  getListLenguaje():Observable<any[]>{
    return this.http.get<any>(this.apiURL);
  }
}
