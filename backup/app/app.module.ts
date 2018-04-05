import { BrowserModule, Title } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { ThemeService } from './themes/theme.service';
import { ThemeChangerComponent } from './themes/theme-changer/theme-changer.component';
import { LanguageChangerComponent } from './languages/language-changer/language-changer.component';
import { LanguageService } from './languages/language.service';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './shared';
/*import { SearchComponent } from './search/search/search.component';
import { UserComponent } from './user/user/user.component';
import { SettingsComponent } from './settings/settings/settings.component';*/
import { HeaderModule } from './header/header.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    ThemeChangerComponent,
    LanguageChangerComponent/*,
    SearchComponent,
    UserComponent,
    SettingsComponent*/
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    TranslateModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    BrowserAnimationsModule
  ],
  exports: [
    TranslateModule,
  ],
  providers: [ThemeService, LanguageService, Title, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
