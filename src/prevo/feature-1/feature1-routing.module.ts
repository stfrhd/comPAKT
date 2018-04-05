import { Feature1Component } from '../feature-1/feature-1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from '../feature2/feature2.component';

const routes: Routes = [
  {
      path: '',
      component: Feature1Component,
      children: [
          { path: 'x', component: Feature2Component }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [Feature2Component]
})
export class Feature1RoutingModule { }
