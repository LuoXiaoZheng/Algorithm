"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by eleven on 2017/9/20.
 */
//顺序数组（链表的数据结构）
var Node = function Node(key, value, next) {
    _classCallCheck(this, Node);

    this.key = key;
    this.value = value;
    this.next = next;
};

var SequenceST = function () {
    function SequenceST() {
        _classCallCheck(this, SequenceST);

        this.head = null;
    }

    _createClass(SequenceST, [{
        key: "insert",
        value: function insert(key, value) {
            this.head = _insert(this.head, key, value);
        }
    }, {
        key: "_insert",
        value: function (_insert2) {
            function _insert(_x, _x2, _x3) {
                return _insert2.apply(this, arguments);
            }

            _insert.toString = function () {
                return _insert2.toString();
            };

            return _insert;
        }(function (node, key, value) {
            if (!node) {
                return new Node(key, value, null);
            } else {
                node.next = _insert(node.next, key, value);
            }
            return node;
        })
    }]);

    return SequenceST;
}();
//# sourceMappingURL=SST.js.map