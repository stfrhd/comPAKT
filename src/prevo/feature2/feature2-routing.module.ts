import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Feature2Component } from '../feature2/feature2.component';
import { TranslateModule, TranslateLoader, TranslateService } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app/app.module';
import { HttpClient } from '@angular/common/http';
import { MaterialModule } from '../../play/material/material.module';
import { LanguageChangerComponent } from '../../play/languages';

const routes: Routes = [
  {
      path: '',
      component: Feature2Component
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
export class Feature2RoutingModule { }
