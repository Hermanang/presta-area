import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'candidate-center',
    loadChildren: './components/component.module#ComponentModule'
  },
  { path: '', redirectTo: '/candidate-center', pathMatch: 'full' },
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
