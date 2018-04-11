import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { Theme } from '../theme';

@Component({
  selector: 'prevo-theme-changer',
  templateUrl: './theme-changer.component.html',
  styleUrls: ['./theme-changer.component.scss']
})
export class ThemeChangerComponent implements OnInit {

  themeService: ThemeService;

  constructor(themeService: ThemeService) {
    this.themeService = themeService;
  }

  ngOnInit() {
  }

  public setTheme(theme: Theme) {
    this.themeService.setTheme(theme);
  }
}
