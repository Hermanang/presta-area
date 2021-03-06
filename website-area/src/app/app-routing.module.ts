import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'candidates',
    loadChildren: './candidates/candidates.module#CandidatesModule'
  },
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports   : [RouterModule.forRoot(
    routes,
    {
      enableTracing: false
    }
    )],
  exports   : [RouterModule]
})
export class AppRoutingModule { }
