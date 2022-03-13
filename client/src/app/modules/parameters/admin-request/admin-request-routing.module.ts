import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminRequestListComponent } from './admin-request-list/admin-request-list.component';


const routes: Routes = [
  {
    path: 'adminRequestList',
    component:AdminRequestListComponent
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRequestRoutingModule { }
