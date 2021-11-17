'use strict';
let DuckDuckGoose = function(queue, k){
  let counter = 0;
  while(counter < k-1){
    queue.push(queue.shift());
    counter++;
  }
  if(queue.length > 1){
    queue.shift();

  }

  return queue.length === 1 ? queue[0] : DuckDuckGoose(queue, k);
};


module.exports=DuckDuckGoose;
