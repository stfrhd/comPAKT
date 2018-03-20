import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppInfoModule {
  public title = 'aTitle';
  public fullTitle = 'full title';
  public version = '0.1';
  public additional = 'prevo';

}
