import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateDetailsComponent } from './candidate/candidate-details/candidate-details.component';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateListComponent,
  },
  { path: ':id', component: CandidateDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule {

}
