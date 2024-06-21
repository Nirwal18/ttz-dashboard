import { Component, OnInit, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
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
        if(user!=null && user!= undefined){
          this.authService.currentUserSig.set({
            email: user?.email!,
            userName:user?.displayName!
        })
       // console.log(user);
        this.navigateToHomePage()
        }
        else{
          this.router.navigate(["/auth/login"]);
        }
        
      },
      complete:()=>{},
      error:()=>{
          this.authService.currentUserSig.set(null)
      }
  });

  // if(this.authService.currentUserSig()!=null||this.authService.currentUserSig()!=undefined && this.authService.currentUserSig()?.email.length!>5){
  //   //this.navigateToHomePage()
  // }

  }
  public navigateToHomePage(){
    this.router.navigate(["/home/dashboard"]);
  }



  
}
