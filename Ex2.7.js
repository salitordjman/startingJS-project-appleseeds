

const BasicMathematics= (a,b,c) =>{
  switch (a) {
    case "+":
      sum = b+c;
      break;
    case "-":
      sum = b-c;
      break;
    case "*":
      sum = b*c;
      break;
    case "/":
      sum = b/c;
      break;
  }
  return sum

};
console.log(BasicMathematics('/', 49, 7));