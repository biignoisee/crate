import { Routes } from '@angular/router';
import AuthLayout from '@layout/auth-layout/auth-layout';
import MainLayout from '@layout/main-layout/main-layout';
import Dashboard from '@features/dashboard/pages/dashboard/dashboard';
import Discover from '@features/discover/pages/discover/discover';
import Login from '@features/auth/pages/login/login';
import Register from '@features/auth/pages/register/register';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'discover', component: Discover },
    ],
  },
  {
    path: '',
    component: AuthLayout,
    children: [
      { path: 'login', component: Login },
      { path: 'register', component: Register },
    ],
  },
];
