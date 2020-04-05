// Build tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function createMinBST(arr) {
  if (!arr.length) {
    return null;
  }

  const rootNode = new Node(arr[0]);
  const queue = [rootNode];
  let idx = 1;

  while (queue.length) {
    const currentNode = queue.shift();

    if (arr[idx]) {
      const leftNode = new Node(arr[idx]);
      queue.push(leftNode);
      currentNode.left = leftNode;
      idx++;
    }

    if (arr[idx]) {
      const rightNode = new Node(arr[idx]);
      queue.push(rightNode);
      currentNode.right = rightNode;
      idx++;
    }
  }
  return rootNode;
}

/* TEST */
const arr1 = [1, 2, 3, 4, 5, 6];
const tree1 = createMinBST(arr1);
console.log("tree1===>", tree1);

const arr2 = [1, 2, 3, 4, 5, 6, 7];
const tree2 = createMinBST(arr2);
console.log("tree2====>", tree2);
