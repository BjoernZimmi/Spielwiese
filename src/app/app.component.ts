import { Component, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Hello, Spielwiese';
  text = "Additional Info-Text on our Info Box! 🎊";

  test: String = new String;

  constructor() {
    // console.log(this.test);
    
  }
}
 