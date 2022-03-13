import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './public/home/home.component';
import { PageNotFoundComponent } from './public/page-not-found/page-not-found.component';
import { AuthenticationRequiredGuard } from './helpers/guards/authentication-required.guard';
import { RolRequiredGuard } from './helpers/guards/rol-required.guard';
import { RolAdviserGuard } from './helpers/guards/rol-adviser.guard';


const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  }, 
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/home'
  },
  {
    path: 'security',
    loadChildren: './modules/security/security.module#SecurityModule'
    
    
  },
  {
    path: 'registry',
    loadChildren: './modules/registry/registry.module#RegistryModule'
  },
  {
    path: 'department',
    loadChildren: './modules/parameters/department-admin/department-admin.module#DepartmentAdminModule',
    canActivate: [RolRequiredGuard,AuthenticationRequiredGuard]
  }
  ,
  {
    path: 'city',
    loadChildren: './modules/parameters/city-admin/city-admin.module#CityAdminModule',
    canActivate: [RolRequiredGuard,AuthenticationRequiredGuard]

  },
  {
    path: 'property',
    loadChildren: './modules/parameters/property-user/property-user.module#PropertyUserModule',
    canActivate: [RolAdviserGuard,AuthenticationRequiredGuard]
  },
  {
    path: 'type',
    loadChildren: './modules/parameters/property-types/property-types.module#PropertyTypesModule',
    canActivate: [RolRequiredGuard,AuthenticationRequiredGuard]
  },
  {
    path: 'adviser',
    loadChildren: './modules/parameters/adviser/adviser.module#AdviserModule',
    canActivate: [RolRequiredGuard,AuthenticationRequiredGuard]
  },
  {
    path: 'request',
    loadChildren: './modules/parameters/request/request.module#RequestModule',
    canActivate: [AuthenticationRequiredGuard]
  },
  {
    path: 'admin-request',
    loadChildren: './modules/parameters/admin-request/admin-request.module#AdminRequestModule',
    canActivate: [RolRequiredGuard,AuthenticationRequiredGuard]
  },
  {
    path: 'admin',
    loadChildren: './modules/parameters/admin/admin.module#AdminModule',
    canActivate: [RolRequiredGuard,AuthenticationRequiredGuard]
  },
  {
    path: 'contactForm',
    loadChildren: './modules/parameters/contact-form/contact-form.module#ContactFormModule'
  }
  ,
  {
    path:'**' ,
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
