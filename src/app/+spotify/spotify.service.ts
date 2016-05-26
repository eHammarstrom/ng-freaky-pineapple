import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SpotifyService {
  private clientId: string;
  private clientSecret: string;
  private scopes: string;
  private callbackUrl: string;

  constructor(private http: Http) { }

  wakeUpTest(): string {
    console.log('SpotifyService is awake and initiated.');
    return 'SpotifyService is awake and initiated.';
  }

  prepare(clientId: string,
    clientSecret: string,
    scopes: string,
    callbackUrl: string): void {
        console.log('SpotifyService: ' + clientId);
        console.log('SpotifyService: ' + clientSecret);
        console.log('SpotifyService: ' + scopes);
        console.log('SpotifyService: ' + callbackUrl);

        this.clientId = clientId;
        this.clientSecret = clientSecret;
        this.scopes = scopes;
        this.callbackUrl = callbackUrl;
  }

  getAuthUrl(): string {
    return 'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + this.clientId +
      '&scope=' + encodeURIComponent(this.scopes) +
      '&redirect_uri=' + encodeURIComponent(this.callbackUrl);

    /*
    this.http.get(authUrl)
      .map(res => res.json())
      .subscribe(
        data => console.log(JSON.stringify(data)),
        err => console.error(err),
        () => console.log('getAuthCode onComplete...')
      );
    */
  }

}
