import { Component, OnInit } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav'
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    MatSidenavModule,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  currentRoute = "";

  constructor(private router: Router){
    
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => 
      {
         this.currentRoute = (event as NavigationEnd).url
      });
  }

  
  

}
