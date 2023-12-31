import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LenguajesComponent } from './lenguajes.component';
import { CreateLenguajeComponent } from './create-lenguaje/create-lenguaje.component';
import { ListLenguajeComponent } from './list-lenguaje/list-lenguaje.component';
import { EditLenguajeComponent } from './edit-lenguaje/edit-lenguaje.component';
import { ViewLanguageComponent } from './view-language/view-language.component';

const routes: Routes = [
  { path: '', component: LenguajesComponent },
  { path: 'create-lenguaje', component: CreateLenguajeComponent },
  { path: 'list-lenguaje', component: ListLenguajeComponent },
  { path: 'edit-lenguaje', component: EditLenguajeComponent },
  { path: 'view-language/:id', component: ViewLanguageComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LenguajesRoutingModule { }
