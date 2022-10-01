// // // // function a(){
// // // //     for(var i = 0; i < 3; i++){
// // // //         function someFunc(val){
// // // //             setTimeout(()=>{
// // // //                 console.log(val)
// // // //             }, val * 1000)
// // // //         }
// // // //         someFunc(i)
// // // //     }
// // // // }

// // // // a();

// // // // // Multiple API calls

// // // // async function fetchResponseFromAPIs(){
// // // //     const [status, ...value] = await Promise.allSettled([
// // // //       new Promise((resolve, reject) => {
// // // //         reject(new Error("500 Server Error"));
// // // //       }),
// // // //       new Promise((resolve, reject) => {
// // // //         resolve("200 OK");
// // // //       }),
// // // //       new Promise((resolve, reject) => {
// // // //         resolve("200 OK");
// // // //       }),
// // // //       new Promise((resolve, reject) => {
// // // //         resolve("200 OK");
// // // //       }),
// // // //     ])
// // // //     console.log(status)
// // // //     console.log(value)
// // // // }

// // // // fetchResponseFromAPIs()

// // // // const getRandomWord = (words) => {
// // // //   return words[Math.floor(Math.random() * words.length)];
// // // // }

// // // // const words = ["First", "Second", "Third", "Fourth", "Fifth"];
// // // // console.log(getRandomWord(words));

// // // // Promise.resolve(1)
// // // //   .then(() => 2)
// // // //   .then(3)
// // // //   .then((value) => value * 3)
// // // //   .then(Promise.resolve(4))
// // // //   .then(console.log);

// // // // const first = Promise.resolve("First");
// // // // const second = Promise.resolve("Second");
// // // // const third = Promise.reject("Third");
// // // // const fourth = Promise.resolve("Fourth");

// // // // const Sample = async () => {
// // // //   const res1 = await Promise.all[first, second];
// // // //   const res2 = await Promise.all[third, fourth];
// // // //   return [res1, res2];
// // // // };

// // // // Sample().then(res => console.log(res)).catch(err => console.log(err));





// // // class Square{
// // //   constructor(length){
// // //     this.length = length;
// // //   }

// // //   get area(){
// // //     return this.length * this.length;
// // //   }

// // //   set area(value){
// // //     this.length = value;
// // //   }
// // // }

// // // const squareObj = new Square(10);
// // // console.log(squareObj.area);

// // // const readline = require("readLine");

// // // Function candidate has to implement
// // function incrementCode(n){
// //   if(n + 1 > 122){
// //     return 97;
// //   }
// //   return (n + 1);
// // }

// // function decrementCode(n){
// //   if(n - 1 < 97){
// //     return 122;
// //   }
// //   return n - 1;
// // }

// // function solve(s, n)
// // {
// // 	let i = 0;
// // 	let numberOfOps = 0;
// //   let iterations = n % 2 === 0 ? (n / 2) - 1 : (n / 2);
// //   //  console.log(iterations);
// // 	while(i <= iterations){
// // 		let first = s.charCodeAt(i);
// // 		let last = s.charCodeAt(n - i - 1);
// //     console.log(first + "---" + last);
// // 		if(first === last){
// // 			//do nothing
// // 		}else if(incrementCode(first) === last){
// //       numberOfOps++;
// //     }else if(first === incrementCode(last)){
// //       numberOfOps++;
// //     }else if(decrementCode(first) === last){
// //       numberOfOps++;
// //     }else if(first === decrementCode(last)){
// //       numberOfOps++;
// //     }else if(incrementCode(first) === decrementCode(last)){
// //       numberOfOps += 2;
// //     }else if(decrementCode(first) === incrementCode(last)){
// //       numberOfOps += 2;
// //     }
// //     i++;
    
// // 	}
// //   return numberOfOps;
// // }


// // //Driver Code
// // // var t = ;
// // // while(t--)
// // // {
// //   var n = 4;
// //   var s = "abca";
// //   var num  = solve(s,n);
// //   console.log(num);
// // // }


// let finalAns = 0;
// function GCD(a, b){
// 	let hcf = 1;
// 	for(let i = 1; i <= a && i <= b; i++){
// 		if(a % i == 0 && b % i == 0){
// 			hcf = i;
// 		}
// 	}
// 	return hcf;
// }

// function findSolution(index, product, target, local, arr){
//   console.log(product);
//   if(product === target){
//     // let ans = local.length;
//     // for(let i = 0; i < local.length - 1; i++){
//     //   if(GCD(arr[i], arr[i + 1]) !== arr[i]){
//     //     ans--;
//     //   }
//     // }
//     // finalAns = Math.max(ans, finalAns);
//     let ans = '['
//     for(let i = 0; i < local.length; i++){
//       if(i !== 0){
//         ans.concat(" ");
//       }
//       ans.concat(local[i]);
//       if(i !== local.length - 1){
//         ans.concat(", ");
//       }
//     }
//     ans.concat("]");
//     console.log(ans);
//     return;
//   }

//   for(let i = 1; i < arr.length; i++){
//     if(product * arr[i] > target){
//       continue;
//     }

//     local.push(arr[i]);
//     findSolution(index + 1, product * arr[index], target, local, arr);
//     local.pop();
//   }

  
// }

// function solve(n)
// {
// 	let arr = [];
// 	for(let i = 1; i * i<= n ; i++){
// 		if(n % i === 0){
// 			if(i !== 1) arr.push(i);
//       arr.push(n / i);
// 		}
// 	}
//   arr.sort((a, b)=> a - b);
//   // console.log(arr);
//   let resultArray = [];
//   findSolution(0, 1, n, resultArray, arr);
// 	return finalAns;
// }


// console.log(solve(100));


// Promise.resolve(1)
//         .then(()=> 4)
//         .then(3)
//         .then(Promise.resolve(10))
//         .then(console.log)


// console.log(Boolean('false'))
// console.log(Boolean(false))
// console.log('3' + 1)
// console.log('3' - 1)
// console.log('3' - ' 02 ')
// console.log('3' * ' 02 ')
// console.log(Number('1'))
// console.log(Number('number'))
// console.log(Number(null))
// console.log(Number(false))

// console.log(JSON.stringify([1,2,null,3]))
// console.log(JSON.stringify([1,2,undefined,3]))

console.log([] + [])
console.log([] + 1)
console.log([[]] + 1)
console.log([[1]] + 1)
console.log([] - 1)
console.log([[1]] - 1)
console.log([] + {})
console.log({} + {})
console.log({} - {})