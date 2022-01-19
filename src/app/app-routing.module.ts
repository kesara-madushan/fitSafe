import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { UserRequestFormComponent } from './user-request-form/user-request-form.component'; 
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ManageRequestsComponent } from './manage-requests/manage-requests.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { MyqrComponent } from './myqr/myqr.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home' , component: HomeComponent },
  { path: 'login-customer', component: LoginCustomerComponent },
  { path: 'login-admin', component: LoginAdminComponent},
  { path: 'user-request-form', component:UserRequestFormComponent},
  { path: 'home-admin', component:HomeAdminComponent},
  { path: 'manage-requests', component:ManageRequestsComponent},
  { path: 'home-customer', component: HomeCustomerComponent},
  { path: 'myqr', component: MyqrComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
