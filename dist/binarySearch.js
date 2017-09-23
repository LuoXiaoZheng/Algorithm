"use strict";

/**
 * Created by eleven on 2017/9/16.
 */
//非递归的二分查找法
function binarySearch(arr, target) {
    var length = arr.length,
        l = 0,
        r = length - 1;
    while (l <= r) {
        var mid = parseInt(l + (r - l) / 2);
        if (arr[mid] === target) {
            return mid;
        }
        if (arr[mid] > target) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
        return -1;
    }
}

//递归二分查找法
function binarySearch2(arr, target) {
    _findEl(arr, target, 0, arr.length - 1);
}

function _findEl(arr, target, l, r) {
    if (l >= r) {
        return -1;
    }
    var mid = parseInt(l + (r - l) / 2);
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] > target) {
        _findEl(arr, target, l, mid - 1);
    } else {
        _findEl(arr, target, mid + 1, r);
    }
}
//# sourceMappingURL=binarySearch.js.map