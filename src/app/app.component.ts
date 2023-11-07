import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, OnInit {
  message: string = '';

  constructor() {
    console.log('Parent Constructor Called!');
  }

  onClickBtn(inputEvent: HTMLInputElement) {
    console.log(inputEvent);
    this.message = inputEvent.value;
  }

  ngOnChanges(whatChanges: SimpleChanges) {
    console.log('parent: ngOnChanges hook called!');
    console.log('parent ' + whatChanges);
  }

  ngOnInit(): void {
    console.log('parent: ngOnInit hook called!');
  }
}
