import { Component, inject } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatListModule, MatNavList } from '@angular/material/list';

@Component({
  selector: 'app-site-chooser',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './site-chooser.component.html',
  styleUrl: './site-chooser.component.css'
})
export class SiteChooserComponent {
  _bottomSheetRef = inject(MatBottomSheetRef<SiteChooserComponent>);

openLink(event:any){
  this._bottomSheetRef.dismiss(event);
}

}
