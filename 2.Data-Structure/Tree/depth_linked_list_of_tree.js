const { theTree2 } = require("./balanced_binary_tree");

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

      currentNode.next = newNode;
    }
    return;
  }
}

// BFS Approach: My solution
function BFS_generateListFromBinaryTree(root) {
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

const testResult = BFS_generateListFromBinaryTree(theTree2.root);
console.log("testResult >>>>>>>>>>", testResult);
console.log("testing depth 3=================");
console.log(testResult.get(3).head.next.next);

// BFS Approach: Cracking the Coding Interview Solution
function CCI_BFS_generateListFromBinaryTree(root) {
  if (!root) return null;

  const queue = [root];
  const lists = [];
  root.depth = 0;

  while (queue.length) {
    const currentNode = queue.shift();

    if (!lists[currentNode.depth]) {
      lists[currentNode.depth] = new LinkedList();
    }

    lists[currentNode.depth].add(currentNode.value);

    if (currentNode.left) {
      currentNode.left.depth = currentNode.depth + 1;
      queue.push(currentNode.left);
    }

    if (currentNode.right) {
      currentNode.right.depth = currentNode.depth + 1;
      queue.push(currentNode.right);
    }
  }

  return lists;
}

// DFS Approach using memoization
function DFS_generateListFromBinaryTree(root, lists = [], depthIdx = 0) {
  if (!root) return; // Base Case

  if (!lists[depthIdx]) {
    lists[depthIdx] = new LinkedList();
  }

  lists[depthIdx].add(root.value);

  DFS_generateListFromBinaryTree(root.left, lists, depthIdx + 1);
  DFS_generateListFromBinaryTree(root.right, lists, depthIdx + 1);

  return lists;
}

const testResult2 = DFS_generateListFromBinaryTree(theTree2.root);
console.log("testResult2 >>>>>>>>>>", testResult2);
console.log("testResult2 depth1>>>>>> ", testResult2[1]);
