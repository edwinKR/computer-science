const { BinaryTree, theTree2 } = require("./balanced_binary_tree");

class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      // console.log("After loop: ", currentNode);
      currentNode.next = newNode;
    }
    return;
  }
}

function generateListFromBinaryTree(root) {
  if (!root) return null;

  const queue = [root];
  let depth = 0;
  const hashMap = new Map();

  while (queue.length) {
    const currentDepthList = [...queue];

    depth++;
    const currentLinkedList = new LinkedList();

    hashMap.set(depth, currentLinkedList);

    for (let i = 0; i < currentDepthList.length; i++) {
      const currentNodeToAdd = currentDepthList[i];
      const currentValue = currentNodeToAdd.value;
      currentLinkedList.add(currentValue);

      const currentQueueNode = queue.shift();

      if (currentQueueNode.left) {
        queue.push(currentQueueNode.left);
      }

      if (currentQueueNode.right) {
        queue.push(currentQueueNode.right);
      }
    }
  }

  return hashMap;
}

const testResult2 = generateListFromBinaryTree(theTree2.root);
console.log("testResult >>>>>>>>>>", testResult2);
console.log("testing depth 3=================");
console.log(testResult2.get(3).head.next.next);
