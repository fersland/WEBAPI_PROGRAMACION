import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LenguajeService } from '../service/lenguaje.service';

@Component({
  selector: 'app-list-lenguaje',
  templateUrl: './list-lenguaje.component.html',
  styleUrls: ['./list-lenguaje.component.scss']
})

export class ListLenguajeComponent implements OnInit {
  lenguajeList$!:Observable<any[]>;

  constructor(private lenguajeService:LenguajeService){}

  ngOnInit(): void {
    this.lenguajeList$ = this.lenguajeService.getListLenguaje();
  }

  
}
