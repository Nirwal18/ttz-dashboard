import { AfterViewInit, Component, OnInit, ViewChild, inject, viewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DecimalPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddGreenGasDataComponent } from '../../component/add-green-gas-data/add-green-gas-data.component';
import { DbService } from '../../../../services/db.service';
import { GreenGasData } from '../../../../interface/greenGas.interface';



export interface PeriodicElement {
  date: number;
  tpNagar: number;
  jeoniMandi: number;
  brijAuto: number;
  hariomBodla: number
}

const ELEMENT_DATA: PeriodicElement[] = [
  {date: 1, tpNagar: 112099, jeoniMandi: 10079, brijAuto: 12302.2, hariomBodla:123.2},
  {date: 2, tpNagar: 132599, jeoniMandi: 23079, brijAuto: 11302.2, hariomBodla:153.2},
  {date: 3, tpNagar: 142089, jeoniMandi: 69079, brijAuto: 13302.2, hariomBodla:163.2},
  {date: 4, tpNagar: 152011, jeoniMandi: 14079, brijAuto: 21502.2, hariomBodla:183.2}
];



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

export class GreenGasSalesComponent implements OnInit,AfterViewInit{

  displayedColumns: string[] = ['date','tpNagar', 'jeoniMandi', 'brijAuto', 'hariomBodla','total','action'];
  //dataSource = ELEMENT_DATA;
  dataSource = new MatTableDataSource<GreenGasData>();

  readonly dialog = inject(MatDialog);

  dbService = inject(DbService);

  @ViewChild(MatPaginator) paginator!:MatPaginator ;

  
  ngOnInit(): void {
    this.updateUi();
    
  }
  
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

  updateUi(){
    this.dbService.getGreenGasData().subscribe({
      next:(value)=>{
          this.dataSource.data =value;
      }
    })
  }

  
  displayAddDataDialog(){
    const enterAnimationDuration = "100";
    const exitAnimationDuration = "100";
    this.dialog.open(AddGreenGasDataComponent, {
      width: '400px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }

  onEditClick(data:any){
    console.log(data);
    this.dialog.open(AddGreenGasDataComponent,{data})
  }


}
