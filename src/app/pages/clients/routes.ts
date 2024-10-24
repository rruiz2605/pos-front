import { Routes } from '@angular/router';

export const clientsRoutes: Routes = [{
    path: 'clientes',
    loadComponent: () => import('./list/list.component')
}, {
    path: 'clientes/agregar',
    loadComponent: () => import('./form/form.component')
}, {
    path: 'clientes/editar/:id',
    loadComponent: () => import('./form/form.component')
}];
