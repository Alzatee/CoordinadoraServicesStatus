import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundPageComponent } from './layout/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (module) => module.DashboardModule
      ),
    // canActivate: 
  },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },//Auto redirect
  { path: '404', component: NotFoundPageComponent },
  { path: '**', redirectTo: '404' } //404 component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
