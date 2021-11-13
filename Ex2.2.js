let arr = [0, 0, 0, 1];
let arr1 = [0, 0, 1, 0];
let arr2 = [0, 1, 0, 1];
let arr3 = [1, 0, 0, 1];
let arr4 = [0, 0, 1, 0];
let arr5 = [0, 1, 1, 0];
let arr6 = [1, 1, 1, 1];
let arr7 = [1, 0, 1, 1];
binarNum=arr=>{
  let sum =0
  for(let i=arr.length-1, b=0; i>=0 ; i--,b++){
    sum+=(Math.pow(2, b)*arr[i]);
    console.log(arr[i]);

  }
  return sum;
}
console.log(binarNum(arr7));