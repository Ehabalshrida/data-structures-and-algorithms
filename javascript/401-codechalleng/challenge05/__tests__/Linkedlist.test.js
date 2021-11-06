'use strict';
const LinkedList = require('../lib/Linkedlist');


describe('linkedlist test', () => {
  test('test the empty linkedlist', () => {
    let ll = new LinkedList();
    expect(ll.head).toBeNull();
  });

  test('insert inside the l2', () => {
    let l2 = new LinkedList();
    l2.insert(2);
    expect(l2.head.value).toEqual(2);


  });
  test('he head property will properly point to the first node in the linked list', () => {
    let l3 = new LinkedList();
    l3.insert(2);
    l3.insert(3);
    expect(l3.head.value).toEqual(3);
  });
  test('Can properly insert multiple nodes into the linked list', () => {
    let l4 = new LinkedList();
    l4.insert(1);
    l4.insert(2);
    l4.insert(3);

    expect(l4.head.value).toEqual(3);
    expect(l4.head.next.value).toEqual(2);
    expect(l4.head.next.next.value).toEqual(1);


  });
  test('Will return true when finding a value within the linked list that exists', () => {
    let l4 = new LinkedList();
    l4.insert(1);
    l4.insert(2);
    l4.insert(3);
    let result=l4.includes(2);

    expect(result).toEqual(true);
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let l4 = new LinkedList();
    l4.insert(1);
    l4.insert(2);
    l4.insert(3);
    let result=l4.includes(5);

    expect(result).toEqual(false);
  });
  test('Will return false when searching for a value in the linked list that does not exist', () => {
    let l4 = new LinkedList();
    l4.insert(1);
    l4.insert(2);
    l4.insert(3);
    let result= l4.toString();

    expect(result).toEqual("{3} ->{2} ->{1} ->NULL");
  });



});
