import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  childMessage: string = 'Test Child';

  @Input()
  messageFromParent!: string;

  constructor() {
    console.log('Child Constructor!');
    console.log(this.messageFromParent);
  }

  ngOnChanges() {
    console.log('child: ngOnChanges hook called!');
  }
}
