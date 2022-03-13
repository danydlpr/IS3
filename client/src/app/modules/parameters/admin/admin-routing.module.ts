import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminCreatorComponent } from './admin-creator/admin-creator.component';


const routes: Routes = [
  {
    path: 'admin-creator',
    component: AdminCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
