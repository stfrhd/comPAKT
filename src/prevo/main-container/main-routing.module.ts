import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainContainerComponent } from './main-container.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../../play/login/login.component';

const routes: Routes = [
  {
      path: '',
      component: MainContainerComponent,
      children: [
          { path: 'f', loadChildren: '../feature-1/feature1.module#Feature1Module' },
          { path: '', component: LoginComponent }
      ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [LoginComponent]
})
export class MainRoutingModule { }
