import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component';

const routes: Routes = [
  {
    path: '',
    component: AreaComponent,
    children: [
      {
        path: 'Donors',
        loadChildren: () => import('./donors/donors.module').then(m => m.DonorsModule)
      },
      {
        path: 'Volunteers',
        loadChildren: () => import('./volunteers/volunteers.module').then(m => m.VolunteersModule)
      },
      {
        path: 'Help',
        loadChildren: () =>
          import('./request-help/request-help.module').then(m => m.RequestHelpModule)
      },
      {
        path: 'Storage',
        loadChildren: () => import('./storage/storage.module').then(m => m.StorageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AreaRoutingModule {}
