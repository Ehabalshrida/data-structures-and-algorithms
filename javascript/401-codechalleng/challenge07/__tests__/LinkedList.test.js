'use strict';
const LinkedList=require('../lb/LinkedList');
describe('ll.kthFromEnd(k)', () => {

  test(' k is greater than the length of the linked list',()=>{
    let ll=new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    let res=ll.kthFromEnd(6);
    expect(res).toEqual('no result');
  });
  test(' Where k and the length of the list are the same',()=>{
    let ll=new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    let res=ll.kthFromEnd(5);
    expect(res).toEqual('no result');
  });
  test(' Where k is not a positive integer',()=>{
    let ll=new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    let res=ll.kthFromEnd(-2);
    expect(res).toEqual('No result if input less than zero');
  });
  test(' Where the linked list is of a size 1',()=>{
    let ll=new LinkedList();
    ll.append(1);
    let res=ll.kthFromEnd(0);
    expect(res).toEqual(1);
  });
  test(' Where k is not a positive integer',()=>{
    let ll=new LinkedList();
    ll.append(1);
    ll.append(2);
    ll.append(3);
    ll.append(4);
    ll.append(5);
    let res=ll.kthFromEnd(3);
    expect(res).toEqual(2);
  });



});
