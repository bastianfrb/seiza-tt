import { CurrencyFormatPipe } from './currency-format.pipe';

describe('CurrencyFormatPipe', () => {
  let pipe: CurrencyFormatPipe;

  beforeEach(() => {
    pipe = new CurrencyFormatPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should format USD currency correctly', () => {
    const value = 100;
    const currency = 'USD';
    expect(pipe.transform(value, currency)).toEqual('US$ 100.00');
  });

  it('should format CLP currency correctly', () => {
    const value = 1000;
    const currency = 'CLP';
    expect(pipe.transform(value, currency)).toEqual('$ 1.000');
  });

  it('should return value as string if currency type is not recognized', () => {
    const value = 50;
    const currency = 'EUR';
    expect(pipe.transform(value, currency)).toEqual('50');
  });
});