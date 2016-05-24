import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: [
    'toolbar.component.css',
    'shared/palette.css'
  ]
})

export class ToolbarComponent {
  menus = [
    'Home',
    'Project Information',
    'Contact'
  ];
}
