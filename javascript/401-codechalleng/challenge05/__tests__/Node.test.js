'use strict';
const Node=require('../lib/Node');

describe('test node module',()=>{

  test('test the creation of node',()=>{
    let newNode=new Node(1);

    expect(newNode.value).toEqual(1);
    expect(newNode.next).toBeNull();
  });

});
