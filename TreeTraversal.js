class Node {
  constructor(node) {
    this.value = node;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(node) {
    this.root = null;
  }

  add(node) {
    let newNode = new Node(node);
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.left) {
        currentNode.left = newNode;
        return this;
      } else if (!currentNode.right) {
        currentNode.right = newNode;
        return this;
      } else {
      }
    }
  }
}
