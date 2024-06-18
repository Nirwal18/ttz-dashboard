import { Component, Inject, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { AddGreenGasDataComponent } from '../add-green-gas-data/add-green-gas-data.component';

@Component({
  selector: 'app-sale-entry-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './sale-entry-dialog.component.html',
  styleUrl: './sale-entry-dialog.component.css'
})
export class SaleEntryDialogComponent {

  readonly data = inject<any>(MAT_DIALOG_DATA);

  _dialogRef= inject( MatDialogRef<AddGreenGasDataComponent>);
  _fb = inject(FormBuilder)
  formGrp=this._fb.group({
    industrial: 0,
    commertial: 0,
    dpng: 0,
    cng: 0,
    date: new FormControl<string>('',[Validators.required])
  });


  onSubmit(){
    
  }

}
