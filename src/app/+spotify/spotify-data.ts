export class SpotifyData {
  clientId: string;
  clientSecret: string;
  scopes: string;
  callbackUrl: string;

  authCode: string;

  tokens: {
    accessToken: string,
    refreshToken: string,
    expires: Date
  }
}
