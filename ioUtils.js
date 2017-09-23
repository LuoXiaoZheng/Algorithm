/**
 * Created by eleven on 17-6-26.
 */

let generatorRandomArray  =  (n, rangeL, rangeR) =>  {
    let randomArray = [];
    for(let i = 0; i < n; i++){
        let num = Math.random()*(rangeR-rangeL+1)+rangeL;
        randomArray.push(num.toFixed(2));
    }
    return randomArray;
}

let printResult = (arr) => {
    console.log(arr.join(" "));

}

export default {
    generatorRandomArray,
    printResult
}

console.log(printResult(generatorRandomArray(10,100,1000)));

//对象解构
let node = {
    type: "a",
    name: "b"
}

let {type, name} = node;

console.log(type);
