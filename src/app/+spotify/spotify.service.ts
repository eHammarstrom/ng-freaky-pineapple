import { Injectable, OnInit } from '@angular/core';

import { SpotifyData } from './spotify-data';

export class SpotifyService {
  private clientId: string;
  private clientSecret: string;
  private scopes: string;
  private callbackUrl: string;

  constructor() { }

  ngOnInit() {
  }

  wakeUpTest(): string {
    console.log('SpotifyService is awake and initiated.');
    return 'SpotifyService is awake and initiated.';
  }

  prepare(clientId: string,
    clientSecret: string,
    scopes: string,
    callbackUrl: string): void {
    console.log(clientId);
  }

  getAuthCode(): void {
    let authUrl: string = 'https://accounts.spotify.com/authorize' +
      '?response_type=code' +
      '&client_id=' + this.clientId +
      '&scope=' + encodeURIComponent(this.scopes) +
      '&redirect_uri=' + encodeURIComponent(this.callbackUrl);
  }

}
