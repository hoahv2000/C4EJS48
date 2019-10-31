// let add = function (a, b){
//     return a + b;
// }

// let subtract = function(a, b){
//   return a - b;
// }

// let multiple = function(a, b){
//   return a * b;
// } 

function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiple(a,b){
    return a * b;
}
function excuteOperator(a, b, fn){
    console.log(fn);
  }
  
  function excuteOperator1(a, b){
    excuteOperator(a, b, add(a, b));
  }
  excuteOperator1(3, 4, add(3, 4));
  
  function excuteOperator2(a, b){
    excuteOperator(a, b, subtract(a, b))
  }
  excuteOperator2(7, 3, subtract(7, 3));
  
  function excuteOperator3(a, b){
    excuteOperator(a, b, multiple(a, b));
  }
  excuteOperator3(3, 4, multiple(3, 4));