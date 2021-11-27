import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { PeliculasComponent } from './peliculas/peliculas.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    PeliculasComponent
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
