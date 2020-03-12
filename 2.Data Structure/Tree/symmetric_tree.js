// Build tree node
class Node {
  constructor(value) {
    this.value = value;
    this.left = this.right = null;
  }
}

// Build Binary Tree
class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);

    // If tree root is empty, in other words, brand new.
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Placing the node into the right position of the tree.
      this.insertNodeToTree(this.root, newNode);
    }
    return this.root;
  }

  // Helper Methods
  insertNodeToTree(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      if (currentNode.left === null) {
        // If currentNode's left child node is empty(null)
        currentNode.left = newNode;
        return;
      } else {
        // If currentNode's left child node exists.
        this.insertNodeToTree(currentNode.left, newNode);
        return;
      }
    } else {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      } else {
        this.insertNodeToTree(currentNode.right, newNode);
        return;
      }
    }
  }
}

// Create a tree
const theTree = new BinaryTree();
const listOfValues = [10, 3, 30, 2, 9, 7, 5, 20, 50];
function generateTree(listOfValues) {
  listOfValues.forEach(value => {
    theTree.insert(value);
  });
}
generateTree(listOfValues);

// Insert a node into the tree.
theTree.insert(8);
console.log(theTree.root.left.right);
