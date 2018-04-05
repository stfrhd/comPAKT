import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search/search.component';
import { UserComponent } from '../user/user/user.component';
import { SettingsComponent } from '../settings/settings/settings.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  declarations: [HeaderComponent, SearchComponent,
    UserComponent,
    SettingsComponent],
  exports: [HeaderComponent]
})
export class HeaderModule { }
