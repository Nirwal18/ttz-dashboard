import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { Customer } from '../../../../interface/customer.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.css'
})
export class CustomersComponent implements AfterViewInit{
  @ViewChild(MatSort) _sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private _snackBar = inject(MatSnackBar);

  displayedColumns: string[] = ['mru','name', 'type', 'dcq', 'address', 'action'];
  _dataSource = new MatTableDataSource<Customer>();

  constructor(){
    this._dataSource.data = [
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true},
      {name: "Akshay", mru:'Agra', dcq: 100, address:"Agra", type:"Industrial", isGscSigned: true, isActive: true},
      {name: "Sweeto", mru:'Vrindavan',dcq: 320, address:"Ghaziabad", type:"comm", isGscSigned: true, isActive: true}
    ];

  }

  ngAfterViewInit(): void {
    this._dataSource.sort = this._sort;
    this._dataSource.paginator = this.paginator;
  }

   /** Announce the change in sort state for assistive technology. */
   announceSortChange(sortState: Sort) {
    this.paginator.pageIndex=0;
    console.log(sortState);
    if (sortState.direction) {
      this._snackBar.open("Sort by "+sortState.active+ " in "+sortState.direction,undefined, {duration: 1000});
    
    } else {
      this._snackBar.open("Sorting cleared",undefined, {duration: 1000});
    }
  }


  onEditClick(){

  }

  onDeleteClick(){

  }

  
}
