import { AplikacjaWEBPage } from './app.po';

describe('aplikacja-web App', () => {
  let page: AplikacjaWEBPage;

  beforeEach(() => {
    page = new AplikacjaWEBPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
