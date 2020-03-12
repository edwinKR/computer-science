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

  remove(val) {
    this.removeNodeFromTree(this.root, val);
    return this.root;
  }

  // Helper Methods
  insertNodeToTree(currentNode, newNode) {
    if (newNode.value < currentNode.value) {
      // If newNode value is less than the current node's value.
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
      // If newNode value is larger/equal than the current node's value.
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return;
      } else {
        this.insertNodeToTree(currentNode.right, newNode);
        return;
      }
    }
  }

  removeNodeFromTree(currentNode, value) {
    // If root is empty(null)
    if (currentNode === null) return null;

    // Search through the children nodes to find the node with the same value.
    // Decide which node(left vs right) to traverse
    if (value < currentNode.value) {
      // Traverse through the left subtree
      this.removeNodeFromTree(currentNode.left, value);
      return;
    } else if (value > currentNode.value) {
      // Traverse through the right subtree
      this.removeNodeFromTree(currentNode.right, value);
      return;
    } else {
      // If node with the value is found.
      // Case #1: No children
      if (currentNode.left === null && currentNode.right === null) {
        currentNode = null;
        return;
      }

      // Case #2: Only one child
      if (currentNode.left === null) {
        currentNode = currentNode.right;
        return;
      }
      if (currentNode.right === null) {
        currentNode = currentNode.left;
        return;
      }

      // Case #3: Two children
      // Find minimum value Node of the currentNode subtree.
      let minimumValueNode = this.findMinValueNode(currentNode);
      currentNode.value = minimumValueNode.value;
      minimumValueNode = null;
      return;
    }
  }

  findMinValueNode(currentNode) {
    // Base case: When left children of the currentNode does not exist, the currentNode would be the least value.
    if (currentNode.left === null) {
      return currentNode;
    }

    return this.findMinValueNode(currentNode.left);
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
// console.log(theTree.root.left.right);
theTree.insert(4);

// Remove a node from tree.
theTree.remove(9);
console.log(theTree.root);
