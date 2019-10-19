import { xssFilter } from '@/util/xss';

describe('util:xssFilter', () => {
  it('xssFilter', () => {
    expect(xssFilter('<')).toBe('&lt;')
    expect(xssFilter('>')).toBe('&gt;')
    // expect(xssFilter('script')).toBe('&#39;')
    // expect(xssFilter('\"')).toBe('&quot;')
    // expect(xssFilter('\'')).toBe('&apos;')
    // expect(xssFilter('\`')).toBe('&grave;')
    // expect(xssFilter('%')).toBe('&percnt;')
    // expect(xssFilter('(')).toBe('&lpar;')
    // expect(xssFilter(')')).toBe('&rpar;')
    // expect(xssFilter(';')).toBe('&semi;')
    // expect(xssFilter('\/')).toBe('&sol;')
    // expect(xssFilter('\\')).toBe('&bsol;')
    // expect(xssFilter('[')).toBe('&lsqb;')
    // expect(xssFilter(']')).toBe('&rsqb;')
    // expect(xssFilter('&')).toBe('&amp;')
    // expect(xssFilter('#')).toBe('&num;')
    // expect(xssFilter('|')).toBe('&verbar;')
  })
})