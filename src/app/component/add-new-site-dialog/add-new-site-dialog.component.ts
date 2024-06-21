import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { Site } from '../../../../interface/site.class';

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
export class AddNewSiteDialogComponent implements OnInit{
  readonly data = inject<Site>(MAT_DIALOG_DATA);
  _dialogRef= inject( MatDialogRef<AddNewSiteDialogComponent>);
  
  _fb = inject(FormBuilder)
  formGrp=this._fb.group({
    siteName: new FormControl<string>('',[Validators.required]),
    industrialCustomerCount:0,
    commertialCustomerCount: 0,
    dpngCustomerCount: 0,
    cngStationCount: 0,
    //date: new FormControl<string>('',[Validators.required])
  });

  _title:string = "Add new site";

  ngOnInit(): void {
       //apply values from providded data while sending opn cmd used in edit mode
       console.log(this.data);
       if(this.data!=null){
         this.formGrp.patchValue(this.data);
         this.formGrp.controls.siteName.disable();
         this._title = "Modify site";
       }else{
         this.formGrp.controls.siteName.enable();
       }
  }

  onSubmit(){
    if(this.formGrp.valid){
      this._dialogRef.close(this.formGrp.getRawValue());
    }
  }


}
