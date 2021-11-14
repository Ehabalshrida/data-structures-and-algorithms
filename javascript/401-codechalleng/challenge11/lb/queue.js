'use strict';

const Stack = require('./stack');
const Node = require('./node');


class Queue {
  constructor() {
    this.front=null;
    this.stack= new Stack();
  }

  enqueue(value){
    let newNode= new Node(value);
    if (!this.front) {
      this.front = newNode;
    } else {
      let currentNode = this.front;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }

  }

  dequeue(){
    let deletedValue=this.front;
    if (!this.front) {
      return 'queue is empty';
    }
    this.front=this.front.next;
    return deletedValue.value;
  }

  peek(){
    let peekvalue=this.front;
    if (!this.front) {
      return 'queue is empty';
    }
    return peekvalue.value;
  }

  empty(){
    if (!this.front) {
      return true;
    }
    return false;
  }

  Pseudoenqueue1(value){
    this.stack.push(value);
    while(!this.stack.empty()){
      this.enqueue(this.stack.pop());
    }
  }


}




module.exports=Queue;
