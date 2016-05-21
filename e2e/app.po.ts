export class FreakyPineapplePage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('freaky-pineapple-app h1')).getText();
  }
}
