import { Component, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import { SalesTableComponent } from '../../component/sales-table/sales-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaleEntryDialogComponent } from '../../component/sale-entry-dialog/sale-entry-dialog.component';


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
    MatButtonModule,
    MatIconModule,
    SalesTableComponent
  ],
  templateUrl: './gas-sales.component.html',
  styleUrl: './gas-sales.component.scss'
})
export class GasSalesComponent {
  dataSource:any =DUMMY_DATA;

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);




  onAddClick(){
    //open sales add dialog

    this.dialog.open(SaleEntryDialogComponent);
  }

}
