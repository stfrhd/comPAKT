import { Feature1Component } from './../../prevo/feature-1/feature-1.component';
import { Feature1Module } from './../../prevo/feature-1/feature1.module';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
      CommonModule,
      LoginRoutingModule,
      MaterialModule,
      FormsModule,
      ReactiveFormsModule
    ],
    declarations: [LoginComponent, Feature1Component]
})
export class LoginModule {}
