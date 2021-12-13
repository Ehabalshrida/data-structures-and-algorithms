const repeated=require('../lb/repeated');

describe('first repeated word ',()=>{
  it('return first repeated word',()=>{
    let str='Success is walking from failure to failure with no loss of enthusiasm';
    let expected='failure';
    expect(repeated(str)).toEqual(expected);
  });
  it('return first repeated word regardless of cast (captel/small)',()=>{
    let str='Success is walking from failure to Failure with no loss of enthusiasm';
    let expected='failure';
    expect(repeated(str)).toEqual(expected);
  });
  it('return null if there not repeated word ',()=>{
    let str='When it comes to success, there are no shortcuts';
    expect(repeated(str)).toBeNull();
  });
});
