//Hi all this the code for memoization in javascript.

const memoized = (fn)=>{
  const cache={};
  return (...args)=>{
    const argstostr = JSON.stringify(args);
    if(argstostr in cache){
      console.log('returning from cache');
      return cache[argstostr];
    }else{
      console.log('calculating first time');
      const result = fn.apply(this,args);
      cache[argstostr] = result;
      return result;
    }
  }
}
