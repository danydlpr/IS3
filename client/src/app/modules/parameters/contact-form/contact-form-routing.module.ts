import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormCreatorComponent } from './contact-form-creator/contact-form-creator.component';


const routes: Routes = [
  {
    path: 'creator',
    component:ContactFormCreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactFormRoutingModule { }
