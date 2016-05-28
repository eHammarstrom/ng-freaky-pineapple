import { Component, OnInit } from '@angular/core';
//import { Routes, ROUTER_DIRECTIVES } from '@angular/router';
import { ContactComponent } from './+contact';
import { HomeComponent } from './+home';
import { ToolbarComponent } from './toolbar';
import { ProjectsComponent } from './+projects';
import { SpotifyComponent } from './+spotify';

import { RouteView, Routes } from '@ngrx/router';

export const routes: Routes = [
  {
    path: '/',
    components: {
      home: HomeComponent,
      spotify: SpotifyComponent,
      projects: ProjectsComponent,
      contact: ContactComponent
    }
  }
];

@Component({
  moduleId: module.id,
  selector: 'freaky-pineapple-app',
  templateUrl: 'freaky-pineapple.component.html',
  styleUrls: ['freaky-pineapple.component.css'],
  directives: [
    ToolbarComponent,
    RouteView
    //ROUTER_DIRECTIVES
  ]
})



/*
@Routes([
  { path: '/', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/projects', component: ProjectsComponent },
  { path: '/spotify/:error', component: SpotifyComponent },
  { path: '/spotify', component: SpotifyComponent }
])
*/

export class FreakyPineappleAppComponent implements OnInit {

  title: string = 'freaky-pineapple works';

  constructor() { }

  ngOnInit() {
  }

}
