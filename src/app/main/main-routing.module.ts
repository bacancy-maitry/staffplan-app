import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const mainRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes),
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class MainRoutingModule { }
