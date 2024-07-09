import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LayoutsComponent } from './Components/layouts/layouts.component';
import { HomeComponent } from './Components/home/home.component';
import { inject } from '@angular/core';
import { AuthService } from './services/auth.service';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutsComponent,
    canActivateChild: [() => inject(AuthService).isAuthenticated()],
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
