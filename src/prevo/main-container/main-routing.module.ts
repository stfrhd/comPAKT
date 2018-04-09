import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: '',
      component: MainContainerComponent,
      children: [
          { path: 'f', loadChildren: '../feature-1/feature1.module#Feature1Module' },
          { path: 'dashboard', loadChildren: '../../play/login/login.module#LoginModule' },
          { path: '', loadChildren: '../dashboard/dashboard.module#DashboardModule' }
      ]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class MainRoutingModule { }
