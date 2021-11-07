'use strict';

let LinkedList= require('../lb/LinkedList');

describe('LinkedList', () => {
  it('the initial constructor()', () => {
    let newList = new LinkedList();
    expect(newList.head).toBeNull();
    expect(newList.tail).toBeNull();
    expect(newList.length).toEqual(0);
  });
  it('insertBefor()  node', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    newList.append(3);
    newList.insertBefore(2, 5);
    console.log(newList.head.value);
    console.log(newList.head.next.value);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(5);
  });
  it('insertAfter()  node', () => {
    let newList = new LinkedList();
    newList.insert(1);
    newList.append(2);
    newList.append(3);
    newList.insertAfter(1, 4);
    console.log(newList.head.value);
    console.log(newList.head.next.value);
    expect(newList.head.value).toEqual(1);
    expect(newList.head.next.value).toEqual(4);
  });
  it('append()', () => {
    let newList = new LinkedList();
    let initialValue = 'First Item';
    newList.append(initialValue);
    expect(newList.head.value).toEqual(initialValue);

    let anotherOne = 'Second Item';
    newList.append(anotherOne);
    expect(newList.head.next.value).toEqual(anotherOne);
    expect(newList.head.next.next).toBeNull();
    expect(newList.head.value).toEqual(initialValue);
  });});
