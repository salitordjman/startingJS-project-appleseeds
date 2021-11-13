const shortestWords2=(str)=>{
  let str2=str.split(' ');
  let maxS=0;
  let maxWord="";
  for (let i = 0; i < str2.length; i++) {
    if (str2[i].length > maxS) {
      maxS = str2[i].length;
      maxWord= str2[i];
    }
  }
  return maxWord;
  
  // let str2 = str.split(" ").sort((a, b) => a.length- b.length);
  // return str2[(str2.length-1)];
  }
  console.log(shortestWords2("dddd aab rgdrgdd eeedfgbdfgde dd fff aadddaa"));