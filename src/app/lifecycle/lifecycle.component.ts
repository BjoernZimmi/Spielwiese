import { ChangeDetectionStrategy, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChange, SimpleChanges } from '@angular/core';
import { InfoBoxComponent } from '../info-box/info-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lifecycle',
  standalone: true,
  imports: [InfoBoxComponent],
  templateUrl: './lifecycle.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck {

  @Input() name: string | undefined;

  myNumber: number = 123;

  constructor() {
    // console.log(this.userName);
    this.name = "Neuer Name";
  }

  ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {
    this.name = "Neuer Name";
    console.log(changes['name']);
  }

  ngOnInit(): void {
    // console.log(this.userName);
  }


   ngDoCheck(): void {
       console.log(this.name);
   }

}
