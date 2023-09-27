import { ApplicationConfig } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, Routes } from '@angular/router';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/sports', pathMatch: 'full' },
  //{path: 'sports', component: SportsComponent}, // Eagerly loading route

  { path: 'sports', loadComponent: () => import('./forms/sports/sports.component').then(m => m.SportsComponent) }, // Lazily loading route
  { path: 'sports/card-item/:id', component: CardItemComponent},
  { path: 'grocery', loadComponent:() => import('./forms/grocery/grocery.component').then(m => m.GroceryComponent) },
  { path: 'grocery/card-item/:id', component: CardItemComponent},
  { path: 'home', loadComponent:()=> import('./forms/home/home.component').then(m=>m.HomeComponent)},
  { path:'**', component:PageNotFoundComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideAnimations(),
    provideRouter(routes)
  ]
};
