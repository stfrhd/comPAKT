import { Theme } from './theme';

export class SupportedThemes extends Array<Theme> {

  public static THEME1 = new Theme('one', 'one');
  public static THEME2 = new Theme('two', 'alternative');
  public static THEME3 = new Theme('three', 'another');

  constructor() {
    super(
      SupportedThemes.THEME1,
      SupportedThemes.THEME2,
      SupportedThemes.THEME3
    );
  }
}
