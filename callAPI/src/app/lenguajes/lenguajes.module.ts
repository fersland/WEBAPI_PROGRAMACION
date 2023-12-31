import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LenguajesRoutingModule } from './lenguajes-routing.module';
import { LenguajesComponent } from './lenguajes.component';
import { CreateLenguajeComponent } from './create-lenguaje/create-lenguaje.component';
import { EditLenguajeComponent } from './edit-lenguaje/edit-lenguaje.component';
import { ListLenguajeComponent } from './list-lenguaje/list-lenguaje.component';
import { ViewLanguageComponent } from './view-language/view-language.component';


@NgModule({
  declarations: [
    LenguajesComponent,
    CreateLenguajeComponent,
    EditLenguajeComponent,
    ListLenguajeComponent,
    ViewLanguageComponent

  ],
  imports: [
    CommonModule,
    LenguajesRoutingModule
  ]
})
export class LenguajesModule { }
