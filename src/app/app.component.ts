import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string = '';

  constructor() {
    console.log('Parent Constructor!');
  }

  onClickBtn(inputEvent: HTMLInputElement) {
    console.log(inputEvent);
    this.message = inputEvent.value;
  }

  ngOnChanges() {
    console.log('parent: ngOnChanges hook called!');
  }
}
