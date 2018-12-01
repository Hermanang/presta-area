import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CandidateService } from 'src/app/services/candidate.service';
// import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styles: [
    `
      .nav-tabs{
        margin-bottom: 45px !important;
      }
    `
  ]
})
export class CandidateDetailsComponent implements OnInit {

  candidate: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidateService: CandidateService
    ) {
    /*this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });*/
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.candidateService.getProfileUser(id)
      .subscribe(res => {
        this.candidate = res;
        console.log(this.candidate);
      }, error => {
        console.log(error);
      });
  }

}
