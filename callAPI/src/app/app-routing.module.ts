import { Call } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call/call.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { ListLenguajeComponent } from './lenguaje/list-lenguaje/list-lenguaje.component';
import { CreateLenguajeComponent } from './lenguaje/create-lenguaje/create-lenguaje.component';
import { EditLenguajeComponent } from './lenguaje/edit-lenguaje/edit-lenguaje.component';

const routes: Routes = [
  { path: 'language', component: CallComponent },
  { path: 'programmer', component: ProgrammerComponent },
  { path: 'list-lenguaje', component: ListLenguajeComponent },
  { path: 'create-lenguaje', component: CreateLenguajeComponent },
  { path: 'edit-lenguaje', component: EditLenguajeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }