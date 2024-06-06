import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VerticalmenuComponent } from './verticalmenu/verticalmenu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerticalmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
