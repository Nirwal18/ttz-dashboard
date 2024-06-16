import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-sales-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule

  ],
  templateUrl: './sales-table.component.html',
  styleUrl: './sales-table.component.css'
})
export class SalesTableComponent implements  OnInit,AfterViewInit{

  @Input() dataSource:any;
  displayedColumns: string[] = ['date','industrial', 'commertial', 'dpng', 'cng','action'];
  @ViewChild(MatPaginator) paginator!:MatPaginator ;



  ngOnInit(): void {
    
  }
   
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }

}
