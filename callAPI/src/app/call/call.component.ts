import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from '../service/api.service';

/**
 * COMPONENTES: Es una unidad, reutilizable que encapsula la logica y la representacion
 * de una parte especifica de la interfaz de usuario
 * Los componentes son los bloques que construyen las bases que componen una aplicacion Angular
 * La clase del componentes es una clase TypeScript que contiene la logica del componente.
 * Esta clase tambien puede interactuar con servicios, realizar operaciones asincronas y manejar eventos.
 */

@Component({
  selector: 'app-call',
  templateUrl: './call.component.html',
  styleUrls: ['./call.component.scss']
})
export class CallComponent implements OnInit {
  data: any[] = [];
  developerList$!:Observable<any[]>;

  constructor(private apiService:ApiService) {}
  ngOnInit(): void {
    //this.llenarData();
    this.developerList$ = this.apiService.getLenguageList(); 
  }

  /*
  llenarData(){
    this.apiService.getData().subscribe( data => {
      this.data = data;
      console.log(this.data);
    });
  }*/
}
