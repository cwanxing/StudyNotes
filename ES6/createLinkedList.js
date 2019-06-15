/**
 * Created by Administrator on 2019/5/26 0026.
 */
function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head') // 为链表添加头节点
}

LList.prototype = {
    // 查询某一个链表节点
    find: function(item){
        var currNode = this.head;
        while(currNode.element != item){
            currNode = currNode.next;
        }
        return currNode;
    },

    // 向某个节点后插入一个节点
    insert:function(newElement, item){
        var newNode = new Node(newElement);
        var current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    },

    // 查找某一个节点的前一个节点【前驱】
    findPrevious:function(item){
        var currNode = this.head;
        while(!(currNode.next == null) && (currNode.next.element != item)){
            currNode = currNode.next;
        }
        return currNode;
    },

    // 删除某个节点
    remove:function(item){
        var prevNode = this.findPrevious(item);
        if(!(preNode.next == null)){
            prevNode.next = prevNode.next.next;
        }
    },

    // 修改某个节点数据
    edit:function(item, newItem){
        var element = this.find(item);
        element.element = newItem;
    },

    // 控制台打印链表
    display:function(){
        var currNode = this.head;
        while(!(currNode.next == null)){
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    }
};