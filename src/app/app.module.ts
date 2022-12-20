import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { DepilacijeComponent } from './depilacije/depilacije.component';
import { HeaderComponent } from './header/header.component';
import { HidzamaComponent } from './hidzama/hidzama.component';
import { MasazeComponent } from './masaze/masaze.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    DepilacijeComponent,
    HeaderComponent,
    HidzamaComponent,
    MasazeComponent,
    PocetnaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
