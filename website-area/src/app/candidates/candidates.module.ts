import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidateDescriptionComponent } from './candidate-details/description/candidate-description.component';
import { CandidateExperincesComponent } from './candidate-details/experiences/candidate-experiences.component';
import { CandidateService } from './candidate.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../layout/header/header.component';
import { NavbarComponent } from '../layout/navbar/navbar.component';
import { CandidateListComponent } from './candidates/list/candidate-list.component';
import { CandidateGridComponent } from './candidates/grid/candidate-grid.component';
import { CandidatesRoutingModule } from './candidates.routing';

@NgModule({
  declarations: [
    HeaderComponent,
    NavbarComponent,
    CandidateListComponent,
    CandidateGridComponent,
    CandidateDetailsComponent,
    CandidateDescriptionComponent,
    CandidateExperincesComponent
  ],
  imports: [
    CommonModule,
    CandidatesRoutingModule,
    HttpClientModule
  ],
  providers: [CandidateService]
})

export class CandidatesModule { }
