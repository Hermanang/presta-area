import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private meta: Meta) {
    this.meta.addTag({ name: 'description', content: 'How to use Angular 4 meta service' });
    this.meta.addTag({ name: 'author', content: 'talkingdotnet' });
  }

  ngOnInit() {
  }

}
