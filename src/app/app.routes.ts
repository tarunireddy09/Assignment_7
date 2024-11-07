import { Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { AuthGuard } from './auth.guard';
import { FavoriteComponent } from './favorite/favorite.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'loginsignup',
        pathMatch: 'full'
      },
      {
        path: 'loginsignup',
        component: LoginSignupComponent
      },
      {
        path: 'mainpage',
        component: MainpageComponent,
        canActivate: [AuthGuard] 
      },
      {
        path: 'default',
        component: DefaultComponent  // Add this route
      },
      {
        path: 'favorites',
        component:FavoriteComponent // Add this route
      },
    
];
