import { Theme } from './theme';

export class SupportedThemes extends Array<Theme> {

  public static THEME1 = new Theme('default', 'defaultTheme');
  public static THEME2 = new Theme('alternative', 'alternativeTheme');
  public static THEME3 = new Theme('another', 'anotherTheme');

  constructor() {
    super(
      SupportedThemes.THEME1,
      SupportedThemes.THEME2,
      SupportedThemes.THEME3
    );
  }
}
