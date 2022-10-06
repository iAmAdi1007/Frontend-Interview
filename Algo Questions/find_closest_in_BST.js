
function findClosestValueInBst(tree, target) {
    let result = Number.MAX_VALUE;
    // return findSolution(tree, target, result);
    let closest = Number.MAX_VALUE;
    return findClosestIterative(tree, target, closest);
    
}

function findSolution(tree, target, result){
    if(tree === null){
        return result;
    }

    if(Math.abs(tree.value - target) < Math.abs(target - result)){
        result = tree.value;
    }
    // let leftSearchResult, rightSearchResult;
    if(target < tree.value){
        return findSolution(tree.left, target, result);
    } else if(target > tree.value){
        return findSolution(tree.right, target, result);
    } else{
        return result;
    }

}

function findClosestIterative(tree, target, closest){
    let currentNode = tree;
    while(currentNode !== null){
        if(Math.abs(target - currentNode.value) < Math.abs(target - closest)){
            closest = currentNode.value;
        }
        if(target > currentNode.value){
            currentNode = currentNode.right;
        } else if(target < currentNode.value){
            currentNode = currentNode.left;
        } else {
            break;
        }
    }
    return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
