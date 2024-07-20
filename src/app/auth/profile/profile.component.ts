import { Component, inject } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {

  _auth = inject(AuthService);
  private _snackBar = inject(MatSnackBar);

  isEmailVerified = this._auth.fireAuth.currentUser?.emailVerified;





  // send email verification for email
  sendEmailForVerification(){
    this._auth.sendEmailForVarification()
    .then(()=>{
      this._snackBar.open("Email send successfully.", undefined,{duration: 1000});
    });
  }

}
