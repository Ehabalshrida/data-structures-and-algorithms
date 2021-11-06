'use strict';
const Node = require('./Node');

class LinkedList {
  constructor() {
    this.head = null;

  }

  insert(value) {
    const newNode = new Node(value);
    if (this.head) {
      newNode.next = this.head;
      this.head=newNode;
    } else {
      this.head = newNode;
    }
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;

      }
      currentNode.next = newNode;

    }

  }

  includes(val) {
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === val) {
        return true;
      }
      else { currentNode = currentNode.next; }

    }
    return false;

  }
  toString() {
    let str = '';
    let currentNode = this.head;
    if (!currentNode) {
      throw new Error('its Empty Link list');
    }
    while (currentNode) {
      str += `{${currentNode.value}} ->`;
      currentNode = currentNode.next;
    }

    str += `NULL`;
    return str;
  }


}


module.exports = LinkedList;




















