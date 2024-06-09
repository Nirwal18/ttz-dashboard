import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { VerticalmenuComponent } from './verticalmenu/verticalmenu.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VerticalmenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'my-app';
  authService = inject(AuthService);
  router = inject(Router);

  ngOnInit(): void {
    this.authService.currentUserSig.set({email:this.authService.fireAuth.currentUser?.email!, userName:""})
    this.authService.fireAuth.onAuthStateChanged({
      next:(user)=>{
          this.authService.currentUserSig.set({
              email: user?.email!,
              userName:user?.displayName!
          })
          this.navigateToHomePage()
      },
      complete:()=>{},
      error:()=>{
          this.authService.currentUserSig.set(null)
      }
  });

  if(this.authService.currentUserSig()?.email.length!>5){
    this.navigateToHomePage()
  }

  }
  public navigateToHomePage(){
    this.router.navigate(["/home"]);
  }



  
}
