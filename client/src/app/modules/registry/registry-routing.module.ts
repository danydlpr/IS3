import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { PropertyComponent } from './property/property.component';


const routes: Routes = [
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'property',
    component: PropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistryRoutingModule { }
