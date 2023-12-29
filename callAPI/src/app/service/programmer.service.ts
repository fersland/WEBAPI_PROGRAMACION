import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProgrammerService {
  readonly urlAPI = 'https://localhost:7033/Api/Programacion/Programador/ListarProgramadores';

  constructor(private http:HttpClient) { }

  getProgrammerList():Observable<any[]>{
    return this.http.get<any>(this.urlAPI);
  }
}
