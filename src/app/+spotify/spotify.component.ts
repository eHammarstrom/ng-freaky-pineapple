import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Router, RouteSegment, OnActivate } from '@angular/router';

import { QueryParams } from '@ngrx/router';
import 'rxjs/add/operator/pluck';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { SpotifyService } from './spotify.service';

@Component({
  moduleId: module.id,
  selector: 'app-spotify',
  templateUrl: 'spotify.component.html',
  styleUrls: ['spotify.component.css'],
  providers: [
    SpotifyService,
    QueryParams
  ]
})

export class SpotifyComponent implements OnInit/*, OnActivate */ {
  private callbackUrl: string = 'http://localhost:4200/spotify';
  private credentialsData: {
    clientId: string,
    clientSecret: string
  };

  isAuthenticated: boolean = false;

  authUrl: string;

  //callbackCode: Observable<string>;
  //callbackError: Observable<string>;

  callback: Observable<string>;

  constructor(
    private http: Http,
    private spotifyService: SpotifyService,
    //private routeSegment: RouteSegment,
    //private router: Router
    private queryParams: QueryParams
  ) {
    //this.callback = queryParams.pluck('error');
  }

  /*
  routerOnActivate() {
    console.log(this.routeSegment.parameters);
    console.log(this.routeSegment.getParam('error'));
  }
  */

  ngOnInit() {

    //this.error = this.routeSegment.getParam('error');
    //console.log(this.error);

    //this.queryParams.distinctUntilChanged().subscribe((data) => { console.log(data); }, (err) => { console.error(err); });

    /*
    this.queryParams.pluck('error').subscribe(
      (data) => { console.log(data); },
      (err) => { console.error(err); },
      () => { console.log('queryParams onComplete'); }
    );
    */

    /*
    this.queryParams.subscribe(
      (data) => console.log(data),
      (err) => console.log(err),
      () => console.log('queryParams onComplete')
    );
    */

    /*
    this.callback.map((data) => { return data; })
      .subscribe(
        (data) => { console.log(data); },
        (err) => { console.log (err); },
        () => { console.log('Complete'); }
      );
    */

    /*
    if (this.queryParams) {
      this.queryParams
        .subscribe(
          (data) => console.log(data),
          (err) => console.error(err),
          () => console.log('complete')
        );
      this.queryParams.pluck('error')
        .map(data => data)
        .subscribe(
          (data) => { console.log(data); },
          (err) => { console.log(err); },
          () => { console.log('Got param.'); }
        );
    }
    */



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
  /*
let data;
if ((data = routeSegment.getParam('code')) != null) {
  this.retCode = data;
} else if ((data = routeSegment.getParam('error')) != null) {
  this.retError = data;
}
this.retState = routeSegment.getParam('state');
*/

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
