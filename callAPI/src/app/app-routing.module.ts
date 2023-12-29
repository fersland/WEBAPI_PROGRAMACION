import { Call } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallComponent } from './call/call.component';
import { ProgrammerComponent } from './programmer/programmer.component';

const routes: Routes = [
  { path: 'language', component: CallComponent },
  { path: 'programmer', component: ProgrammerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
