class Node {
  constructor(node, left, right) {
    this.value = node;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.head = null;
  }

  insert(node) {
    const newNode = new Node(node);

    if (!this.head) {
      this.head = newNode;
      return;
    }
    let currentNode = this.head;
    while (currentNode) {
      if (newNode.value < currentNode.value) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return this;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          break;
        } else {
          currentNode.right;
        }
      }
    }
  }

  lookup(node) {
    if (!this.head) return false;

    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === node) {
        return true;
      } else if (currentNode.value < node) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }
    return false;
  }

  remove() {}
}

const Tree1 = new BinarySearchTree();
Tree1.insert(10);
Tree1.insert(9);
Tree1.insert(5);
Tree1.insert(14);
//       10
//     /    \
//    9      14
//   /
//  5
Tree1.lookup(11); // false
Tree1.lookup(14); // true
