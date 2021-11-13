
const tribonacci= ([arrA,arrB,arrC],n) =>{
  let res=[];
  if(n<=0){
    console.log('only 1+');
  }else{
    console.log(res[0]=arrA);
      console.log(res[1]=arrB);
        console.log(res[2]=arrC);
    
    for(let d=3;d<n;d++){
      res[d]=res[d-1]+res[d-2]+res[d-3];
      console.log(res[d]);
    }
  }
    
  };
  tribonacci([5,1,1],10);