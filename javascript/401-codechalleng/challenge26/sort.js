'use strict';
let arr=[8,4,23,42,16,15];

function sortArr(arr) {
  for (let i = 1; i < arr.length; i++) {
    let counter = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > counter; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = counter;
  }
  return arr;
}

console.log(sortArr(arr));

module.exports= sortArr;
