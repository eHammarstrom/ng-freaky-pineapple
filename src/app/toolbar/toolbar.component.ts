import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { UpperCasePipe } from '@angular/common';
// Pipe is called like so {{menu | uppercase}}
// Pipe is a transformation of data

@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: [
    'toolbar.component.css',
    '../palette.css'
  ]
})

export class ToolbarComponent implements OnInit {
  menus = [
    'Home',
    'Projects',
    'Contact'
  ];

  constructor(private router : Router) {}

  ngOnInit() {
  }

  route(menu : string) {
    let selectedMenu : string = menu.replace(/\s/g, '').toLowerCase();
    console.log('routing to: /' + selectedMenu);
    this.router.navigate(['/' + selectedMenu]);
  }
}
