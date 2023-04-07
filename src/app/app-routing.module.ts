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

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'accountCreator', component: AccountCreatorComponent },
  { path: 'doctor', component: DoctorComponent },
  { path: 'nurse', component: NurseComponent },
  { path: 'patient', component: PatientComponent },
  { path: 'pharmacist', component: PharmacistComponent },
  { path: 'receptionist', component: ReceptionistComponent },
  { path: 'administrator', component: AdministratorComponent },
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
