import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';

const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
    children: [
      {
        path: 'donors',
        loadChildren: () => import('./donors/donors.module').then(m => m.DonorsModule)
      },
      {
        path: 'volunteers',
        loadChildren: () => import('./volunteers/volunteers.module').then(m => m.VolunteersModule)
      },
      {
        path: 'req-help',
        loadChildren: () =>
          import('./request-help/request-help.module').then(m => m.RequestHelpModule)
      },
      {
        path: 'storage',
        loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule)
      },

      {
        path: 'action-form',
        loadChildren: () => import('./action-form/action-form.module').then(m => m.ActionFormModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule {}
