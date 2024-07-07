import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { LayoutsComponent } from './Components/layouts/layouts.component';
import { HomeComponent } from './Components/home/home.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
    ],
  },
];
