import { Language } from './language';

export class SupportedLanguages extends Array<Language> {

  public static TECH = new Language('default', 'tech');
  public static ENGLISH = new Language('english', 'en');
  public static FRENCH = new Language('french', 'fr');
  public static GERMAN = new Language('german', 'de');
  public static ITALIAN = new Language('italian', 'it');

  constructor() {
    super(
      SupportedLanguages.ENGLISH,
      SupportedLanguages.FRENCH,
      SupportedLanguages.GERMAN,
      SupportedLanguages.ITALIAN,
      SupportedLanguages.TECH
    );
  }
}
