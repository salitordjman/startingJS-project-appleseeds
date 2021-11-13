let int = [19, 5, 42, 2, 77];
let int1=[10, 343445353, 3453445, 3453545353453]
const min2IntSum = (arr) =>{
let i=[];
i=arr.sort(function(a, b){return a-b});
return (i[0]+i[1])

}
console.log(min2IntSum(int));