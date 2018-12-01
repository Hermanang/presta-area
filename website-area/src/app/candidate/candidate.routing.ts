import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';

const routes: Routes = [
  {
    path: '',
    component: CandidateListComponent,
  },
  {
    path: ':id/get',
    component: CandidateDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CandidateRoutingModule {

}
