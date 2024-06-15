import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButton, MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    CommonModule,
    MatButton,
    RouterLink
  ],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  @Output() menuClick = new EventEmitter<void>();
}
