import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactFormRoutingModule } from './contact-form-routing.module';
import { ContactFormCreatorComponent } from './contact-form-creator/contact-form-creator.component';
import { ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactFormCreatorComponent],
  imports: [
    CommonModule,
    ContactFormRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ContactFormModule { }
