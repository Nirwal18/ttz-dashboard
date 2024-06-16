import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatRippleModule} from '@angular/material/core'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-deshboard',
  standalone: true,
  imports: [
    MatRippleModule,
    MatGridListModule,
    MatCardModule,
    RouterLink
  ],
  templateUrl: './deshboard.component.html',
  styleUrl: './deshboard.component.css'
})
export class DeshboardComponent {

}
