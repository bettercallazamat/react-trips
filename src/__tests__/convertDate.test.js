import convertDate from '../helpers/convertDate'

describe('convertDate', () => {
  it('returns string in  format DD.MM.YYYY', () => {
    expect(convertDate(new Date('1994-09-22'))).toEqual('22.09.1994');
  });

  it('does not return date in same format', () => {
    expect(convertDate(new Date('1994-09-22'))).not.toEqual('22-09-1994');
  });
});
