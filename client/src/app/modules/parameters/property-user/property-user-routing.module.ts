import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyEditorComponent } from './property-editor/property-editor.component';


const routes: Routes = [
  {
    path: 'property-list',
    component:PropertyListComponent
  },
  {
    path: 'property-editor/:id',
    component:PropertyEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PropertyUserRoutingModule { }
