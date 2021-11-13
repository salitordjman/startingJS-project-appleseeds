arr= [[10, 0],[5,8], [0, 4]];
const bus= (arr) =>{
  let p=0
//  for(let c=0;c<arr.length;c++){
//    p+=arr[c][0];
//    p-=arr[c][1];
//  }
//  for(let c of arr){
//    p+=c[0];
//    p-=c[1];
//  }
arr.forEach(c => {
  p+=c[0];
  p-=c[1];
});
 if(p>=0){
   return p
 }else{
  return 0
}
};
console.log(bus(arr));