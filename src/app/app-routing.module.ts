import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/cl-dashboard', pathMatch: 'full' },
  {
    path: 'cl-dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  { path: 'detail/:id', component: HeroDetailComponent },
  {
    path: 'cl-heroes',
    loadChildren:'./heroes/heroes.module#HeroesModule'
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
