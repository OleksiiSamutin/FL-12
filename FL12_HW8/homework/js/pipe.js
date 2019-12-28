function addOne(x) {
    return x + 1;
  }

function multiplyThree(x) {
    return x * 3;
  }
function pipe(number){
    let tempResult = number;
    let result = null;
    for (let i = 1; i<arguments.length;i++){
        result = arguments[i](tempResult)
        tempResult = result;

    }
  return result;
}
console.log(pipe(1,addOne,addOne,multiplyThree))