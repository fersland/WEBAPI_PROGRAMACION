import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  readonly urlAPI = 'https://localhost:7033/Api/Programacion/Lenguajes/ListarLenguajes';

  constructor(private http:HttpClient) { }

  // LOS OBSERVALES: proporcionan una forma eficiente y poderosa de manejar secuencias de eventos
  // y datos asincronos.
  // Los observables representa una secuencia de eventos que pueden ser consumidos
  // por otros componentes de la app.

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlAPI);
  }

  getLenguageList():Observable<any[]>{
    return this.http.get<any>(this.urlAPI);
    //return this.http.get<any>(this.urlAPI + '/ListarLenguajes');
  }
}
