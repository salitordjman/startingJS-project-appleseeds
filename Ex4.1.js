
const fibonacci= (start,n) =>{
let res=[];
switch (start) {
  case 0:
    res[0]=0;
    res[1]=1;
//     for(let d=2;d<n;d++){
//       res[d]=res[d-1]+res[d-2]
//  }
 break;
 case 1:
   res[0]=1;
   res[1]=1;
  //  for(let d=2;d<n;d++){
  //    res[d]=res[d-1]+res[d-2]
  // }
  break;
  default:
    return 'only 0 or 1'
  }
  for(let d=2;d<n;d++){
    res[d]=res[d-1]+res[d-2]
 }

return res[n-1]
};
console.log(fibonacci(1,1));