//given 2 arrays, make a function that outputs true/false if the 2 arrays have common items.
//2 parameters; return true or false
//Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ['z', 'y', 'i'];
//returns false

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'x'];
// returns true
// loop through each array and compare
// function containsCommonItem(arr1, arr2) {
//     for(let i=0; i < arr1.length; i++){
//         for(let j=0; j < arr2.length; j++){
//             if(arr1[i] === arr2[j]) {
//                 return true;
//             }
//         }
//     }
//     return false
// }
// containsCommonItem(array1, array2);
// O(a*b) b/c two different arrays with a nested loop
// O(1) space complexity b/c no additional space is being used, just the space for the input arrays.


// function containsCommonItem2(arr1, arr2) {
//     // loop through first array and create object where properties === items in the array

//     let map = {};
//     for (let i = 0; i < arr1.length; i++) {
//         if (!map[arr1[i]]) {
//         const item = arr1[i];
//         map[item] = true;
//         }
//     }
//     // loop through second array and check if item in second array exists on created object. 
//     for (let j = 0; j < arr2.length; j++) {
//         if (map[arr2[j]]) {
//         return true;
//         }
//     }
//     return false
// }
// containsCommonItem2(array1, array2)
// O(a+b) Time complexity
// O(a) space complexity b/c an object is created that holds array1 input.


//same as above solution, just using built in JS methods, so less code:
function containsCommonItem3(arr1, arr2){
    return arr1.some(item => arr2.includes(item))
}
containsCommonItem3(array1, array2)






// const string = "It is a pleasant day today";

// function longestEvenWord(sentence) {
//     // Write your code here
//     const words = sentence.split()
//     console.log(words)
//     for(let i = 0; i <= words.length; i++){
        
//     }

// }
