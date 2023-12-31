import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramadoresRoutingModule } from './programadores-routing.module';
import { ProgramadoresComponent } from './programadores.component';


@NgModule({
  declarations: [
    ProgramadoresComponent
  ],
  imports: [
    CommonModule,
    ProgramadoresRoutingModule
  ]
})
export class ProgramadoresModule { }
