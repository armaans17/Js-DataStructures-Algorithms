
//Individual Node
class Node {
  constructor(node) {
    this.value = node;
    this.left = null;
    this.right = null;
  }
}

//Tree 
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(node) {
    const newNode = new Node(node);

    if (!this.root) {
      this.root = newNode;
      return;
    }
    let currentNode = this.root;
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
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(node) {
    if (!this.root) return false;

    let currentNode = this.root;
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

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while (currentNode) {
      if (value < currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!

        //Option 1: No right child:
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            //if parent > current value, make current left child a child of parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;

              //if parent < current value, make left child a right child of parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }

          //Option 2: Right child which doesnt have a left child
        } else if (!currentNode.right.left) {
          currentNode.right.left = currentNode.left;
          if (parentNode === null) {
            this.root = currentNode.right;
          } else {
            //if parent > current, make right child of the left the parent
            if (currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;

              //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }

          //Option 3: Right child that has a left child
        } else {
          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while (leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }

          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if (parentNode === null) {
            this.root = leftmost;
          } else {
            if (currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
        return true;
      }
    }
  }

  // Tree Traversal

  // Breadth First Search
  // Left to Right
  bfs() {
    if (!this.root) {
      return [];
    }
    let bfsOrder = [];
    let queque = [this.root];
    while (queque.length) {
      let currentNode = queque.shift();
      bfsOrder.push(currentNode.value);
      if (currentNode.left) {
        queque.push(currentNode.left);
      }
      if (currentNode.right) {
        queque.push(currentNode.right);
      } else {
        continue;
      }
    }

    return bfsOrder;
  }

  // Depth First Search
  dfsPreOrder() {
    let nodes = [];

    preOrder(this.root);
    function preOrder(node) {
      if (!node) {
        return;
      }
      nodes.push(node.value);

      node.left && preOrder(node.left);
      node.right && preOrder(node.right);
    }
    return nodes;
  }

  dfsInOrder() {
    let nodes = [];

    (function inOrder(node) {
      if (!node) {
        return;
      }

      inOrder(node.left);
      nodes.push(node.value);
      inOrder(node.right);
    })(this.root);
    return nodes;
  }

  dfsPostOrder() {
    let nodes = [];

    (function postOrder(node) {
      if (!node) {
        return;
      }

      postOrder(node.left);
      postOrder(node.right);
      nodes.push(node.value);
    })(this.root);
    return nodes;
  }
}

const Tree1 = new BinarySearchTree();
Tree1.insert(10);
Tree1.insert(8);
Tree1.insert(5);
Tree1.insert(14);
Tree1.insert(9);
Tree1.insert(18);
//       10
//     /    \
//    8      14
//   / \      \
//  5   9      18
console.log(Tree1.lookup(11)); // false
console.log(Tree1.lookup(14)); // true

// console.log(Tree1.remove(9));
console.log(Tree1.dfsPreOrder()); // [ 10, 8, 5, 9, 14, 18 ]
console.log(Tree1.dfsInOrder()); // [ 5, 8, 9, 10, 14, 18 ]
console.log(Tree1.dfsPostOrder()); // [ 5, 9, 8, 18, 14, 10 ]
