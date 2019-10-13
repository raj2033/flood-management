import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./views/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./views/register/register.module').then(m => m.RegisterModule)
  },
  {
    path: '',
    loadChildren: () => import('./views/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'area/:areaId',
    loadChildren: () => import('./views/area/area.module').then(m => m.AreaModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  // {
  //   path: 'action-form',
  //   loadChildren: () =>
  //     import('./views/area/action-form/action-form.module').then(m => m.ActionFormModule)
  // },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
