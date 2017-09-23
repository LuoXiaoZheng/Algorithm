"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by eleven on 2017/9/20.
 */
var Node = function Node(key, value, left, right) {
    _classCallCheck(this, Node);

    this.key = key;
    this.value = value;
    this.left = left;
    this.right = right;
};
//二分搜索树


var BST = function () {
    function BST() {
        _classCallCheck(this, BST);

        this.root = null;
    }

    _createClass(BST, [{
        key: "insert",
        value: function insert(key, value) {
            this.root = _insert(this.root, key, value);
        }

        //插入

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
                return new Node(key, value, null, null);
            }
            if (key === node.key) {
                node.value = value;
            } else if (key > node.key) {
                node.right = _insert(node.right, key, value);
            } else {
                node.left = _insert(node.left, key, value);
            }
            return node;
        })

        //是否包含key

    }, {
        key: "contain",
        value: function contain(key) {
            return _contain(this.root, key);
        }
    }, {
        key: "_contain",
        value: function _contain(node, key) {
            if (!node) {
                return false;
            }
            if (key === node.key) {
                return true;
            } else if (key > node.key) {
                return _contian(node.right, key);
            } else {
                return _contian(node.left, key);
            }
        }

        //返回对应key的value

    }, {
        key: "search",
        value: function search(key) {
            return _search(this.root, key);
        }
    }, {
        key: "_search",
        value: function (_search2) {
            function _search(_x4, _x5) {
                return _search2.apply(this, arguments);
            }

            _search.toString = function () {
                return _search2.toString();
            };

            return _search;
        }(function (node, key) {
            if (!node) {
                return null;
            }

            if (key === node.key) {
                return node.value;
            } else if (key > node.key) {
                return _search(node.right, key);
            } else {
                return _search(node.left, key);
            }
        })

        //前序遍历

    }, {
        key: "preOrder",
        value: function preOrder() {
            _preOrder(this.root);
        }
    }, {
        key: "_preOrder",
        value: function (_preOrder2) {
            function _preOrder(_x6) {
                return _preOrder2.apply(this, arguments);
            }

            _preOrder.toString = function () {
                return _preOrder2.toString();
            };

            return _preOrder;
        }(function (node) {
            if (!node) {
                console.log(node.key);
                _preOrder(node.left);
                _preOrder(node.right);
            }
        })

        //中序遍历

    }, {
        key: "inOrder",
        value: function inOrder() {
            _inOrder(this.root);
        }
    }, {
        key: "_inOrder",
        value: function (_inOrder2) {
            function _inOrder(_x7) {
                return _inOrder2.apply(this, arguments);
            }

            _inOrder.toString = function () {
                return _inOrder2.toString();
            };

            return _inOrder;
        }(function (node) {
            if (!node) {
                _inOrder(node.left);
                console.log(node.key);
                _inOrder(node.right);
            }
        })

        //后序遍历

    }, {
        key: "postOrder",
        value: function postOrder() {
            _postOrder(this.root);
        }
    }, {
        key: "_postOrder",
        value: function (_postOrder2) {
            function _postOrder(_x8) {
                return _postOrder2.apply(this, arguments);
            }

            _postOrder.toString = function () {
                return _postOrder2.toString();
            };

            return _postOrder;
        }(function (node) {
            _postOrder(node.left);
            _postOrder(node.right);
            console.log(node.key);
        })

        //二分搜索树广度优先遍历（层序遍历）

    }, {
        key: "levelOrder",
        value: function levelOrder() {
            _levelOrder(this.root);
        }
    }, {
        key: "_levelOrder",
        value: function _levelOrder(node) {
            //队列
            var arr = [];
            if (!node) {
                arr.push(node);
                while (arr.length !== 0) {
                    var currentNode = arr.shift();
                    console.log(currentNode.key);
                    if (!currentNode.left) {
                        arr.push(currentNode.left);
                    }
                    if (!currentNode.right) {
                        arr.push(currentNode.right);
                    }
                }
            }
        }

        //返回二分搜索树中的最小键值

    }, {
        key: "minimum",
        value: function minimum() {
            if (this.root) {
                var node = _minimum(this.root);
                return node.key;
            }
            return null;
        }
    }, {
        key: "_minimum",
        value: function (_minimum2) {
            function _minimum(_x9) {
                return _minimum2.apply(this, arguments);
            }

            _minimum.toString = function () {
                return _minimum2.toString();
            };

            return _minimum;
        }(function (node) {
            if (!node.left) {
                return node;
            }
            return _minimum(node.left);
        })

        //返回二分搜索树中最大键值

    }, {
        key: "maximum",
        value: function maximum() {
            if (this.root) {
                var node = _maximum(this.root);
                return node.key;
            }
            return null;
        }

        //以node为根节点的的二叉搜索树，返回最大键值得节点

    }, {
        key: "_maximum",
        value: function (_maximum2) {
            function _maximum(_x10) {
                return _maximum2.apply(this, arguments);
            }

            _maximum.toString = function () {
                return _maximum2.toString();
            };

            return _maximum;
        }(function (node) {
            if (!node.right) {
                return node;
            }
            return _maximum(node.right);
        })
    }, {
        key: "removeMin",
        value: function removeMin() {
            if (this.root) {
                _removeMin(this.root);
            }
        }

        //删除以node为根节点的二叉搜索树的最小键值
        //返回删除节点后的新的二叉树的根

    }, {
        key: "_removeMin",
        value: function (_removeMin2) {
            function _removeMin(_x11) {
                return _removeMin2.apply(this, arguments);
            }

            _removeMin.toString = function () {
                return _removeMin2.toString();
            };

            return _removeMin;
        }(function (node) {
            if (!node.left) {
                var rightNode = node.right;
                node = null;
                return rightNode;
            }

            node.left = _removeMin(node.left);
            return node;
        })
    }, {
        key: "removeMax",
        value: function removeMax() {
            if (this.root) {
                _removeMax(this.root);
            }
        }
    }, {
        key: "_removeMax",
        value: function (_removeMax2) {
            function _removeMax(_x12) {
                return _removeMax2.apply(this, arguments);
            }

            _removeMax.toString = function () {
                return _removeMax2.toString();
            };

            return _removeMax;
        }(function (node) {
            if (!node.right) {
                var leftNode = node.left;
                node = null;
                return leftNode;
            }

            node.right = _removeMax(node.right);
            return node;
        })
    }, {
        key: "remove",
        value: function remove(key) {
            _remove(this.root, key);
        }
    }, {
        key: "_remove",
        value: function (_remove2) {
            function _remove(_x13, _x14) {
                return _remove2.apply(this, arguments);
            }

            _remove.toString = function () {
                return _remove2.toString();
            };

            return _remove;
        }(function (node, key) {
            if (!node) {
                return null;
            }
            if (key < node.key) {
                node.left = _remove(node.left, key);
                return node;
            } else if (key > node.key) {
                node.right = _remove(node.right, key);
            } else {
                if (!node.left) {
                    var rightNode = node.right;
                    node = null;
                    return rightNode;
                }

                if (!node.right) {
                    var leftNode = node.left;
                    node = null;
                    return leftNode;
                }

                var successor = Object.assign(mininum(node.right));
                successor.left = node.left;
                successor.right = _removeMin(node.right);
                node = null;
                return successor;
            }
        })
    }]);

    return BST;
}();
//# sourceMappingURL=BST.js.map