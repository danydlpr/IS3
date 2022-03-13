import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CityCreatorComponent } from './city-creator/city-creator.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityEditorComponent } from './city-editor/city-editor.component';


const routes: Routes = [
  {
    path: 'creator',
    component:CityCreatorComponent
  },
  {
    path: 'city-list',
    component:CityListComponent
  },
  {
    path: 'city-editor/:id',
    component:CityEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CityAdminRoutingModule { }
