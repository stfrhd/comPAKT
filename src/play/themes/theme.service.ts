import { SupportedThemes } from './supported-themes';
import { Injectable } from '@angular/core';
import { Theme } from './theme';

@Injectable()
export class ThemeService {

  private supportedThemes = new SupportedThemes();
  private theme: Theme = SupportedThemes.THEME1;

  constructor() {}

  setTheme(theme: Theme) {
    this.theme = theme;
  }

  getTheme(): Theme {
    return this.theme;
  }

  getThemes() {
    return this.supportedThemes;
  }
}
