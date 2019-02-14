import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  {
    path: '',
    loadChildren: './authentication/authentication.module#AuthenticationModule',
  },
  {
    path: '',
    loadChildren: './main/main.module#MainModule',
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
