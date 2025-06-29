  //  how use apply
const list=[2,3,423,45,56]
  const maximum=Math.max.apply(null,list);
   const maximum2=Math.max(...list);

  console.log(maximum)
  console.log(maximum2)