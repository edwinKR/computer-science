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

  insert(value) {
    const newNode = new Node(value);

    // If tree root is empty, in other words, brand new.
    if (this.root === null) {
      this.root = newNode;
    } else {
      // Placing the node into the right position of the tree.
      this.insertNodeToTree(this.root, newNode);
    }

    return this.root;
  }

  remove(value) {
    this.removeNodeFromTree(this.root, value);
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

  // Depth-First-Search(DFS) Traversal Approaches
  // DFS#1: In-order Traversal - Traverse left subtree of current node -> Visit current(root) node -> Traverse right subtree of current nodes
  printInOrder(currentNode) {
    if (currentNode !== null) {
      this.printInOrder(currentNode.left);
      console.log(currentNode.value);
      this.printInOrder(currentNode.right);
    }
    return;
  }

  // DFS#2: Pre-order Traversal - Visit current(root) node -> Traverse left subtree of current node -> Traverse right subtree of current nodes
  printPreOrder(currentNode) {
    if (currentNode !== null) {
      console.log(currentNode.value);
      this.printPreOrder(currentNode.left);
      this.printPreOrder(currentNode.right);
    }
    return;
  }

  // DFS#3: Post-order Traversal - Traverse left subtree of current node -> Traverse right subtree of current nodes -> Visit current(root) node
  printPostOrder(currentNode) {
    if (currentNode !== null) {
      this.printPostOrder(currentNode.left);
      this.printPostOrder(currentNode.right);
      console.log(currentNode.value);
    }
    return;
  }

  // Breadth-First-Search(BFS) Traversal Approach
  printBFS(currentNode) {
    const result = [];

    if (currentNode === null) {
      return result;
    }

    // The queue keeps track of the nodes to be ran as traversing through the tree.
    const queue = [currentNode];
    while (queue.length > 0) {
      // When done with traversing through each node of the entire tree, there is no more nodes to run and the queue should be empty.
      const currentQueueSize = queue.length;

      for (let i = 0; i < currentQueueSize; i++) {
        // Pop out the very first node to be ran in the queue.
        const currentNodeToObserve = queue.shift();
        // Push the the value of the node.
        result.push(currentNodeToObserve.value);

        if (currentNodeToObserve.left) {
          // If there's a sub-node(left child node), then that node should be pushed into the queue.
          queue.push(currentNodeToObserve.left);
        }

        if (currentNodeToObserve.right) {
          // If there's a sub-node(right child node), then that node should be pushed into the queue.
          queue.push(currentNodeToObserve.right);
        }
      }
    }
    console.log(result);
    return result;
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
// console.log(theTree.root);

// DFS Traversals
theTree.printInOrder(theTree.root);
theTree.printPreOrder(theTree.root);
theTree.printPostOrder(theTree.root);

// BFS Traversals
theTree.printBFS(theTree.root);
