import { AfterContentChecked, AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements
  OnChanges, OnInit, DoCheck,
  AfterContentInit, AfterContentChecked {

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

  ngAfterContentInit(): void {
    console.log('child: ngAfterContentInit hook called!');
  }

  ngAfterContentChecked(): void {
    console.log('child: ngAfterContentChecked hook called!');
  }

}
