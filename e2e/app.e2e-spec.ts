import { Angular2OfOaPage } from './app.po';

describe('angular2-of-oa App', () => {
  let page: Angular2OfOaPage;

  beforeEach(() => {
    page = new Angular2OfOaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
