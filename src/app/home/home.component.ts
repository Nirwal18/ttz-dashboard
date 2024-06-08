import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  currentRoute = "";

  constructor(private router: Router){
    router.events.subscribe(event => 
       {
          this.currentRoute = (event as NavigationEnd).url
       });
}
  
  

}
