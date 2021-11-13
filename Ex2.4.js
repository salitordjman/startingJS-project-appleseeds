arr = [1, 1, 1, 2, 1, 1 ];
arr2 = [0, 0, 0.55, 0, 0];


// function findUniq(arr) {
//   let uniq = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//   if (arr[i] !== arr[0]) {
//   uniq = arr[i];
//   }
//   }
//     return uniq;
//   };



const findUniq=arr=>{
  let count=0;
for(i=0;i<arr.length;i++){
  if(arr[i]===Math.min(...arr)){count++;}
}
if(count>1){
  return Math.max(...arr);
}else {
  return Math.min(...arr);
}
};
 console.log(findUniq(arr));