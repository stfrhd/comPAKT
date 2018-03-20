import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInfoModule } from '../app-info/app-info.module';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class NpbModule {
    public info = new AppInfoModule();
}
