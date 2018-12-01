import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CandidateListComponent } from './candidate/candidate-list/candidate-list.component';
import { CandidateService } from '../services/candidate.service';
import { ComponentRoutingModule } from './component.routing';
import { CandidateDetailsComponent } from './candidate/candidate-details/candidate-details.component';
import { CandidateDescriptionComponent } from './candidate/candidate-details/description/candidate-description.component';
import { CommonModule } from '@angular/common';
import { CandidateExperincesComponent } from './candidate/candidate-details/experiences/candidate-experiences.component';

@NgModule({
  declarations: [
    CandidateListComponent,
    CandidateDetailsComponent,
    CandidateDescriptionComponent,
    CandidateExperincesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ComponentRoutingModule
  ],
  providers: [CandidateService]
})

export class ComponentModule { }
