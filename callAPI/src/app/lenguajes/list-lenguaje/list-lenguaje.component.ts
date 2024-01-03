import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LenguajeService } from '../lenguaje.service';
import { Lenguajes } from '../lenguajes';

@Component({
  selector: 'app-list-lenguaje',
  templateUrl: './list-lenguaje.component.html',
  styleUrls: ['./list-lenguaje.component.scss']
})

export class ListLenguajeComponent implements OnInit {
  lenguajeList$!:Observable<any[]>;

  //lenguajesListado: Lenguajes;

  constructor(private lenguajeService:LenguajeService){}

  ngOnInit(): void {
    this.lenguajeList$ = this.lenguajeService.getListLenguaje();

    /*
      this.lenguajeService.getListLenguaje().subscribe(data => {
      this.lenguajesListado = data;
    });
    */
  }

  
}
