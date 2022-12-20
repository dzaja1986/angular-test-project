import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DepilacijeComponent } from './depilacije/depilacije.component';
import { HidzamaComponent } from './hidzama/hidzama.component';
import { MasazeComponent } from './masaze/masaze.component';
import { PocetnaComponent } from './pocetna/pocetna.component';

const routes: Routes = [
  {path: 'o-meni', component: PocetnaComponent},
  {path: 'hidzama', component: HidzamaComponent},
  {path: 'depilacija', component: DepilacijeComponent},
  {path: 'masaze', component: MasazeComponent},
  {path: 'kontakt', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
