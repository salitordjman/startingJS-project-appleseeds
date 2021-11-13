const abbreviateTwoWords=(str)=>{
  let str2=[];
 for(let x=0; x<str.length;x++){
   if(str[x]===" "){ str2=str[0].toUpperCase() + "." + str[x+1].toUpperCase();}
  }
  return str2
}
console.log(abbreviateTwoWords("gheg ggfgf"));