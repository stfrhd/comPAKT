import { Feature1Component } from './feature-1.component';
import { Feature1RoutingModule } from './feature1-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    Feature1RoutingModule
  ],
  declarations: [Feature1Component]
})
export class Feature1Module { }
