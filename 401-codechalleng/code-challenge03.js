let arr=[3,6,9,12,15];

function BinarySearch(arr,num){
  let result;
  for(let i=0;i<arr.length;i++){
    if (arr[i]===num) {
      return arr.indexOf(arr[i]);

    }else{
      result=-1;
    }
  }
  return result;
}


console.log(BinarySearch(arr,9));
