import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { RecaptchaModule } from 'angular-google-recaptcha';


@NgModule({
  declarations: [LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    SecurityRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModuleModule,
    RecaptchaModule
    
    
  ]
  
})
export class SecurityModule { }
