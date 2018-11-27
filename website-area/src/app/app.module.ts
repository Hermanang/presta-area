import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DemandeComponent } from './demande/demande.component';
import { CandidateService } from './services/candidate.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DemandeComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CandidateService],
  bootstrap: [AppComponent]
})

export class AppModule { }
