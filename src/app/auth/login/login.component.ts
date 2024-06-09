import { Component, Inject, inject } from '@angular/core';

import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../../services/auth.service';
import { Router, RouterLink } from '@angular/router';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  email="";
  pass="";
  authService = inject(AuthService)
  router = inject(Router)


  onLoginClick(){
  
    //alert(this.email);
    this.authService.login(this.email, this.pass).subscribe({
      next:()=>{
        this.navigateToHomePage();
      
      },
      error:()=>{
      }
    })
  }

  public navigateToHomePage(){
    this.router.navigate(["/home"])
  }

}
