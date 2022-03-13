import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PropertyTypesRoutingModule } from './property-types-routing.module';
import { TypeCreatorComponent } from './type-creator/type-creator.component';
import { TypeListComponent } from './type-list/type-list.component';
import { TypeEditorComponent } from './type-editor/type-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [TypeCreatorComponent, TypeListComponent, TypeEditorComponent],
  imports: [
    CommonModule,
    PropertyTypesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PropertyTypesModule { }
