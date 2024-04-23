import { Component, OnInit, signal } from '@angular/core';
import { data2, data3 } from './sortiment';
import { AsyncPipe } from '@angular/common';
import { AsyncSubject, BehaviorSubject, Subject } from 'rxjs';

@Component({
  selector: 'signal-warenkorb',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './signal-warenkorb.component.html',
  styles: ``
})
export class SignalWarenkorbComponent implements OnInit {

  signalImage = false;

  i = 0;

  list = new BehaviorSubject(['']);

  newList = new Subject();
  

  data = [];
  datainfo = data3;

  sortiment = data2;

  warenkorb = signal(['']);

  ngOnInit(): void {
    console.log(this.newList);
    
    this.warenkorb.set(this.data);
    this.list.next(this.data);
  }

  addItem(newItem: string) {
    this.warenkorb.update((value) => [...value, newItem]);
  }

  addItemNew() {
    const newItem = data3[this.i];
    const newValue = [... this.list.value, newItem];

    this.list.next(newValue);
    this.i++;
  }

}
