import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistryRoutingModule } from './registry-routing.module';
import { UsersComponent } from './users/users.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PropertyComponent } from './property/property.component';


@NgModule({
  declarations: [UsersComponent, PropertyComponent],
  imports: [
    CommonModule,
    RegistryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RegistryModule { }
