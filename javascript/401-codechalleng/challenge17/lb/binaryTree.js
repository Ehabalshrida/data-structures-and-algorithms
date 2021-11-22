'use strict';
//let Node=require('./lb/node');
class BinaryTree {
  constructor() {
    this.root = null;
  }
  breadthfirst(tree) {
    if (!tree.root) {
      return 'tree is empty';
    }
    let queue = [tree.root];
    let result = [];
    while (queue.length > 0) {
      let item = queue[0];
      let value = item.value;
      result.push(value);
      if (item.left !== null) {
        queue.push(item.left);
      }
      if (item.right !== null) {
        queue.push(item.right);
      }
      queue.shift();
    }
    return result;
  }
}
module.exports=BinaryTree;
