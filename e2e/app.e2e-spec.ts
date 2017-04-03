import { ITOAWebPage } from './app.po';

describe('itoaweb App', () => {
  let page: ITOAWebPage;

  beforeEach(() => {
    page = new ITOAWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
