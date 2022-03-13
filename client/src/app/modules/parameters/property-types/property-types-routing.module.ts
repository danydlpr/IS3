import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypeListComponent } from './type-list/type-list.component';
import { TypeEditorComponent } from './type-editor/type-editor.component';
import { TypeCreatorComponent } from './type-creator/type-creator.component';


const routes: Routes = [
  
  {
    path: 'type-list',
    component:TypeListComponent
  },
  {
    path: 'type-editor/:id',
    component:TypeEditorComponent
  },
  {
    path: 'creator',
    component:TypeCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyTypesRoutingModule { }
