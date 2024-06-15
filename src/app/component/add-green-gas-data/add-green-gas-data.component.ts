import { Component, Inject, OnInit, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { DbService } from '../../../../services/db.service';



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

  @Inject(MAT_DIALOG_DATA) public data: any;

  _fb = inject(FormBuilder);
  formGrp = this._fb.group({
    tpNagar: 0,
    jeoniMandi: 0,
    brijAuto: 0,
    hariomBodla: 0,
    date:''
  });


  _dbService = inject(DbService);


  constructor(private _dialogRef: MatDialogRef<AddGreenGasDataComponent>) {

  }



  ngOnInit(): void {
    //apply values from providded data while sending opn cmd used in edit mode
    this.formGrp.patchValue(this.data);
  }




  onSubmit() {
    if (this.formGrp.valid) {
      console.log(this.formGrp.value);

      this.saveDataToDb(this.formGrp.value); 

      //sending true event at its consume point
      this._dialogRef.close(true);
    }
  }

  saveDataToDb(data:any){
    this._dbService.addGreenGasData(data);
  }


}
