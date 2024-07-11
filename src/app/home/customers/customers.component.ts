import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { Customer } from '../../../../interface/customer.interface';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AddCustomerDialogComponent } from '../../component/add-customer-dialog/add-customer-dialog.component';
import { DbService } from '../../../../services/db.service';
import { EmailService } from '../../../../services/email.service';
import { HttpClientModule } from '@angular/common/http';

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

  private _location = inject(Location);
  private _snackBar = inject(MatSnackBar);
  private _dbService = inject(DbService);

  private _emailService = inject(EmailService);
  
  readonly dialog = inject(MatDialog);


  displayedColumns: string[] = ['mru','name', 'type', 'dcq', 'address', 'action'];
  _dataSource = new MatTableDataSource<Customer>();

  constructor(){
  }

  ngAfterViewInit(): void {
    this._dataSource.sort = this._sort;
    this._dataSource.paginator = this.paginator;
    this.loadCustomers();
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

  onBack(){
    this._location.back();
  }


  loadCustomers(){
    this._dbService.loadCustomers().subscribe({
      next:(value)=>{
        this._dataSource.data = value;
      },
      error:(err)=> {
        this._snackBar.open("Error: "+err, undefined,{duration:1000});
      },
    });
  }

  displayAddDataDialog(){
    this.dialog.open(AddCustomerDialogComponent)
    .afterClosed()
    .subscribe({
      next:(val)=>{
        this._dbService.addCustomer(val)
        .then(()=>{
          this._snackBar.open("Data added sucessfully",undefined, {duration: 1000});
        });
      }
    })
  }

  onEditClick(customer:Customer){
    
    // this._emailService.sendEmail(
    //   "nirwal@live.com",
    //   "ak.nirwal@gail.co.in",
    //   "Test email subject",
    //   "test Email body message"
    // );

    this._emailService.sendEmai2();

    this._snackBar.open("function not implemented",undefined, {duration: 1000});


  }

  onDeleteClick(customer:Customer){
    this._dbService.deleteCustomer(customer);
  }

  
}
