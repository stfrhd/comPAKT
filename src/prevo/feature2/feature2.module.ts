import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature2Component } from './feature2.component';
import { Feature2RoutingModule } from './feature2-routing.module';
import { MaterialModule } from '../../play/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app/app.module';
import { HttpClient } from '@angular/common/http';
import { LanguageChangerComponent } from '../../play/languages';
import { ThemeChangerComponent } from '../../play/themes/theme-changer/theme-changer.component';

@NgModule({
  imports: [
    CommonModule,
    Feature2RoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
      })
  ],
  exports: [TranslateModule],
  declarations: [Feature2Component, LanguageChangerComponent, ThemeChangerComponent]
})
export class Feature2Module { }
