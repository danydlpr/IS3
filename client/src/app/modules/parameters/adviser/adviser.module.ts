import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdviserRoutingModule } from './adviser-routing.module';
import { AdviserListComponent } from './adviser-list/adviser-list.component';
import { AdviserCreatorComponent } from './adviser-creator/adviser-creator.component';
import { AdviserEditorComponent } from './adviser-editor/adviser-editor.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AdviserListComponent, AdviserCreatorComponent, AdviserEditorComponent],
  imports: [
    CommonModule,
    AdviserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdviserModule { }
