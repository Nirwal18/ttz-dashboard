import { AfterViewInit, Component, InjectionToken, OnInit, ViewChild, inject } from '@angular/core';
import { NavBarComponent } from '../component/nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav'
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import {  NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    NavBarComponent,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit{
  currentRoute = "";
  screenWidth: number = 499;
  @ViewChild('sideNav') sideNav!: MatDrawer;


  constructor(private router: Router){
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => 
      {
         this.currentRoute = (event as NavigationEnd).url
      });

   
  }

ngAfterViewInit(): void {
      // set screenWidth on page load
      this.screenWidth = window.innerWidth;
      window.onresize = () => {
        // set screenWidth on screen size change
        this.screenWidth = window.innerWidth;
        this.toogleSideNav();
      };
      this.toogleSideNav();  
}

onSideNavClick(event:any){
  if(this.screenWidth<500){
    this.sideNav.close();
  }
  
}

  toogleSideNav(){
    if(this.screenWidth<500){
      this.sideNav.close();
    }else{
      this.sideNav.open();
    }
  }



  
  

}
