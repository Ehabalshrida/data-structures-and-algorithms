'use strict';

const Node = require('../lb/node');
describe('Node Module', () => {
  it('constructor()', () => {
    let value = 5;
    let newNode = new Node(value);
    expect(newNode.value).toEqual(value);
    expect(newNode.left).toBeNull();
    expect(newNode.right).toBeNull();
  });
});
