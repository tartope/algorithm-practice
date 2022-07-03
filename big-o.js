const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank'];
const large = new Array(100000).fill('nemo');

// function findNemo(array){
//   // let t0 = performance.now();
//   for(let i = 0; i < array.length; i++){
//     console.log('running');
//     if(array[i] === 'nemo'){
//       console.log('found NEMO!');
//       break;
//     }
//   }
// // let t1 = performance.now();
// // console.log('Call to find Nemo took ' + (t1-t0) +  ' milliseconds')
// }

// findNemo(everyone); //O(n) --> Linear Time
//____

// const boxes = [0, 1, 2, 3, 4, 5]

// function logFirstTwoBoxes(boxes){
//   console.log(boxes[0]; //O(1)
//   console.log(boxes[1]); //O(1)
// }

// logFirstTwoBoxes(boxes) //O(2) --> Constant Time O(1)
//____

// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function funChallenge(input) {
//   let a = 10; //O(1) <-- assignments run once
//   a = 50 + 3; //O(1) <-- assignments run once

//   for (let i = 0; i < input.length; i++) { //O(n) <--loops are linear
//     anotherFunction(); //O(n)  <--called based on input due to inside loop
//     let stranger = true; //O(n)) <--runs as many times as loop happens due to inside of loop
//     a++;  //O(n)) <--runs as many times as loop happens due to inside of loop
//   }
//   return a  //O(1) <--return statement only runs once
// }

// // 3 + n + n + n + n = 3 + 4n
// // Big O(3 + 4n) or O(n)
// funChallenge()
//____

// // What is the Big O of the below function? (Hint, you may want to go line by line)
// function anotherFunChallenge(input) {
//   let a = 5; // O(1)
//   let b = 10; // O(1)
//   let c = 50; // O(1)
//   for (let i = 0; i < input; i++) { // O(n)
//     let x = i + 1; // O(n)
//     let y = i + 2; // O(n)
//     let z = i + 3; // O(n)

//   }
//   for (let j = 0; j < input; j++) { // O(n)
//     let p = j * 2; // O(n)
//     let q = j * 2; //O(n)
//   }
//   let whoAmI = "I don't know"; //O(1)
// }
// // 4 + 7n
// // Big O(4 + 7n) or O(n)
//____

// function compressBoxesTwice(boxes, boxes2){
//   boxes.forEach(function(boxes){
//     consol.log(boxes);
//   });

//   boxes2.forEach(function(boxes){
//     console.log(boxes);
//   });
// }
// // loops one after the other are added '+'
// // O(a + b) b/c 'different terms for inputs' (boxes = a and boxes2 = b)

// Log all pairs of array
// const boxes = ['a', 'b', 'c', 'd', 'e'];

// function logAllPairsOfArray(array){
//   for(let i = 0; i < array.length; i++){ // O(n)
//     for(let j = 0; j < array.length; j++){ //O(n)
//       console.log(array[i], array[j])
//     }
//   }
// }
// logAllPairsOfArray(boxes)
// // nested loops are multiplied '*'
// // O(n * n) = O(n^2) Quadratic time
//____

// function printAllNumbersThenAllPairSums(numbers){

//   console.log('these are the numbers:');
//   numbers.forEach(function(number){
//     console.log(number);
//   });

//   console.log('and these are their sums:');
//   numbers.forEach(function(firstNumber){
//     numbers.forEach(function(secondNumber){
//       console.log(firstNumber + secondNumber);
//     });
//   });
// }

// printAllNumbersThenAllPairSums([1,2,3,4,5])
// //O(n + n^2) drop the non-dominant term, so O(n^2)
//____


// function booo(n){
//   for(let i = 0; i < n.length; i++){
//     console.log('booo');
//   }
// }
// booo([1,2,3,4,5]) // O(1) space complexity

// function arrayOfHiNTimes(n) {
//     let hiArray = []; //<-- created a new data structure
//     for (let i = 0; i < n; i++) {
//         hiArray[i] = 'hi'; //<--eacg item is an additional memory space n times
//     }
//     return hiArray;
// }
// arrayOfHiNTimes(6)  //O(n)
//____


// // Find 1st, find nth...
// const array = ['hi', 'my', 'teddy']
// array[0]; //O(1)
// array[array.length-1] //O(1)

// // Find 1st, find nth...
// //compare each date
// const array = [
// {
//   tweet: 'hi',
//   date: 2012
// }, 
// {
//   tweet: 'my',
//   date: 2014
// }, 
// {
//   tweet: 'teddy',
//   date: 2018
// }
// ];
// //O(n^2) b/c this is a nested loop b/c we have to compare.  We have to store the tweets differently to access them more efficiently.

// 'tunisia'.length  //O(1) in javascript; may be different for other languages; depends on the language
//___

// All 3 below are the same loop, written differently:
function findNemo(array){
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
        console.log('found NEMO!');
        }
    }
}

const findNemo2 = array =>{
    array.forEach(fish =>{
        if(fish === 'nemo'){
        console.log('found NEMO!');
        }
    })
}

const findNemo3 = array =>{
    for(let fish of array){
        if(fish === 'nemo'){
        console.log('found NEMO!');
        }
    }
}

findNemo(everyone);
findNemo2(everyone);
findNemo3(everyone);