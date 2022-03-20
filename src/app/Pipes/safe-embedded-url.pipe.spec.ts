import { SafeEmbeddedUrlPipe } from './safe-embedded-url.pipe';

describe('SafeEmbeddedUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new SafeEmbeddedUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
