import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // para el server
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { LenguajesModule } from './lenguajes/lenguajes.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SiteFrameworkModule,
    LenguajesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
