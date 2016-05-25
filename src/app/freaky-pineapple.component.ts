import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router';
import { ContactComponent } from './+contact';
import { HomeComponent } from './+home';
import { ToolbarComponent } from './toolbar';
import { ProjectsComponent } from './+projects';
import { SpotifyComponent } from './+spotify';

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
  { path: '', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/projects', component: ProjectsComponent },
  { path: '/spotify', component: SpotifyComponent }
])

export class FreakyPineappleAppComponent implements OnInit {

  title: string = 'freaky-pineapple works';

  constructor() { }

  ngOnInit() {
  }

}
