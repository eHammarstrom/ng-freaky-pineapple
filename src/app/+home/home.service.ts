import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeService {

  constructor(private http: Http) { }

  getBacon(): Observable<string> {
    return this.http
      .get('https://baconipsum.com/api/?type=meat-and-filler')
      .map(this.parseBacon);
  }

  private parseBacon(res: Response): string {
    let text: string = '';

    for (let part in res.json()) {
      text += res.json()[part];
    }

    return text || '';
  }

}
