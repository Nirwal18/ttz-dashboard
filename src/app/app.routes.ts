import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [

    {
         path: '', 
         redirectTo: '/login', 
         pathMatch: 'full' 
    },
    {
        path: 'login',
        component: LoginComponent,
        title: 'Login Page',
    },
    {
        path:"**",
        component: PageNotFoundComponent,
        title: "404"
    }

];
