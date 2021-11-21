'use strict';
class BinaryTree {
  constructor() {
    this.root = null;}
  findMaximum(){
    if (!this.root) {
      return 'tree is empty';
    }
    let result =this.root.value;
    let walk = (node) => {
      if (node.value>result){
        result=node.value;
      }
      if (node.left) {
        walk(node.left);
      }
      if (node.right) {
        walk(node.right);
      }
    };
    walk(this.root);
    return result;
  }}
module.exports=BinaryTree;
