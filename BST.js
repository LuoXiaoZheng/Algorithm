/**
 * Created by eleven on 2017/9/20.
 */
class Node{
    constructor(key, value, left, right){
        this.key = key;
        this.value = value;
        this.left = left;
        this.right = right;
    }

}
//二分搜索树
class BST{
    constructor(){
        this.root = null;
    }

    insert(key, value){
        this.root = _insert(this.root, key, value);
    }

    //插入
    _insert(node, key, value){
        if(!node){
            return new Node(key,value,null,null)
        }
        if(key === node.key){
            node.value = value;
        }else if(key > node.key){
            node.right = _insert(node.right, key, value);
        }else {
            node.left = _insert(node.left, key, value);
        }
        return node;
    }

    //是否包含key
    contain(key){
        return _contain(this.root,key);
    }

    _contain(node, key){
        if(!node){
            return false;
        }
        if(key === node.key){
            return true;
        }else if(key > node.key){
           return _contian(node.right,key);
        }else {
            return _contian(node.left,key);
        }
    }

    //返回对应key的value
    search(key){
        return _search(this.root,key);
    }

    _search(node, key){
        if (!node){
            return null;
        }

        if (key === node.key){
            return node.value;
        }else if (key > node.key){
            return _search(node.right,key);
        }else{
            return _search(node.left, key)
        }
    }

    //前序遍历
    preOrder(){
        _preOrder(this.root);
    }

    _preOrder(node){
        if (!node){
            console.log(node.key);
            _preOrder(node.left);
            _preOrder(node.right);
        }
    }

    //中序遍历
    inOrder() {
        _inOrder(this.root);
    }

    _inOrder(node){
        if (!node){
            _inOrder(node.left);
            console.log(node.key);
            _inOrder(node.right);
        }
    }

    //后序遍历
    postOrder(){
        _postOrder(this.root);
    }

    _postOrder(node){
        _postOrder(node.left);
        _postOrder(node.right);
        console.log(node.key);
    }

    //二分搜索树广度优先遍历（层序遍历）
    levelOrder(){
        _levelOrder(this.root);
    }

    _levelOrder(node){
        //队列
        let arr = [];
        if(!node){
            arr.push(node);
            while (arr.length !== 0){
                var currentNode = arr.shift();
                console.log(currentNode.key);
                if(!currentNode.left){
                    arr.push(currentNode.left);
                }
                if (!currentNode.right){
                    arr.push(currentNode.right)
                }
            }
        }
    }

    //返回二分搜索树中的最小键值
    minimum(){
        if(this.root){
            let node = _minimum(this.root);
            return node.key;
        }
        return null;
    }

    _minimum(node){
        if (!node.left){
            return node;
        }
        return _minimum(node.left);
    }

    //返回二分搜索树中最大键值
    maximum(){
        if(this.root){
            let node = _maximum(this.root)
            return node.key;
        }
        return null;
    }

    //以node为根节点的的二叉搜索树，返回最大键值得节点
    _maximum(node){
        if(!node.right){
            return node;
        }
        return _maximum(node.right);
    }

    removeMin(){
        if(this.root){
            _removeMin(this.root);
        }
    }

    //删除以node为根节点的二叉搜索树的最小键值
    //返回删除节点后的新的二叉树的根
    _removeMin(node){
        if (!node.left){
            let rightNode = node.right;
            node = null;
            return rightNode;
        }

        node.left =  _removeMin(node.left);
        return node;
    }

    removeMax(){
        if(this.root){
            _removeMax(this.root);
        }
    }

    _removeMax(node){
        if(!node.right){
            let leftNode = node.left;
            node = null;
            return leftNode;
        }

        node.right =_removeMax(node.right);
        return node;
    }

    remove(key){
        _remove(this.root,key);
    }

    _remove(node, key){
        if(!node){
            return null;
        }
        if(key < node.key){
            node.left = _remove(node.left, key);
            return node;
        }else if(key > node.key){
            node.right = _remove(node.right, key);
        }else{
            if(!node.left){
                let rightNode = node.right;
                node = null;
                return rightNode;
            }

            if(!node.right){
                let leftNode = node.left;
                node = null;
                return leftNode;
            }

            let successor = Object.assign(mininum(node.right));
            successor.left = node.left;
            successor.right = _removeMin(node.right);
            node = null;
            return successor;
        }
    }
}