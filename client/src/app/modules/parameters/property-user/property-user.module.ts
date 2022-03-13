import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyUserRoutingModule } from './property-user-routing.module';
import { PropertyEditorComponent } from './property-editor/property-editor.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [PropertyEditorComponent, PropertyListComponent],
  imports: [
    CommonModule,
    PropertyUserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropertyUserModule { }
