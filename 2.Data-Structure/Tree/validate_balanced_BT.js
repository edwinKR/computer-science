const { theTree2 } = require("./balanced_binary_tree");

// Time Complexity: O(n) where n is # of nodes
// Space Complexity: O(h)

function isHeightBalancedBT(root) {
  if (!root) return false;

  return checkHeight(root) !== Number.MIN_SAFE_INTEGER;
}

function checkHeight(root) {
  if (root === null) return -1;

  const leftHeight = checkHeight(root.left);
  const rightHeight = checkHeight(root.right);

  // Check the validity of current node's subtree. Are they balanced?
  if (
    leftHeight === Number.MIN_SAFE_INTEGER ||
    rightHeight === Number.MIN_SAFE_INTEGER
  ) {
    return Number.MIN_SAFE_INTEGER;
  }

  const heightDifference = Math.abs(leftHeight, rightHeight);

  // If the height difference of current node's subtrees are bigger than 1, it is no longer balanced.
  if (heightDifference > 1) {
    return Number.MIN_SAFE_INTEGER;
  }

  return Math.max(leftHeight, rightHeight) + 1;
}

const result = isHeightBalancedBT(theTree2.root);
console.log(result);
