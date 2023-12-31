import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // para el server
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';
import { ProgramadoresModule } from './programadores/programadores.module';


@NgModule({
  declarations: [
    AppComponent
  ],

  // AL CREAR UN NUEVO NG G M NOMBRE --ROUTE  =>  SE DEBE DECLARAR EN EL IMPORTS
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SiteFrameworkModule,
    LenguajesModule,
    ProgramadoresModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
