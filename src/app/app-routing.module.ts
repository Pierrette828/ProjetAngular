import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { Connexion2Component } from './connexion2/connexion2.component';

const routes: Routes = [
  { path: 'connexion', component: ConnexionComponent},
  { path: 'connexion2', component: Connexion2Component},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
