
// Brute Force Solution
// function nonConstructibleChange(coins) {
//     if (coins.length === 0) return 1;
//     let ans;
//     let index = 1;
//     coins.sort((a, b) => a - b)
//     // console.log(coins);
//     while (true) {
//         ans = index;
//         for (let i = coins.length - 1; i >= 0; i--) {
//             if (index >= coins[i]) {
//                 index -= coins[i];
//             }
//         }
//         if (index !== 0) {
//             return ans;
//         }
//         index = ans;
//         index++;
//     }
// }

// Optimized Approach
/**
 * NOTE : for an array [1], we can create change of 1 and cannot create 2
 * for the array [1, 2] we can create change for all values b/w 1 and 3(change of array) and cannot create 4
 * for the array [1, 2, 4] we can create change for all values b/w 1 and 7(change of array) and cannot create 8
 * for the array [1, 2, 4, 8] we can create change for all values b/w 1 and 15(change of array) and cannot create 16
 * Thus here we can see that for sorted array, the change of the array is the smallest value(starting from 1) that can be created
 * 
 * Approach : Start by adding all the values and check if sum + 1 is greater than or equal to the next element in the array.
 * In case its not then sum + 1 would give the ans for the minimum change.
 */
function nonConstructibleChange(coins) {
    if(coins.length === 0)  return 1;
    coins.sort((a, b) => a - b);
    // console.log(coins);
    let index = 0;
    if(coins[index] !== 1) return 1;
    let change = 0
    while(index < coins.length){
        if((change + 1) < coins[index]){
            break;
        }
        change += coins[index];
        index++;
    }
    return change + 1;
}

// let coins = [1, 2, 5];
let coins = [5, 7, 1, 1, 2, 3, 22]
console.log(nonConstructibleChange(coins));

// Do not edit the line below.
// exports.nonConstructibleChange = nonConstructibleChange;
