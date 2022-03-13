import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdviserCreatorComponent } from './adviser-creator/adviser-creator.component';
import { AdviserListComponent } from './adviser-list/adviser-list.component';
import { AdviserEditorComponent } from './adviser-editor/adviser-editor.component';


const routes: Routes = [
  {
    path: 'creator',
    component:AdviserCreatorComponent
  },
  {
    path: 'adviser-list',
    component:AdviserListComponent
    
  },
  {
    path: 'adviser-editor/:id',
    component:AdviserEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdviserRoutingModule { }
