import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [DashboardComponent, LoginComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
