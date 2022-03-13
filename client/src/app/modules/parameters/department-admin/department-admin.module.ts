import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentAdminRoutingModule } from './department-admin-routing.module';
import { DepartmentCreatorComponent } from './department-creator/department-creator.component';
import { DepartmentEditorComponent } from './department-editor/department-editor.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DepartmentCreatorComponent, DepartmentEditorComponent, DepartmentListComponent],
  imports: [
    CommonModule,
    DepartmentAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DepartmentAdminModule { }
