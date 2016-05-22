import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'fp-toolbar',
    templateUrl: 'fp-toolbar.component.html',
    styleUrls: ['fp-toolbar.component.css']
})

export class FPToolbarComponent {
    menus = [
        'Home',
        'Project Information',
        'Contact'
    ];
}
