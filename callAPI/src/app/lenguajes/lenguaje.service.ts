import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lenguajes } from './lenguajes';

@Injectable({
  providedIn: 'root'
})
export class LenguajeService {
  readonly apiURL = 'https://localhost:7033/Api/Programacion/Lenguajes/ListarLenguajes';
  constructor(private http:HttpClient) { }

    // LISTAR LENGUAJES
  getListLenguaje():Observable<any[]>{    
    return this.http.get<any>(this.apiURL);
  }

  // CREATE LENGUAJE
  createLenguaje(lenguajeBody: any): Observable<Lenguajes>{
    const lenguajeUrl = 'https://localhost:7033/Api/Programacion/Lenguajes/Save';
    // return an Observable
    return this.http.post<any>(lenguajeUrl, lenguajeBody);
  }

  /*
  viewLenguaje(lenguajeId){
    const lenguajeUrl = 'https://localhost:7033/Api/Programacion/Lenguajes/' + lenguajeId;
    return this.http.get(lenguajeUrl);
  }*/
}
