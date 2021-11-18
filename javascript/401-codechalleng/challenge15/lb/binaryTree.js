'use strict';
class BinaryTree {
  constructor() {
    this.root = null;}
  preOrder() {
    let result = [];
    let walk = (node) => {
      result.push(node.value);
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
    };
    walk(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    let walk = (node) => {
      if (node.left) {
        walk(node.left);
      }
      result.push(node.value);
      if (node.right) {
        walk(node.right);
      }
    };
    walk(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    let walk = (node) => {
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
      result.push(node.value);
    };
    walk(this.root);
    return result;
  }
}


module.exports=BinaryTree;
