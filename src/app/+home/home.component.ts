import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { HomeService } from './home.service';

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: [
    'home.component.css',
    '../palette.css'
  ],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {
  baconData: string = 'loading baconData...';

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getBacon()
      .subscribe(data => this.baconData = data);
  }

}
