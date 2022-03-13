import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityAdminRoutingModule } from './city-admin-routing.module';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import { CityEditorComponent } from './city-editor/city-editor.component';
import { CityListComponent } from './city-list/city-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CityCreatorComponent, CityEditorComponent, CityListComponent],
  imports: [
    CommonModule,
    CityAdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CityAdminModule { }
