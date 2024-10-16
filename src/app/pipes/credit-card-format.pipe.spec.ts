import { CreditCardFormatPipe } from './credit-card-format.pipe';

describe('CreditCardFormatPipePipe', () => {
  it('create an instance', () => {
    const pipe = new CreditCardFormatPipe();
    expect(pipe).toBeTruthy();
  });
});
