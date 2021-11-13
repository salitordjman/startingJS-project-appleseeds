

const PerfectSquare=x=>(
 (Number.isInteger(Math.sqrt(x)))?Math.pow(Math.sqrt(x)+1,2):-1
)

console.log(PerfectSquare(114));