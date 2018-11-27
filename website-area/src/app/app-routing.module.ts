import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeComponent } from './demande/demande.component';

const routes: Routes              = [
  { path    : '', redirectTo      : '/demande', pathMatch: 'full' },
  { path    : 'demande', component: DemandeComponent }
];

@NgModule({
  imports   : [RouterModule.forRoot(routes)],
  exports   : [RouterModule]
})
export class AppRoutingModule { }
