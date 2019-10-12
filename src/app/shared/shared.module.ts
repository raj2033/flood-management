import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './modules/material.module';
import { RouterModule } from '@angular/router';

const allModules = [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule];
const allEntryComponents = [];
const allComponents = [];
const allDirectives = [];
const allProviders = [];

@NgModule({
  declarations: [[...allComponents], [...allDirectives], [...allEntryComponents]],
  imports: allModules,
  providers: allProviders,
  entryComponents: allEntryComponents,
  exports: [[...allModules], [...allComponents], [...allDirectives]]
})
export class SharedModule {}
