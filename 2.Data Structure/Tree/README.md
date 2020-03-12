**Tree**

- A tree is a collection of "NODES" connected by some edges.
- It's a "non-linear" data structure.

**Binary Tree**

- A tree where a node can have a maximum of two children.

**Binary Search Tree**

- A binary tree where:
  - node.left.value < node.value
  - node.right.value > node.value
- During interviews, most likely we will assume that there is a given Balanced Binary Search Tree.
  - insert(): Time O(log n)
  - find(): Time O(log n)

**Unbalanced(skewed) Tree**

- insert(): Time O(h)
- find(): Time O(h)

**Traversing through a binary search tree**
**_3 Common ways to do so._**

- In-order
  - Left nodes -> Current(root) node -> Right nodes
- Pre-order
  - Current(root) node -> Left nodes -> Right nodes
- Post-order

  - Left nodes -> Right nodes -> Current(root) node

- Typyically in Binary Search Trees, you want to do a "In-order Traversal" Why?
  - This would then allow to print nodes in order.
  - Example: root would be 2, left child would be 1, right child would be 3
