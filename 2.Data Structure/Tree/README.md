**Tree**

- A tree is a collection of "NODES" connected by some edges.
- It's a "non-linear" data structure.

**Balanced Binary Search Tree**

- During interviews, most likely we will assume that there is a given Balanced Binary Tree.
- insert(): Time O(log n)
- find(): Time O(log n)

**Unbalanced Tree**

- insert(): Time O(n)
- find(): Time O(n)

**Traversing through a tree**
**_3 Common ways to do so._**

- In-order
  - Left nodes -> Current(root) node -> Right nodes
- Pre-order
  - Current(root) node -> Left nodes -> Right nodes
- Post-order

  - Left nodes -> Right nodes -> Current(root) node

- Typyically in Binary Search Trees, you want to do a "In-order Traversal" Why?
  - This would then allow to print nodes in order. (
  - Example: root would be 2, left child would be 1, right child would be 3)
