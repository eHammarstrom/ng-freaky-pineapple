import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
//import { ROUTER_PROVIDERS } from '@angular/router';
import { FreakyPineappleAppComponent, environment } from './app/';

import { provideRouter, Routes } from '@ngrx/router';

const routes: Routes = [
  {
    path: '/',
    component: FreakyPineappleAppComponent
  }
];

if (environment.production) {
  enableProdMode();
}

bootstrap(FreakyPineappleAppComponent,
  [
    HTTP_PROVIDERS,
    provideRouter(routes)
    //ROUTER_PROVIDERS
  ]);
