import { Routes } from '@angular/router';
import { clientsRoutes } from './pages/clients/routes';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./shared/layouts/default/default.component'),
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            },
            {
                path: 'home',
                loadComponent: () => import('./pages/home/home.component')
            },
            ...clientsRoutes
        ]
    },
    {
        path: 'login',
        loadComponent: () => import('./shared/layouts/full-layout/full-layout.component'),
        children: [
            {
                path: '',
                loadComponent: () => import('./pages/login/login.component')
            }
        ]
    }
];
