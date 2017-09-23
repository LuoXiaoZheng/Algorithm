/**
 * Created by eleven on 2017/9/20.
 */
//顺序数组（链表的数据结构）
class Node{
    constructor(key,value,next){
        this.key = key;
        this.value = value;
        this.next = next;
    }
}

class SequenceST{
    constructor(){
        this.head = null;
    }

    insert(key,value){
        this.head = _insert(this.head, key, value);
    }

    _insert(node, key, value){
        if(!node){
            return new Node(key,value,null);
        }else{
            node.next = _insert(node.next,key,value);
        }
        return node;
    }
}