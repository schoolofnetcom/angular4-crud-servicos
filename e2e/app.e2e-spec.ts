import { AngularCrudServicosPage } from './app.po';

describe('angular-crud-servicos App', () => {
  let page: AngularCrudServicosPage;

  beforeEach(() => {
    page = new AngularCrudServicosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
