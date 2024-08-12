import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-task-home',
  standalone: true,
  imports: [
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    RouterModule
  ],
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.css'
})
export class TaskHomeComponent {

}
