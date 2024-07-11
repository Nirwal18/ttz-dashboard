import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-add-customer-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule
  ],
  templateUrl: './add-customer-dialog.component.html',
  styleUrl: './add-customer-dialog.component.css'
})
export class AddCustomerDialogComponent {
  _dialogRef= inject( MatDialogRef<AddCustomerDialogComponent>);

  _fb = inject(FormBuilder)
  formGrp=this._fb.group({
    bp: new FormControl<number>(0,[Validators.required]),
    name: new FormControl<string>('',[Validators.required]),
    address: "",
    type: "",
    mru: "",
    dcq: 0,
    isGscSigned: false,
    isActive: false
  });


  public MRU_LIST =['Agra', 'Firozabad', 'Bharatpur','Vrindavan'];
  public CUST_TYPE = ["INDUSTRIAL", "COMMERTIAL"];

  onSubmit(){
    this._dialogRef.close(this.formGrp.value);
  }

}
