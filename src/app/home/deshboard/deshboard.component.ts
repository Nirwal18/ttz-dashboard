import { Component, OnInit, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatRippleModule} from '@angular/material/core'; 
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { DbService } from '../../../../services/db.service';
import { SaleData } from '../../../../interface/sale.interface';

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
export class DeshboardComponent implements OnInit{
  _gaCount:number = 0;
  _salesTotal:number = 0;
  _gglSales:number = 0;
  _salesDate:string = "";
  _gglSalesDated:string = "";
  private _dbService = inject(DbService);

  ngOnInit(): void {
    // fetch ga count
    this._dbService.loadSites().subscribe((data)=>{
      this._gaCount = data.length-1;
    });
   
    // fetch yesterday ttz sales
    this._dbService.loadSalesData("TTZ-Sales")
    .subscribe((dataArray)=>{
      let data = dataArray[0];
      this._salesTotal = data.commertial + data.industrial + data.dpng;
      this._salesDate = data.date;
    });

    // fetch yesterday green gas sales
    this._dbService.loadAllGreenGasData()
    .subscribe((dataArray)=>{
      let data = dataArray[0];
      this._gglSales = data.brijAuto+ data.hariomBodla +data.jeoniMandi + data.tpNagar+ data.vyom;
      this._gglSalesDated = data.date;
    });

  }

}
