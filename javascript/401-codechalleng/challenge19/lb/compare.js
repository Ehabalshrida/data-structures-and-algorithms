'use strict';
let compairtwoTrees= (tree1,tree2)=> {
  if (!tree1.root) {
    return 'tree1 is empty';
  }
  if (!tree2.root) {
    return 'tree2 is empty';
  }
  let count1=0;
  let checking=(node)=>{
    if (node.left) {
      checking(node.left);
    }
    if (node.right) {
      checking(node.right);
    }if (!node.left && !node.right) {
      count1++;
    }
    return count1;
  };
  const x =checking(tree1.root);
  count1=0;
  const y=checking(tree2.root);
  if (x===y) {
    return `Both trees contain ${x} files.`;
  }else{
    return `The first tree has ${x} files, while the second has ${y}.`;
  }
};




module.exports=compairtwoTrees;
