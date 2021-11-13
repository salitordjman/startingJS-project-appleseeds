const toWeirdCase=(str)=>{
  let str2=[];
 for(let x=0; x<str.length;x++){
   if(str[x]===" "){ 
     str2[x]=' ';
    }else{

     str2[x]=str[x].toUpperCase()

     if(str[x+1]!==" "){
     str2[x+1]=str[x+1]
     x++;
     }
    }
     }
     str2= str2.join('')
  return str2
}

console.log(toWeirdCase("theg fgfgf aaaqqq"));