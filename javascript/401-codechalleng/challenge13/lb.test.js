'use strict';
let validateBrackets = require('./lb');

describe('validateBrackets test',()=>{
  it('if brackets are matching',()=>{
    let input='([{()}]){}';
    expect(validateBrackets(input)).toEqual(true);
  });
  it(' if string is empty',()=>{
    let input='';
    expect(validateBrackets(input)).toEqual(true);
  });
  it(' if brackets are  not match ',()=>{
    let input='([{)}]){}';
    expect(validateBrackets(input)).toEqual(false);
  });
});
