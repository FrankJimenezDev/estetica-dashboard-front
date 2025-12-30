import { Routes } from '@angular/router';
import { PersonalPage } from './page/personal-page/personal-page';
import { ClientsPage } from './page/clients-page/clients-page';
import { UsersLayouts } from './layouts/users-layouts/users-layouts';

export const userRoutes: Routes = [
  {
    path: '',
    component: UsersLayouts,
    children: [
      {
        path: 'personal',
        component: PersonalPage
      },
      {
        path: 'clientes',
        component: ClientsPage
      },
      {
        path: '**',
        redirectTo: 'personal'
      }
    ]
  }

];

export default userRoutes;
