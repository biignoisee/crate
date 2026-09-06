import { Routes } from '@angular/router';
import Dashboard from '@features/dashboard/pages/dashboard/dashboard';
import Discover from '@features/discover/pages/discover/discover';

export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'discover', component: Discover },
];
