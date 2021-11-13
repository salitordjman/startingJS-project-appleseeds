const toCamelCase=(str)=>{
  // let str2=[];
//  for(let x=0; x<str.length;x++){
//    if(str[x]==="_"||str[x]==="-"){
//      str2[x]=""; 
//      str2[x+1]=str[x+1].toUpperCase()
//      x++;
//    }else{
  //      str2[x]=str[x];
  //    }
  //    }
  //    str2= str2.join('')
  // return str2



str = str.split('');
str.map((x,i) => { 
  if(x==="_"||x==="-"){
    str[i]='';
    str[i+1]=str[i+1].toUpperCase()
  }
})
str= str.join('')
return str
}

console.log(toCamelCase("the-stealth-warrior"));