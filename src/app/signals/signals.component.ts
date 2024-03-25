import { Component, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styles: ``
})
export class SignalsComponent implements OnInit {

  invoice = signal([]);

ngOnInit(): void {
  console.log(this.invoice);
  
}

}
