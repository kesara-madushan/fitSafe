import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginCustomerComponent } from './login-customer/login-customer.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { RegisterCustomerComponent } from './register-customer/register-customer.component';
import { UserRequestFormComponent } from './user-request-form/user-request-form.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { ManageRequestsComponent } from './manage-requests/manage-requests.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { popperVariation, TippyModule, tooltipVariation } from '@ngneat/helipopper';
import { CountComponent } from './count/count.component';
import { HomeCustomerComponent } from './home-customer/home-customer.component';
import { MyqrComponent } from './myqr/myqr.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginCustomerComponent,
    LoginAdminComponent,
    RegisterCustomerComponent,
    UserRequestFormComponent,
    HomeAdminComponent,
    ManageRequestsComponent,
    ConfirmComponent,
    CountComponent,
    HomeCustomerComponent,
    MyqrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    TippyModule.forRoot({
      defaultVariation: 'tooltip',
      variations: {
        tooltip: tooltipVariation,
        popper: popperVariation,
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
