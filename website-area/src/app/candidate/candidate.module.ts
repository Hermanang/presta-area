import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateListComponent } from './candidate-list/candidate-list.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateDescriptionComponent } from './candidate-details/description/candidate-description.component';
import { CandidateExperincesComponent } from './candidate-details/experiences/candidate-experiences.component';
import { CandidateService } from './candidate.service';
import { CandidateRoutingModule } from './candidate.routing';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    CandidateListComponent,
    CandidateDetailsComponent,
    CandidateDescriptionComponent,
    CandidateExperincesComponent
  ],
  imports: [
    CommonModule,
    CandidateRoutingModule,
    HttpClientModule
  ],
  providers: [CandidateService]
})

export class CandidateModule { }
