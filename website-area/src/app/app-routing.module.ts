import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandeComponent } from './demande/demande.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes              = [
  { path    : '', redirectTo      : '/profile', pathMatch: 'full' },
  { path    : 'demande', component: DemandeComponent },
  { path    : 'profile', component: ProfileComponent }
];

@NgModule({
  imports   : [RouterModule.forRoot(routes)],
  exports   : [RouterModule]
})
export class AppRoutingModule { }
