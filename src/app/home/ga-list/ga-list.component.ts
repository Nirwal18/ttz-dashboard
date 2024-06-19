import { Location, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DbService } from '../../../../services/db.service';
import { Site } from '../../../../interface/site.interface';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddNewSiteDialogComponent } from '../../component/add-new-site-dialog/add-new-site-dialog.component';

@Component({
  selector: 'app-ga-list',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    NgFor

  ],
  templateUrl: './ga-list.component.html',
  styleUrl: './ga-list.component.scss'
})
export class GaListComponent {

  readonly dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);


  _location = inject(Location);
  _dbService = inject(DbService);
  _sites = new Array<Site>();

  exmp= ["Akshay", "kumar", "Himashu", "Annu"];

  constructor(){
    this.updateUi();
  }

  updateUi(){
    this._dbService.loadSites()
    .subscribe((value)=>{
      this._sites = value;
      console.log(value);
      console.log(this._sites);
    });
  }

  addSite(){
    this.dialog.open(AddNewSiteDialogComponent);
  }

  goBack(){
    this._location.back();
  }
}
