import { AngcliPage } from './app.po';

describe('angcli App', () => {
  let page: AngcliPage;

  beforeEach(() => {
    page = new AngcliPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
