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

  add(node) {
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
}

const Tree1 = new BinarySearchTree();
Tree1.add(10);
Tree1.add(9);
Tree1.add(5);
Tree1.add(14);
console.log(Tree1);
