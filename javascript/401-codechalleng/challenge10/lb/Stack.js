'use strict';
const Node=require('./Node');
class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    let newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;

  }

  pop() {
    let deletedValue = this.top;
    if (!this.top) {
      return 'stack is empty';
    }
    this.top = this.top.next;
    return deletedValue.value;
  }

  peek() {
    let peekvalue = this.top;
    if (!this.top) {
      return 'stack is empty';
    }

    return peekvalue.value;
  }

  empty() {
    if (!this.top) {
      return true;
    }
    return false;
  }

}
module.exports = Stack;
