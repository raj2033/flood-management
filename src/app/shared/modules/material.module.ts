import { NgModule } from '@angular/core';

// Material Components
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

const MatModules = [MatCardModule, MatButtonModule, MatSelectModule];

@NgModule({
  imports: [MatModules],
  exports: [MatModules]
})
export class MaterialModule {}
