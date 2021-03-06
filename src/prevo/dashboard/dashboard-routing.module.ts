import { Feature1Component } from '../feature-1/feature-1.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app/app.module';
import { HttpClient } from '@angular/common/http';
import { LanguageChangerComponent } from '../../play/languages';
import { MaterialModule } from '../../play/material/material.module';

const routes: Routes = [
  { path: '', component: DashboardComponent,
  children: [
    { path: 'profile', loadChildren: '../feature2/feature2.module#Feature2Module' },
    { path: 'todo', loadChildren: '../feature3/feature3.module#Feature3Module' }
  ]
}
];


@NgModule({
  imports: [RouterModule.forChild(routes),
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
      }),
    MaterialModule,
  CommonModule],
  exports: [RouterModule, TranslateModule],
  providers: [TranslateService],
  declarations: []
})
export class DashboardRoutingModule { }
