import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-contact',
  templateUrl: 'contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

  contactToHome() {
      console.log('contactToHome...');
      localStorage.setItem('nav', 'home');
  }

}
