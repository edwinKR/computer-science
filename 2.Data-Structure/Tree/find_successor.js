class BSTNode {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  addToLeft(value) {
    this.left = new BSTNode(value);
    this.left.parent = this;
    return this.left;
  }

  addToRight(value) {
    this.right = new BSTNode(value);
    this.right.parent = this;
    return this.right;
  }
}

// Create sample BST with parents on each node
const theBSTRoot = new BSTNode(10);
const a = theBSTRoot.addToLeft(3);
const b = theBSTRoot.addToRight(30);

const c = a.addToLeft(2);
const d = a.addToRight(7);
const e = b.addToLeft(20);
const f = b.addToRight(50);

const g = d.addToLeft(5);
const h = d.addToRight(9);

//Helper function: Traversing to get the left most leaf child node
function findLeftMostChildNode(node) {
  if (!node) return null;

  while (node.left) {
    node = node.left;
  }

  return node;
}

// Find next successor node (In-order-Traversal)
function findSuccessor(node) {
  if (!node) return null;

  if (node.right) {
    return findLeftMostChildNode(node.right);
  }

  let currentNode = node;
  let parentNode = currentNode.parent;
  while (parentNode && parentNode.right === currentNode) {
    currentNode = parentNode;
    parentNode = currentNode.parent;
    if (!parentNode) return null;
  }

  if (parentNode.left === currentNode) {
    return parentNode;
  }
}

const resultForH = findSuccessor(h);
console.log("result h node >>  ", resultForH.value);

const resultForG = findSuccessor(g);
console.log("result g node >>  ", resultForG.value);

const resultForF = findSuccessor(f);
console.log("result f node >>  ", resultForF);

const resultForD = findSuccessor(d);
console.log("result d node >>  ", resultForD.value);

const resultForC = findSuccessor(c);
console.log("result c node >>  ", resultForC.value);
