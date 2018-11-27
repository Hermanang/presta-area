import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-demande',
  templateUrl: './demande.component.html',
  styleUrls: ['./demande.component.css']
})
export class DemandeComponent implements OnInit {

  constructor(/*private router: Router, */private meta: Meta, private title: Title) {
    this.title.setTitle('Angular');
    this.meta.addTag({ name: 'description', content: 'How to use Angular' });
    this.meta.addTag({ name: 'author', content: 'Hermann' });
  }

  ngOnInit() {
  }

}
