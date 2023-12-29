import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // para el server
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CallComponent } from './call/call.component';
import { ProgrammerComponent } from './programmer/programmer.component';
import { HeaderComponent } from './header/header.component';
import { ListLenguajeComponent } from './lenguaje/list-lenguaje/list-lenguaje.component';
import { CreateLenguajeComponent } from './lenguaje/create-lenguaje/create-lenguaje.component';
import { EditLenguajeComponent } from './lenguaje/edit-lenguaje/edit-lenguaje.component';

@NgModule({
  declarations: [
    AppComponent,
    CallComponent,
    ProgrammerComponent,
    HeaderComponent,
    ListLenguajeComponent,
    CreateLenguajeComponent,
    EditLenguajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
