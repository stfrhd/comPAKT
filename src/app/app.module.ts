import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// used to create fake backend
import { fakeBackendProvider } from '../play/_helpers/index';
import { JwtInterceptor } from '../play/_helpers/index';
import { AlertService, AuthenticationService, UserService } from '../play/_services/index';


import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from 'angular5-social-login';
import { AlertComponent } from '../play/_directives';
import { DialogComponent } from '../play/login/login.component';
import { LoggerService, ConsoleLoggerService } from '../play/_services/log.service';

import {TranslateModule, TranslateService, TranslateLoader} from '@ngx-translate/core';

export function getAuthServiceConfigs() {
  const config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider('879205880379-8ora5a6dbbqq2knens6uji74cloi013s.apps.googleusercontent.com')
      }
    ]);
  return config;
}



import { ProgOverlayComponent } from '../play/overlay/progOverlay.component';
import { ProgOverlayService } from '../play/overlay/progOverlay.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { MaterialModule } from '../play/material/material.module';
import { LanguageService } from '../play/languages/language.service';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { ThemeService } from '../play/themes/theme.service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    AppComponent,
    // AlertComponent,
    DialogComponent,
    ProgOverlayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    SocialLoginModule,
    OverlayModule,
    MaterialModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    })
  ],
  exports: [TranslateModule],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },

    AlertService,
    AuthenticationService,
    UserService,
    LanguageService,
    TranslateService,
    ThemeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },

    // provider used to create fake backend
    fakeBackendProvider,
    { provide: LoggerService, useClass: ConsoleLoggerService },
    ProgOverlayService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ DialogComponent, ProgOverlayComponent ]
})
export class AppModule { }
