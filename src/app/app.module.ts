import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './search/search.component';
import { TodoComponent } from './todo/todo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FavComponent } from './fav/fav.component';


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatFormFieldModule,
  MatSelectModule,
  MatOptionModule } from '@angular/material';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LanguageSelectionComponent } from './language-selection/language-selection.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'search', component: SearchComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'fav', component: FavComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SearchComponent,
    TodoComponent,
    PageNotFoundComponent,
    FavComponent,
    ToolbarComponent,
    LanguageSelectionComponent
  ],
  imports: [
    NgbModule.forRoot(),
    RouterModule.forRoot( appRoutes, { enableTracing: true } ),
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
  ],
  exports: [
    TranslateModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule
 ],
  providers: [{provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
