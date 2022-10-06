function nodeDepths(root) {
    return nodeDepthsHelper(root, 0);
}

function nodeDepthsHelper(node, depth){
    if(node === null) return 0;

    let leftSubtreeDepth = nodeDepthsHelper(node.left , depth + 1);
    let rightSubtreeDepth = nodeDepthsHelper(node.right, depth + 1);
    return depth + leftSubtreeDepth + rightSubtreeDepth;

}

// This is the class of the input binary tree.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
