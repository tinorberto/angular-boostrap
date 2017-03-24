import { AngularBoostrapPage } from './app.po';

describe('angular-boostrap App', function() {
  let page: AngularBoostrapPage;

  beforeEach(() => {
    page = new AngularBoostrapPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
