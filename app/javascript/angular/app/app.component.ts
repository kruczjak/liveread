import { Component } from '@angular/core';

@Component({
  selector: 'liveread',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent {
  public name = 'Angular!';
}
