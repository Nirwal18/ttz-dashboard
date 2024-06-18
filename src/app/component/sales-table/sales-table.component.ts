import { AfterViewInit, Component, Input, OnInit, Output, ViewChild, output } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table'; 
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-sales-table',
  standalone: true,
  imports: [
    MatTableModule,
    MatPaginatorModule,
    MatIconModule,
    MatButtonModule

  ],
  templateUrl: './sales-table.component.html',
  styleUrl: './sales-table.component.css'
})
export class SalesTableComponent implements  OnInit,AfterViewInit{

  @Input() dataSource:any;
  onDeleteClick = output<string>();
  onEditClick = output<any>();
  displayedColumns: string[] = ['date','industrial', 'commertial', 'dpng', 'cng','action'];
  @ViewChild(MatPaginator) paginator!:MatPaginator ;




  ngOnInit(): void {
    
  }
   
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator; 
  }


}
