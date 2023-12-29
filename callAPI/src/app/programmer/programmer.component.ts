import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ProgrammerService } from '../service/programmer.service';

@Component({
  selector: 'app-programmer',
  templateUrl: './programmer.component.html',
  styleUrls: ['./programmer.component.scss']
})
export class ProgrammerComponent implements OnInit {
  programmerList$!:Observable<any[]>;

  constructor(private programmerService:ProgrammerService){}

  ngOnInit(): void{
    this.programmerList$ = this.programmerService.getProgrammerList();
  }
}
