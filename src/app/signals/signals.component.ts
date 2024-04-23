import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styles: ``
})
export class SignalsComponent implements OnInit {

  setTitle = "Angular Signals";

  invoice = signal([]);

  titleAsSignal = signal(this.setTitle);

  constructor(private http: HttpClient) {

  }


ngOnInit(): void {
  console.log(this.invoice);
  this.titleAsSignal;
}

apiFunction() {
this.http.get('./../')
}

}
