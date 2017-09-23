"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by eleven on 17-6-26.
 */
// import utils from "./ioUtils.js";

//随机生成指定范围和数量的数组
var generatorRandomArray = function generatorRandomArray(n, rangeL, rangeR) {
    var randomArray = [];
    for (var i = 0; i < n; i++) {
        var num = Math.random() * (rangeR - rangeL + 1) + rangeL;
        randomArray.push(num.toFixed(2));
    }
    return randomArray;
};
//打印输出
var printResult = function printResult(arr) {
    return arr.join(" ");
};
//测试算法性能
var testSort = function testSort(sortName, sortFn, array) {
    var startTime = new Date().getTime();
    sortFn(array);
    var endTime = new Date().getTime();

    console.log(sortName + ":" + (endTime - startTime) + "ms");
};

var array = generatorRandomArray(10, 1, 1000);
//console.log(printResult(array));

//冒泡排序
var bubleSort = function bubleSort(array) {
    for (var i = 0; i < array.length; i++) {
        var flag = true;
        for (var j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + q]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
};

//选择排序
var selectionSort = function selectionSort(array) {
    for (var i = 0; i < array.length; i++) {
        var minIndex = i;
        for (var j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
                minIndex = j;
            }
        }
        var _ref = [array[minIndex], array[i]];
        array[i] = _ref[0];
        array[minIndex] = _ref[1];
    }
    return array;
};

// console.log("after sort", printResult(selectionSort(array)));
//testSort('selectionSort', selectionSort, array);


//插入排序
var insertSort = function insertSort(array) {
    for (var i = 1; i < array.length; i++) {
        //要插入的副本
        var copy = array[i];
        //j表示要插入的位置
        var j = void 0;
        for (j = i; j > 0; j--) {
            if (copy < array[j - 1]) {
                array[j] = array[j - 1];
            } else {
                break;
            }
        }
        array[j] = copy;
    }
    return array;
};

//归并排序（当n小到一定程序的时候，插入排序和归并排序性能要好）
var mergeSort = function mergeSort(array) {
    __mergeSort(array, 0, array.length - 1);
    return array;
};

function __mergeSort(array, l, r) {
    if (l >= r) return;
    //对于小数组使用插入排序
    // if ((l - r) < 15){
    //     insertSort(array)
    // }
    var mid = Math.floor((l + r) / 2);
    __mergeSort(array, l, mid);
    __mergeSort(array, mid + 1, r);
    //近乎有序数据
    if (array[mid] > array[mid + 1]) {
        merge(array, l, mid, r);
    }
}

function merge(array, l, mid, r) {
    var aux = array.slice(l, r + 1);
    var i = l,
        j = mid + 1;
    for (var k = l; k <= r; k++) {

        if (i > mid) {
            array[k] = aux[j - l];
            j++;
        } else if (j > r) {
            array[k] = aux[i - l];
            i++;
        } else if (aux[i - l] < aux[j - l]) {
            array[k] = aux[i - l];
            i++;
        } else {
            array[k] = aux[j - l];
            j++;
        }
    }
}

//快速排序
var quickSort = function quickSort(array) {
    __quickSort(array, 0, array.length - 1);
    return array;
};

function __quickSort(array, l, r) {

    if (l >= r) return;
    //插入排序优化
    // if((l-r)<15){
    //     insertSort(array);
    //     return;
    // }
    var p = __partition(array, l, r);
    __quickSort(array, l, p - 1);
    __quickSort(array, p + 1, r);
}

function __partition(array, l, r) {
    //i指小于array[l]的部分最后索引，j指大于array[l]的部分最后索引
    // 自己根据思想写的
    // let j,i = l;
    // for(let k = l + 1; k <= r; k++){
    //     if (array[k] < array[l]){
    //         [array[k],array[j+1]] = [array[j+1], array[k]];
    //         j++;
    //     }else {
    //         array[i+1] = array[k];
    //         i++;
    //     }
    // }
    //更加简便的写法
    var j = l;
    var randomIndex = Math.random() * (r - l + 1) + l;
    [array[l], array[randomIndex]];
    var v = array[l];
    for (var i = l + 1; i <= r; i++) {
        if (array[i] < v) {
            var _ref2 = [array[j + 1], array[i]];
            array[i] = _ref2[0];
            array[j + 1] = _ref2[1];

            j++;
        }
    }
    var _ref3 = [array[j], array[l]];
    array[l] = _ref3[0];
    array[j] = _ref3[1];

    return j;
}

//堆排序

var MaxHeap = function () {
    function MaxHeap() {
        _classCallCheck(this, MaxHeap);

        this.data = [];
        this.count = 0;
    }

    _createClass(MaxHeap, [{
        key: "insert",
        value: function insert(item) {
            this.data[this.count + 1] = item;
            this.count++;
            this.shiftup(this.count);
        }
    }, {
        key: "extractMax",
        value: function extractMax() {
            var max = this.data[1];
            this.data[1] = this.data[this.count];
            this.count--;
            this.shiftdown(1);
            return max;
        }
    }, {
        key: "isEmpty",
        value: function isEmpty() {
            return this.count === 0;
        }
    }, {
        key: "shiftup",
        value: function shiftup(count) {
            while (count > 1 && parseFloat(this.data[Math.floor(count / 2)]) < parseFloat(this.data[count])) {
                var _ref4 = [this.data[count], this.data[Math.floor(count / 2)]];
                this.data[Math.floor(count / 2)] = _ref4[0];
                this.data[count] = _ref4[1];

                count = Math.floor(count / 2);
            }
        }
    }, {
        key: "shiftdown",
        value: function shiftdown(k) {
            while (2 * k < this.count) {
                var j = 2 * k; //在本轮循环中，data[k]和data[j]交换位置
                if (j + 1 <= this.count && parseFloat(this.data[j + 1]) > parseFloat(this.data[j])) {
                    j++;
                }
                if (parseFloat(this.data[k]) > parseFloat(this.data[j])) {
                    break;
                }
                var _ref5 = [this.data[j], this.data[k]];
                this.data[k] = _ref5[0];
                this.data[j] = _ref5[1];

                k = j;
            }
        }
    }]);

    return MaxHeap;
}();

// for(let i=0; i<10; i++){
//     maxHeap.insert((Math.random()*100).toFixed(2));
// }
// console.log(maxHeap.data);
// printResult(maxHeap.data);

var heapSort = function heapSort(array) {
    var maxHeap = new MaxHeap();
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
        for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            value = _step.value;

            maxHeap.insert(value);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    var length = array.length;
    array = [];
    for (var i = 0; i < length; i++) {
        array.unshift(maxHeap.extractMax());
    }
    return array;
};

var heapSort2 = function heapSort2(array) {
    var maxHeap = new MaxHeap();
    for (var i = 0; i < array.length; i++) {
        maxHeap.data[i + 1] = array[i];
    }
    maxHeap.count = array.length;
    for (var j = Math.floor(maxHeap.count / 2); j > 1; j--) {
        maxHeap.shiftdown(j);
    }

    var length = array.length;
    array = [];
    for (var _i = 0; _i < length; _i++) {
        array.unshift(maxHeap.extractMax());
    }
    return array;
};

console.log("after sort", printResult(heapSort2(array)));
//testSort('selectionSort', selectionSort, Object.assign([],array));
//testSort('insertSort', insertSort, Object.assign([],array));
//testSort('mergeSort', mergeSort, Object.assign([],array));
//testSort('quckSort', quickSort, Object.assign([],array));
//# sourceMappingURL=selectionSort.js.map