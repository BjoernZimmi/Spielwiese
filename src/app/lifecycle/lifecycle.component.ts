import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [],
  templateUrl: './lifecycle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class LifecycleComponent implements OnInit, OnChanges, DoCheck {

  // name: string | undefined;
  // @Input() name: string | undefined;

  myNumber: number = 123;

  constructor() {
    // console.log(this.userName);
    // this.name = "Neuer Name";
  }

  className: string = this.constructor.name;


  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    // this.name = "Neuer Name 2";
    // console.log(changes['name']);
  }

  ngOnInit(): void {
    // console.log(this.userName);
  
  }


   ngDoCheck(): void {
      //  console.log(this.name);
   }

}
