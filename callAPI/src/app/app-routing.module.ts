import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammerComponent } from './programmer/programmer.component';
import { ListLenguajeComponent } from './lenguajes/list-lenguaje/list-lenguaje.component';
import { CreateLenguajeComponent } from './lenguajes/create-lenguaje/create-lenguaje.component';
import { EditLenguajeComponent } from './lenguajes/edit-lenguaje/edit-lenguaje.component';
import { ViewLanguageComponent } from './lenguajes/view-language/view-language.component';

const routes: Routes = [
  { path: 'programmer', component: ProgrammerComponent },
  /*{ path: 'list-lenguaje', component: ListLenguajeComponent },
  { path: 'create-lenguaje', component: CreateLenguajeComponent },
  { path: 'edit-lenguaje', component: EditLenguajeComponent },
  { path: 'view-language/:id', component: ViewLanguageComponent },*/
  
  { path: 'lenguajes', loadChildren: () => import('./lenguajes/lenguajes.module').then(m => m.LenguajesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }