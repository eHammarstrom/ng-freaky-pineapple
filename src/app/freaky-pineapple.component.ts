import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { ContactComponent } from './+contact';
import { HomeComponent } from './+home';
import { ToolbarComponent } from './toolbar';

@Component({
  moduleId: module.id,
  selector: 'freaky-pineapple-app',
  templateUrl: 'freaky-pineapple.component.html',
  styleUrls: ['freaky-pineapple.component.css'],
  directives: [
    ToolbarComponent,
    ROUTER_DIRECTIVES
  ],
  providers: [ROUTER_PROVIDERS]
})

@Routes([
  { path: '/contact', component: ContactComponent },
  { path: '/home', component: HomeComponent }
])

export class FreakyPineappleAppComponent implements OnInit {
  title: string = 'freaky-pineapple works!';

  constructor(private router: Router) { }

  ngOnInit() {
    let nav: string = localStorage.getItem('nav');
    if (nav === 'contact') {
      console.log('contact works');
      this.router.navigate(['/contact']);
    } else if (nav === 'home') {
      console.log('home works');
      this.router.navigate(['/home']);
    }
  }
}
