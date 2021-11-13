
const maskify=(str)=>{
  let str2=[];
  for(let i=0; i<str.length-4;i++){
    str2+='#'
  }
  str2=str2+str.slice(str.length-4)
if(str.length<4){str2=str;}
  return str2
}
console.log(maskify("123456789"));