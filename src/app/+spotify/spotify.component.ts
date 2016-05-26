import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { OnActivate, RouteSegment } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SpotifyService } from './spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-spotify',
  templateUrl: 'spotify.component.html',
  styleUrls: ['spotify.component.css'],
  providers: [SpotifyService]
})

export class SpotifyComponent implements OnInit, OnActivate {
  private callbackUrl: string = 'http://localhost:4200/spotify';
  private credentialsData: {
    clientId: string,
    clientSecret: string
  };

  isAuthenticated: boolean = false;

  authUrl: string;

  retCode: string;
  retError: string;
  retState: string;

  constructor(
    private http: Http,
    private spotifyService: SpotifyService
  ) { }

  ngOnInit() {
    if (this.spotifyService) {
      this.http.get('../app/data/credentials.json')
        .map(this.handleResponse)
        .subscribe(
          data => this.setupCredentials(data),
          err => this.handleError(err),
          () => this.prepareCredentials()
        );
    }
  }

  routerOnActivate(routeSegment: RouteSegment): void {
    console.log(routeSegment.parameters);
    let data;
    if ((data = routeSegment.getParam('code')) != null) {
      this.retCode = data;
    } else if ((data = routeSegment.getParam('error')) != null) {
      this.retError = data;
    }
    this.retState = routeSegment.getParam('state');
  }

  private spotifyLogin() {
    this.authUrl = this.spotifyService.getAuthUrl();
    window.location.href = this.authUrl;
  }

  private setupCredentials(subData) {
    console.log(this);
    console.log('Setting up credentials...');
    this.credentialsData = {
      clientId: <string>subData.clientId,
      clientSecret: <string>subData.clientSecret
    };
    console.log('credentials: ' +
        JSON.stringify(this.credentialsData));
    console.log('credentials clientId: ' + this.credentialsData.clientId);
    console.log('credentials clientSecret: ' + this.credentialsData.clientSecret);
  }

  private prepareCredentials() {
    console.log('Preparing credentials...');
    this.spotifyService.prepare(
      this.credentialsData.clientId,
      this.credentialsData.clientSecret,
      '', this.callbackUrl);
  }

  private handleResponse(res: Response) {
    console.log(JSON.stringify(res.json()));
    return res.json().spotify;
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

}
