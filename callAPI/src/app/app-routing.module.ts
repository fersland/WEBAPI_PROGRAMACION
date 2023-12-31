import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'lenguajes', loadChildren: () => import('./lenguajes/lenguajes.module').then(m => m.LenguajesModule) },
  { path: 'programadores', loadChildren: () => import('./programadores/programadores.module').then(m => m.ProgramadoresModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }