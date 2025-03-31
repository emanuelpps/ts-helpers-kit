import * as Utils from '../index';

describe('index.ts exports', () => {
  it('should export slugify function', () => {
    expect(Utils.slugify).toBeDefined();
  });

  it('should export capitalize function', () => {
    expect(Utils.capitalize).toBeDefined();
  });

  it('should export randomString function', () => {
    expect(Utils.randomString).toBeDefined();
  });

  it('should export truncate function', () => {
    expect(Utils.truncate).toBeDefined();
  });
});
