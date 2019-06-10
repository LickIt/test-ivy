import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-test [test]="title"></app-test>`,
  styles: []
})
export class AppComponent {
  title = 'test-ivy';
}
