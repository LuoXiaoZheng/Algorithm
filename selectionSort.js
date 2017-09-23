/**
 * Created by eleven on 17-6-26.
 */
// import utils from "./ioUtils.js";

//随机生成指定范围和数量的数组
let generatorRandomArray  =  (n, rangeL, rangeR) =>  {
    let randomArray = [];
    for(let i = 0; i < n; i++){
        let num = Math.random()*(rangeR-rangeL+1)+rangeL;
        randomArray.push(num.toFixed(2));
    }
    return randomArray;
}
//打印输出
let printResult = (arr) => {
    return arr.join(" ");

}
//测试算法性能
let testSort = function (sortName,sortFn, array) {
    let startTime = (new Date()).getTime();
    sortFn(array);
    let endTime = (new Date()).getTime();

    console.log(`${sortName}:${endTime-startTime}ms`)
}

let array = generatorRandomArray(10, 1,1000);
//console.log(printResult(array));

//冒泡排序
let bubleSort = function (array) {
    for (let i =0; i < array.length; i++){
        let flag = true;
        for (let j =0; j < array.length - i; j++){
            if(array[j] > array[j+q]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = false;
            }

        }
        if(flag){
            break;
        }
    }
}

//选择排序
let  selectionSort = function (array) {
    for (let i = 0; i < array.length; i++){
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++){
            if (array[j] < array[minIndex]){
                minIndex = j;
            }
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    return array;
}



// console.log("after sort", printResult(selectionSort(array)));
//testSort('selectionSort', selectionSort, array);


//插入排序
let insertSort = function (array) {
    for (let i = 1; i < array.length; i++){
        //要插入的副本
        let copy = array[i];
        //j表示要插入的位置
        let j;
        for(j = i; j > 0; j--){
            if (copy < array[j-1]){
                array[j] = array[j-1]
            }else {
                break;
            }
        }
        array[j] = copy;
    }
    return array;
}





//归并排序（当n小到一定程序的时候，插入排序和归并排序性能要好）
let mergeSort = function (array) {
    __mergeSort(array, 0, array.length-1);
    return array;
}

function __mergeSort(array, l, r) {
    if (l >= r)
        return;
    //对于小数组使用插入排序
    // if ((l - r) < 15){
    //     insertSort(array)
    // }
    let mid = Math.floor((l+r)/2);
    __mergeSort(array, l, mid);
    __mergeSort(array, mid+1, r);
    //近乎有序数据
    if (array[mid] > array[mid+1]){
        merge(array, l, mid, r);
    }
}

function merge(array, l, mid, r) {
    let aux = array.slice(l, r + 1);
    let i = l, j = mid +1;
    for (let k = l; k <= r ; k++){

        if (i > mid) {
            array[k] = aux[j-l];
            j++;
        }else if (j > r){
            array[k] = aux[i-l];
            i++;
        }else if (aux[i-l] < aux[j-l]) {
            array[k] = aux[i-l];
            i++;
        }else {
            array[k] = aux[j-l];
            j++;
        }
    }

}


//快速排序
let quickSort = function (array) {
    __quickSort(array, 0, array.length -1);
    return array;
}

function __quickSort(array, l, r) {

    if (l >= r)
        return;
    //插入排序优化
    // if((l-r)<15){
    //     insertSort(array);
    //     return;
    // }
    let p = __partition(array, l, r);
    __quickSort(array, l, p-1);
    __quickSort(array, p+1, r);
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
    let j = l;
    let randomIndex = Math.random()*(r-l+1)+l;
    [array[l], array[randomIndex]]
    let v = array[l];
    for(let i = l +1; i<=r; i++){
        if (array[i] < v){
            [array[i],array[j+1]] = [array[j+1], array[i]];
            j++;
        }
    }
    [array[l], array[j]] = [array[j],array[l]];
    return j;
    
}


//堆排序
class MaxHeap{
    constructor(){
        this.data = [];
        this.count = 0;
    }

    insert(item) {
        this.data[this.count+1] = item;
        this.count++;
        this.shiftup(this.count);

    }

    extractMax(){
        let max = this.data[1];
        this.data[1] = this.data[this.count];
        this.count--;
        this.shiftdown(1);
        return max;
    }

    isEmpty(){
        return this.count === 0;
    }


    shiftup(count){
        while (count>1 && parseFloat(this.data[Math.floor(count/2)]) < parseFloat(this.data[count])){
            [this.data[Math.floor(count/2)],this.data[count]] = [this.data[count],this.data[Math.floor(count/2)]];
            count = Math.floor(count/2);
        }

    }

    shiftdown(k){
        while (2*k < this.count){
            let j = 2*k; //在本轮循环中，data[k]和data[j]交换位置
            if ( j + 1 <= this.count && parseFloat(this.data[j+1]) > parseFloat(this.data[j])){
                j++;
            }
            if (parseFloat(this.data[k]) > parseFloat(this.data[j])){
                break;
            }
            [this.data[k],this.data[j]] = [this.data[j],this.data[k]];
            k =  j;

        }

    }
}

// for(let i=0; i<10; i++){
//     maxHeap.insert((Math.random()*100).toFixed(2));
// }
// console.log(maxHeap.data);
// printResult(maxHeap.data);

let heapSort = function (array) {
    let maxHeap = new MaxHeap();
    for(value of array){
        maxHeap.insert(value);
    }
    let length = array.length;
    array =[];
    for (let i = 0; i < length; i++){
        array.unshift(maxHeap.extractMax());
    }
    return array;
}

let heapSort2 = function (array) {
    let maxHeap = new MaxHeap();
    for(let i = 0; i < array.length; i++){
        maxHeap.data[i+1] = array[i];
    }
    maxHeap.count = array.length;
    for( let j = Math.floor(maxHeap.count/2); j > 1; j--){
        maxHeap.shiftdown(j);
    }

    let length = array.length;
    array =[];
    for (let i = 0; i < length; i++){
        array.unshift(maxHeap.extractMax());
    }
    return array;

}

console.log("after sort", printResult(heapSort2(array)));
//testSort('selectionSort', selectionSort, Object.assign([],array));
//testSort('insertSort', insertSort, Object.assign([],array));
//testSort('mergeSort', mergeSort, Object.assign([],array));
//testSort('quckSort', quickSort, Object.assign([],array));