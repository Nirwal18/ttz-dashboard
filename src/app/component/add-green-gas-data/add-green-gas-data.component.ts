import { AfterViewInit, Component, Inject, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInput, MatInputModule } from '@angular/material/input';
import { DbService } from '../../../../services/db.service';
import { GreenGasData } from '../../../../interface/greenGas.interface';



@Component({
  selector: 'app-add-green-gas-data',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './add-green-gas-data.component.html',
  styleUrl: './add-green-gas-data.component.scss'
})
export class AddGreenGasDataComponent implements OnInit {

  readonly data = inject<GreenGasData>(MAT_DIALOG_DATA);
  isEditMode=true;

  _fb = inject(FormBuilder);
  formGrp = this._fb.group({
    tpNagar: 0,
    jeoniMandi: 0,
    brijAuto: 0,
    hariomBodla: 0,
    vyom:0,
    date: new FormControl<string>('',[Validators.required])
  });


  _dbService = inject(DbService);


  constructor(private _dialogRef: MatDialogRef<AddGreenGasDataComponent>) {

  }



  ngOnInit(): void {
    //apply values from providded data while sending opn cmd used in edit mode
    console.log(this.data);
    if(this.data!=null){
      this.formGrp.patchValue(this.data);
      this.formGrp.controls.date.disable();
    }else{
      this.formGrp.controls.date.enable();
    }
  }



  onSubmit() {
    //console.log(this.formGrp.getRawValue());
    if (this.formGrp.valid) {
      //console.log(this.formGrp.value);
      this.saveDataToDb(this.formGrp.getRawValue()); 
   
    }
  }

  saveDataToDb(data:any){
    this._dbService.addGreenGasData(data.date, data).then((status)=>{
     this._dialogRef.close(status);
    },(err)=>{
      this._dialogRef.close(false);
    }
  );
  }


}
