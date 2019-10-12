import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./views/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'area/:areaId',
    loadChildren: () => import('./views/area/area.module').then(m => m.AreaModule)
  },
  {
    path: '**',
    loadChildren: () => import('./views/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
