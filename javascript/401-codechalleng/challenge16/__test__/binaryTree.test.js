'use strict';
const BinaryTree = require('../lb/binaryTree');
const Node = require('../lb/node');
describe('BinaryTreeTest', ()=>{
  let tree = new BinaryTree();
  let node = new Node(9);
  let node1 = new Node(3);
  let node2 = new Node(4);
  let node3 = new Node(11);
  let node4 = new Node(6);
  let node5 = new Node(7);
  let node6 = new Node(8);
  node.left=node1;
  node.right=node2;
  node1.left=node3;
  node1.right=node4;
  node2.left=node5;
  node2.right=node6;
  tree.root=node;
  let tree2 = new BinaryTree();
  test('findMaximum', ()=> {
    let findMaximum = tree.findMaximum();
    expect(findMaximum).toEqual(11);
  });
  test('if tree is empty-->', ()=> {
    let findMaximum = tree2.findMaximum();
    expect(findMaximum).toEqual('tree is empty');
  });
});
