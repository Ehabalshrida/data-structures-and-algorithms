'use strict';
const Node=require('./Node');
class LinkedList{
  constructor(){
    this.head=null;
    this.tail=null;
    this.length=0;
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
    this.length++;

  }
  insertBefore(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    if(current.value===value){
      newNode.next=current;
      this.head=newNode;
    }
    while (current) {
      if(current.next.value===value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
    this.length++;
  }

  insertAfter(value,newValue){
    let newNode=new Node(newValue);
    let current=this.head;
    if(current.value===value){
      this.head.next=newNode;
    }
    while (current) {
      if(current.value===value){
        newNode.next=current.next;
        current.next=newNode;
        break;
      }
      current=current.next;
    }
    this.length++;
  }
  insert(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail = newNode;
      this.tail.next = newNode;
    }
    this.length++;
    return this.head;
  }







}
module.exports=LinkedList;
