import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UnauthenticationRequiredGuard } from 'src/app/helpers/guards/unauthentication-required.guard';
import { AuthenticationRequiredGuard } from 'src/app/helpers/guards/authentication-required.guard';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [UnauthenticationRequiredGuard]
  },
  /*jelouda */
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo: '/login'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRoutingModule { }
