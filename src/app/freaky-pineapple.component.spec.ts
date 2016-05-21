import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { FreakyPineappleAppComponent } from '../app/freaky-pineapple.component';

beforeEachProviders(() => [FreakyPineappleAppComponent]);

describe('App: FreakyPineapple', () => {
  it('should create the app',
      inject([FreakyPineappleAppComponent], (app: FreakyPineappleAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'freaky-pineapple works!\'',
      inject([FreakyPineappleAppComponent], (app: FreakyPineappleAppComponent) => {
    expect(app.title).toEqual('freaky-pineapple works!');
  }));
});
