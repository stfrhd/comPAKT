import { ThemeService } from './themes/theme.service';
import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  themeService: ThemeService;
  titleService: Title;

  constructor(titleService: Title, themeService: ThemeService) {
    this.themeService = themeService;
    this.titleService = titleService;
    titleService.setTitle('RoyalPAKT');
  }
}
