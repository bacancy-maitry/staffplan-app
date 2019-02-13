import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';

const authenticationRoutes: Routes = [
  {
    path: 'login',
    component: LoginFormComponent,
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
