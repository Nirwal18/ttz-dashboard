import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { DbService } from '../../../../services/db.service';
import { Task } from '../../../../model/task';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  _db = inject(DbService);
  _fb = inject(FormBuilder);
  formGrp=this._fb.group(new Task());
  



  saveTask(){
    console.log(this.formGrp.value);
    this._db.saveTask(this.formGrp.value as Task);
  }
}
