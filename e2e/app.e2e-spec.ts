import { ComPAKTPage } from './app.po';

describe('com-pakt App', function() {
  let page: ComPAKTPage;

  beforeEach(() => {
    page = new ComPAKTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
