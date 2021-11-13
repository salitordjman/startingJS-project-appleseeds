const shortestWords=(str)=>{
let str2=str.split(' ');
let minS=1000000000;
let minWord="";
for (let i = 0; i < str2.length; i++) {
  if (str2[i].length < minS) {
    minS = str2[i].length;
    minWord= str2[i];
  }
}
return minWord;

// let str2 = str.split(" ").sort((a, b) => a.length- b.length);
// return str2[0]
}
console.log(shortestWords("dddd aaab eeee dd fff aaaa"));