// This is the class of the input root.
// Do not edit it.
class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function branchSums(root) {
    let resultArray = [];
    branchSumsHelper(root, 0, resultArray);
    return resultArray;
}

function branchSumsHelper(root, sum, resultArray) {
    if (root === null) return;
    if (root.left === null && root.right === null) {
        sum += root.value;
        resultArray.push(sum);
        return;
    }
    let currentValue = root.value;
    branchSumsHelper(root.left, sum + currentValue, resultArray);
    branchSumsHelper(root.right, sum + currentValue, resultArray);
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
