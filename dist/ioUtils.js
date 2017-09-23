"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by eleven on 17-6-26.
 */

var generatorRandomArray = function generatorRandomArray(n, rangeL, rangeR) {
    var randomArray = [];
    for (var i = 0; i < n; i++) {
        var num = Math.random() * (rangeR - rangeL + 1) + rangeL;
        randomArray.push(num.toFixed(2));
    }
    return randomArray;
};

var printResult = function printResult(arr) {
    console.log(arr.join(" "));
};

exports.default = {
    generatorRandomArray: generatorRandomArray,
    printResult: printResult
};


console.log(printResult(generatorRandomArray(10, 100, 1000)));

//对象解构
var node = {
    type: "a",
    name: "b"
};

var type = node.type,
    name = node.name;


console.log(type);
//# sourceMappingURL=ioUtils.js.map