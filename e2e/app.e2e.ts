import { FreakyPineapplePage } from './app.po';

describe('freaky-pineapple App', function() {
  let page: FreakyPineapplePage;

  beforeEach(() => {
    page = new FreakyPineapplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('freaky-pineapple works!');
  });
});
