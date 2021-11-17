'use strict';
let DuckDuckGoose = require('./lb');

describe('DuckDuckGoose test',()=>{
  test('validate',()=>{
    let queue = ['A', 'B', 'C', 'D', 'E'];
    let k = 3;
    expect(DuckDuckGoose(queue, k)).toEqual('D');
  });
});
