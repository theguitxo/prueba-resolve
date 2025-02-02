import { Routes } from '@angular/router';
import { RouteResolveService } from './services/route-resolve.service';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent() {
      return import('./pages/home/home.component').then((m) => m.HomeComponent);
    },
  },
  {
    path: 'page1',
    loadComponent() {
      return import('./pages/page1/page1.component').then(
        (m) => m.Page1Component
      );
    },
    resolve: {
      value: RouteResolveService,
    },
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/home',
  },
];
