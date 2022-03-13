import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRequestRoutingModule } from './admin-request-routing.module';
import { AdminRequestListComponent } from './admin-request-list/admin-request-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModuleModule } from '../../shared-module/shared-module.module';


@NgModule({
  declarations: [AdminRequestListComponent],
  imports: [
    CommonModule,
    AdminRequestRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule
  ]
})
export class AdminRequestModule { }
