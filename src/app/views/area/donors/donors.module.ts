import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonorsRoutingModule } from './donors-routing.module';
import { DonorsComponent } from './donors.component';

@NgModule({
  declarations: [DonorsComponent],
  imports: [CommonModule, DonorsRoutingModule]
})
export class DonorsModule {}
