import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const authenticationRoutes: Routes = [
  {
    path: '',
    redirectTo: 'authentication/login',
  },
  {
    path: 'authentication/login',
    component: LoginFormComponent,
    pathMatch: 'full',
  },
  {
    path: 'forgotpassword',
    component: ForgotPasswordComponent,
    pathMatch: 'full',
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(authenticationRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [],
})
export class AuthenticationRoutingModule { }
