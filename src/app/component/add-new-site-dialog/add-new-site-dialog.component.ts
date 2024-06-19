import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-new-site-dialog',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-new-site-dialog.component.html',
  styleUrl: './add-new-site-dialog.component.css'
})
export class AddNewSiteDialogComponent {

  _dialogRef= inject( MatDialogRef<AddNewSiteDialogComponent>);
  
  _fb = inject(FormBuilder)
  formGrp=this._fb.group({
    industrial: 0,
    commertial: 0,
    dpng: 0,
    cng: 0,
    date: new FormControl<string>('',[Validators.required])
  });


  onSubmit(){
    this._dialogRef.close(this.formGrp.getRawValue());
  }


}
