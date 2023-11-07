import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {

  childMessage: string = 'Test Child';

  @Input()
  messageFromParent!: string;

  constructor() {
    console.log('Child Constructor Called!');
    console.log(this.messageFromParent);
  }

  ngOnChanges(whatChanges: SimpleChanges) {
    console.log('child: ' + this.messageFromParent);
    console.log('child: ngOnChanges hook called!');
    console.log(whatChanges);
  }

  ngOnInit(): void {
    console.log('child: ngOnInit hook called!');
  }

  ngDoCheck(): void {
    console.log('child: ngDoCheck hook called!');
  }


}
