import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { LoginComponent } from './app.login.component';
import { LoginRoutingModule } from './app-login.routing';
import { MaterialModule } from '../Shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [LoginRoutingModule,MaterialModule, ReactiveFormsModule, CommonModule],
    declarations: [LoginComponent],
  })

export class LoginModule { }
  