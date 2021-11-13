

const centuryFromYear= n =>{
  let sum=0
if(n%100>0){
  return Math.floor(n/100+1)
}else {
  return Math.floor(n/100)
}

};
console.log(centuryFromYear(1800));