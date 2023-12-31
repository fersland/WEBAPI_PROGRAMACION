import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramadoresComponent } from './programadores.component';

const routes: Routes = [{ path: '', component: ProgramadoresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramadoresRoutingModule { }
