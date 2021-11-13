

const nb_year= (p0, precent, aug, p) =>{
  let p1=p0
  let i=0;
  while(p1<p){
  p1+= p1*(precent/100)+ aug;
  i++;
  }
  return i

};
console.log(nb_year(1500000, 2.5, 10000, 2000000));