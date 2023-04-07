import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
import { AccountCreatorComponent } from './account-creator/account-creator.component';
import { AuthGuardService } from './services/auth-guard.service';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { NurseComponent } from './dashboard/nurse/nurse.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { PharmacistComponent } from './dashboard/pharmacist/pharmacist.component';
import { ReceptionistComponent } from './dashboard/receptionist/receptionist.component';
import { AdministratorComponent } from './dashboard/administrator/administrator.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AccountCreatorComponent,
    DashboardComponent,
    DoctorComponent,
    NurseComponent,
    PatientComponent,
    PharmacistComponent,
    ReceptionistComponent,
    AdministratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
