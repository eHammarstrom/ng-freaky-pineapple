import { Component } from '@angular/core';
import { FPToolbarComponent } from './fp-toolbar.component';

@Component({
  moduleId: module.id,
  selector: 'freaky-pineapple-app',
  templateUrl: 'freaky-pineapple.component.html',
  styleUrls: ['freaky-pineapple.component.css'],
  directives: [FPToolbarComponent]
})

export class FreakyPineappleAppComponent {
  title = 'freaky-pineapple works!';
}
