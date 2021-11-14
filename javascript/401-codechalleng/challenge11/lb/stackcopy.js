'use strict';

const Node = require('./lb/node');
const Stack = require('./lb/stack');

class Stackk {
  constructor() {
    this.top = null;
    this.length = 0;
    this.stack = new Stack();
    this.arr = [];
  }

  add(value) {

    let newNode = new Node(value);

    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  pop1() {
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
  toString() {
    let current = this.top;
    if (!current) {
      throw new Error('the linked list does not exisit');
    }

    let format = '';
    while (current) {
      format += `{${current.value}}-->`;
      current = current.next;
    }
    return (format += 'NULL');
  }

  Pseudoenqueue1(value) {
    this.stack.push(value);
    this.top = this.stack.top;
    let output = this.stack.peek();
    this.arr.push(output);


  }
  Pseudodequeue() {
    this.arr.pop();
  }

}

module.exports = Stackk;
