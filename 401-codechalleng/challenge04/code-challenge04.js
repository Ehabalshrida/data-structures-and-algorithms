'use strict';

let arr= [ [0, 1, 2], [3, 4, 5], [6, 7, 8] ];


function calculate (arr){
  let newArr=[];
  arr.forEach((item)=>{
    let sum=0;
    item.forEach(num=>{
      sum=sum+num;
    });
    newArr.push(sum);
  });


  return newArr;
}

console.log(calculate(arr));
