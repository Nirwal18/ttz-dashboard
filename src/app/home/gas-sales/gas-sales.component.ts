import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import { SalesTableComponent } from '../../component/sales-table/sales-table.component';


const DUMMY_DATA=[
  {date:"10-06-2024", industrial: 780, commertial: 220, dpng: 5, cng :7 },
  {date:"10-06-2024", industrial: 1880, commertial: 890, dpng: 5, cng :6 },
  {date:"10-06-2024", industrial: 1990, commertial: 720, dpng: 5, cng :5 },
  {date:"10-06-2024", industrial: 1340, commertial: 620, dpng: 5, cng :4 },
  {date:"10-06-2024", industrial: 2310, commertial: 880, dpng: 5, cng :3 }
]



@Component({
  selector: 'app-gas-sales',
  standalone: true,
  imports: [
    MatTabsModule,
    SalesTableComponent
  ],
  templateUrl: './gas-sales.component.html',
  styleUrl: './gas-sales.component.scss'
})
export class GasSalesComponent {
  dataSource:any =DUMMY_DATA;
}
