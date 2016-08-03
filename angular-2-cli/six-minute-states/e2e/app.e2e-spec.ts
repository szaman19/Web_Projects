import { SixMinuteStatesPage } from './app.po';

describe('six-minute-states App', function() {
  let page: SixMinuteStatesPage;

  beforeEach(() => {
    page = new SixMinuteStatesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
