import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-green-gas-sales',
  standalone: true,
  imports: [
    MatListModule
  ],
  templateUrl: './green-gas-sales.component.html',
  styleUrl: './green-gas-sales.component.css'
})
export class GreenGasSalesComponent {

}
