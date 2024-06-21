import { Location, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DbService } from '../../../../services/db.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { AddNewSiteDialogComponent } from '../../component/add-new-site-dialog/add-new-site-dialog.component';
import { Site } from '../../../../interface/site.class';
import { ConfirmationDialogComponent } from '../../component/confirmation-dialog/confirmation-dialog.component';
import { title } from 'process';

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

  readonly _dialog = inject(MatDialog);
  private _snackBar = inject(MatSnackBar);


  _location = inject(Location);
  _dbService = inject(DbService);
  _sites = new Array<Site>();


  constructor(){
    this.updateUi();
  }

  updateUi(){
    this._dbService.loadSites()
    .subscribe((value)=>{
      this._sites = value;
    });
  }

  addSite(){
    this._dialog.open(AddNewSiteDialogComponent)
    .afterClosed()
    .subscribe((value)=>{
      this._dbService.addSite(value)
      .then(()=>{
        this._snackBar.open("Sidte added",undefined,{duration: 1000});
      });
    });
  }

  editSite(site:Site){
    this._dialog.open(AddNewSiteDialogComponent, {data:site})
    .afterClosed()
    .subscribe((value)=>{
      this._dbService.addSite(value)
      .then(()=>{
        this._snackBar.open("Sidte modified",undefined,{duration: 1000});
      });
    });
  }

  deleteSite(site:Site){
    this._dialog.open(ConfirmationDialogComponent, {data:{title: "Delete site", msg: "Are you sure to delete "+site.siteName+" site." }})
    .afterClosed()
    .subscribe((value)=>{
      if(value){
        this._dbService.deleteSite(site.siteName);
        this._snackBar.open("Sidte deleted",undefined,{duration: 1000});
      }
    });
  }

  goBack(){
    this._location.back();
  }
}
