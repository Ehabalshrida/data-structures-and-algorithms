'use strict';
const Node=require('./Node');
class LinkedList {
  constructor() {
    this.head = null;
    this.head = null;
    this.length = 0;
  }


  kthFromEnd(k) {
    if (k < 0) {
      return 'No result if input less than zero';
    }
    if (k >=this.length) {
      return 'no result';
    }


    let current = this.head;
    let i = this.length - 1 - k;
    while (i > 0) {
      current = current.next;
      i--;
    }
    return current.value;
  }

  append(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
    this.length++;
  }


}
module.exports = LinkedList;
