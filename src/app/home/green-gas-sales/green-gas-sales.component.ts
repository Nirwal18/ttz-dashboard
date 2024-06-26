import { AfterViewInit, Component, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { AddGreenGasDataComponent } from '../../component/add-green-gas-data/add-green-gas-data.component';
import { DbService } from '../../../../services/db.service';
import { GreenGasData } from '../../../../interface/greenGas.interface';



@Component({
  selector: 'app-green-gas-sales',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
    MatIconModule,
    DecimalPipe
  ],
  templateUrl: './green-gas-sales.component.html',
  styleUrl: './green-gas-sales.component.scss'
})

export class GreenGasSalesComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['date', 'tpNagar', 'jeoniMandi', 'brijAuto', 'hariomBodla', 'total', 'action'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<GreenGasData>();

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);

  dbService = inject(DbService);

  @ViewChild(MatPaginator) paginator!: MatPaginator;


  ngOnInit(): void {
    this.updateUi();

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  updateUi() {
    this.dbService.loadAllGreenGasData().subscribe({
      next: (value) => {
        this.dataSource.data = value;
      }
    })
  }


  displayAddDataDialog() {
    const enterAnimationDuration = "100";
    const exitAnimationDuration = "100";
    this.dialog.open(AddGreenGasDataComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    }).afterClosed().subscribe({
      next: (status) => {
        if(status){
          this._snackBar.open(
            'Data added sucessfully',
            undefined,
            {
              horizontalPosition:'center',
              verticalPosition:'top',
              duration:2000
            }
          );
        }
      }
    });
  }

  onEditClick(data: any) {
    //console.log(data);
    this.dialog.open(AddGreenGasDataComponent, { data:data })
  }

  onDeleteClick(data:any){

  }




}
