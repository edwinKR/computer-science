const { BinaryTree, theTree2 } = require("./balanced_binary_tree");

class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

function isBST(root) {
  if (!root) return true;

  if (
    (root.left && root.value < root.left.value) ||
    (root.right && root.value > root.right.value)
  ) {
    return false;
  }

  const isGoodLeft = isBST(root.left);
  const isGoodRight = isBST(root.right);

  return isGoodLeft && isGoodRight;
}

const result1 = isBST(theTree2.root);
console.log("Result1: Validating BST >>> ", result1);

const theTree3 = new BinaryTree();
theTree3.insert(10);
theTree3.insert(3);
theTree3.insert(30);
theTree3.insert(2);
theTree3.insert(7);
theTree3.insert(50);
theTree3.insert(20);
theTree3.root.right.left.value = 100;

console.log(theTree3.root.right);
const result2 = isBST(theTree3.root);
console.log("Result2: Validating BST >>> ", result2);
