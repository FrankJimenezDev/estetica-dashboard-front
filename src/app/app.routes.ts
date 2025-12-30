import { Routes } from '@angular/router';
import { HomePage } from './shared/page/home-page/home-page';
import { PageNotFound } from './shared/page/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.routes'),
  },
  {
    path: '**',
    component: PageNotFound
  }
];
