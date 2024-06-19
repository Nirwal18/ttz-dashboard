import { Component, OnInit, inject } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs'; 
import { SalesTableComponent } from '../../component/sales-table/sales-table.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SaleEntryDialogComponent } from '../../component/sale-entry-dialog/sale-entry-dialog.component';
import { DbService } from '../../../../services/db.service';
import { ConfirmationDialogComponent } from '../../component/confirmation-dialog/confirmation-dialog.component';
import {
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { SiteChooserComponent } from '../../component/site-chooser/site-chooser.component';
import { SaleData } from '../../../../interface/sale.interface';
import { MatTableDataSource } from '@angular/material/table';


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
    MatBottomSheetModule,
    SalesTableComponent
  ],
  templateUrl: './gas-sales.component.html',
  styleUrl: './gas-sales.component.scss'
})
export class GasSalesComponent implements OnInit{
  dataSource:any =DUMMY_DATA;

  readonly dialog = inject(MatDialog);
  readonly _bottomSheet = inject(MatBottomSheet);
  private _snackBar = inject(MatSnackBar);
  private _dbService = inject(DbService);

 
  dataSourceTTZ = new MatTableDataSource<SaleData>();
  dataSourceAgra = new MatTableDataSource<SaleData>();
  dataSourceFirozabad = new MatTableDataSource<SaleData>();
  dataSourceVrindavan = new MatTableDataSource<SaleData>();
  dataSourceBharatpur = new MatTableDataSource<SaleData>();

  ngOnInit(): void {
    this.updateUi();

    //this._dbService.updateAndCalculateTTZsalesData()
;  }


  updateUi(){
    this.getTTZData();
    this.getAgraData();
    this.getFirojabadData();
    this.getVrindavanData();
    this.getBharatpurData();
  }

  getTTZData(){
    this._dbService.loadSalesData("TTZ-Sales")
    .subscribe({
      next:(value)=>{
        this.dataSourceTTZ.data = value
        console.log(value);
      
      }
    })
  }
  getAgraData(){
    this._dbService.loadSalesData("Agra-sales")
    .subscribe({
      next:(value)=>{
        this.dataSourceAgra.data = value
        console.log(value);
      
      }
    })
  }

  getFirojabadData(){
    this._dbService.loadSalesData("Firozabad-sales")
    .subscribe({
      next:(value)=>{
        this.dataSourceFirozabad.data = value
      }
    })
  }

  getVrindavanData(){
    this._dbService.loadSalesData("Vrindavan-sales")
    .subscribe({
      next:(value)=>{
        this.dataSourceVrindavan.data = value
      }
    })
  }

  getBharatpurData(){
    this._dbService.loadSalesData("Bharatpur-sales")
    .subscribe({
      next:(value)=>{
        this.dataSourceBharatpur.data = value
      }
    })
  }


  onAddClick(){
    //open sales add dialog
    //this.dialog.open(SaleEntryDialogComponent);
    this.openBottomSheet();
  }

  onEditClick(data:any){
    this.dialog.open(SaleEntryDialogComponent, {data:data});
  }

  onDeleteClick(data:any){
    this.dialog.open(
      ConfirmationDialogComponent,{
        data:{
          title:"Delete reading", 
          msg:"Would you like to delete reading of date "+data.date
        }
      });
  }

  addDialogOpen(site:string, data:any){
    this.dialog.open(SaleEntryDialogComponent, {data:{site:site, data: data}})
    .afterClosed()
    .subscribe({
      next:(val)=>{
        this._dbService.addSalesData(val.site+'-sales',val.data.date,val.data)
        .then(()=>{
          alert("Data added sucessfully");
        });
      }
    })
  }


  openBottomSheet(): void {
    this._bottomSheet.open(SiteChooserComponent)
    .afterDismissed()
    .subscribe({next:(val)=>{
      this.addDialogOpen(val, undefined)
    }});
  }
}
