import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ValueComponent } from './value/value.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ValueComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  standalone: true
})
export class App {
  protected title = 'DatingApp.SPA';
}
