import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';


/**
 * @summary this component is reposible for adding /displaing of Projects and Tasks. 
 */

@Component({
  selector: 'app-task-home',
  standalone: true,
  imports: [
    MatDividerModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    RouterModule
  ],
  templateUrl: './task-home.component.html',
  styleUrl: './task-home.component.scss'
})
export class TaskHomeComponent {

  projects = [{name: "New Project"},{name: "Pipeline laying"}];


  /**
   * @summary Add project using dialog
   */
  addProject(){
    alert("not implemented");
  }

  /**
   * @summary Add task using dialog
   */
  addTaskBtnClick(){
    alert("not implemented");
  }


}
