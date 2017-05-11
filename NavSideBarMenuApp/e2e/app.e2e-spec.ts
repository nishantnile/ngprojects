import { NavSideBarMenuAppPage } from './app.po';

describe('nav-side-bar-menu-app App', () => {
  let page: NavSideBarMenuAppPage;

  beforeEach(() => {
    page = new NavSideBarMenuAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
