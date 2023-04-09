import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountCreatorComponent } from './account-creator/account-creator.component';
import { AdministratorComponent } from './dashboard/administrator/administrator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorComponent } from './dashboard/doctor/doctor.component';
import { NurseComponent } from './dashboard/nurse/nurse.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { PharmacistComponent } from './dashboard/pharmacist/pharmacist.component';
import { ReceptionistComponent } from './dashboard/receptionist/receptionist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accountCreator', component: AccountCreatorComponent, canActivate: [AuthGuardService] },
  { path: 'doctor', component: DoctorComponent, canActivate: [AuthGuardService] },
  { path: 'nurse', component: NurseComponent, canActivate: [AuthGuardService] },
  { path: 'patient', component: PatientComponent, canActivate: [AuthGuardService] },
  { path: 'pharmacist', component: PharmacistComponent, canActivate: [AuthGuardService] },
  { path: 'receptionist', component: ReceptionistComponent, canActivate: [AuthGuardService] },
  { path: 'administrator', component: AdministratorComponent, canActivate: [AuthGuardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
