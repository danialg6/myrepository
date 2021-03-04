//refactor
// let compute=function(add,n1,n2){
// return add(n1,n2);
// }
// let add=function(a, b) {
//     return a + b;
//   }
//   console.log(compute(add(1,2),1,1));
//   ////arrow function
  let compute=(add,n1,n2)=>{
    return add(n1,n2);
    }
    let add=(a, b)=> {
        return a + b;
      }
      console.log(compute(add(1,2),1,1));
//       ///normal function
// function compute(add,n1,n2){
//     return add(n1,n2);
// }
// function add(n1,n2){
//     return n1+n2;
// }
console.log(compute(add,2,5));