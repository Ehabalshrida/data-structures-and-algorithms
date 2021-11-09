'use strict';
const LinkedList=require('../lb/LinkedList');
describe('LinkedList', () => {});

it('happy case',()=>{
  let newList = new LinkedList();
  let l1=new LinkedList();
  l1.append(1);
  l1.append(2);
  l1.append(3);

  let l2=new LinkedList();
  l2.append(4);
  l2.append(5);
  l2.append(6);
  expect(newList.zipLists(l1,l2).toString()).toEqual('{1} ->{4} ->{2} ->{5} ->{3} ->{6} ->NULL');
});
it('with on list empty',()=>{
  let newList = new LinkedList();
  let l1=new LinkedList();

  let l2=new LinkedList();
  l2.append(1);
  l2.append(2);
  l2.append(3);
  l2.append(4);
  l2.append(5);
  expect(newList.zipLists(l1,l2).toString()).toEqual('{1} ->{2} ->{3} ->{4} ->{5} ->NULL');
});
it('two list with two lengths',()=>{
  let newList = new LinkedList();
  let l1=new LinkedList();
  l1.append(1);
  l1.append(4);
  l1.append(2);
  l1.append(7);
  l1.append(11);
  let l2=new LinkedList();
  l2.append(2);
  l2.append(7);
  l2.append(3);
  expect(newList.zipLists(l1,l2).toString()).toEqual('{1} ->{2} ->{4} ->{7} ->{2} ->{3} ->{7} ->{11} ->NULL');
});
