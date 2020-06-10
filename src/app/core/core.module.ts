import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { CiastkaService } from './services/ciastka.service';



@NgModule({
  
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  declarations: [DashboardComponent,LoginComponent],
  providers:[CiastkaService],
  exports: [DashboardComponent,LoginComponent]
})
export class CoreModule { }
