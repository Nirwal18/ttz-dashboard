import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './home/about/about.component';

export const routes: Routes = [


    {
        path:'home',
        component:HomeComponent,
        title:'TTZ GAS Console',
        children:[
            {
                path:'about',
                component:AboutComponent,
                title:'About us'
            },
        ]
    },
    {
        path: 'auth',
        component: AuthComponent,
        title: 'Authorization page',
        children:[
            {
                path:'login',
                component:LoginComponent,
                title: 'Login'

            }
        ]
    },
    {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full' 
   },
    {
        path:"**",
        component: PageNotFoundComponent,
        title: "404"
    }

];
