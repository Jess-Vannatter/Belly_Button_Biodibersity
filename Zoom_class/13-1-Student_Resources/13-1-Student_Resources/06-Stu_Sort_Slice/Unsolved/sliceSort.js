// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
// numArray.sort(function compare(a, b) {
//     return b - a;
// });

// // Print the results to the console
// console.log('Descending sorted numArray', numArray);

// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console
// numArray.sort((a, b) => b - a);
// console.log('Sorted with Arrow Function', numArray);

// Reverse the array order
// var reversedArray = numArray.reverse()

// console.log('reversedArray', reversedArray);

// Sort the array in ascending order using an arrow function
var sortAscendingArray = numArray.sort((a, b) => a - b);
console.log('sortAscendingArray', numArray);

// Slice the first five elements of the sortedAscending array, assign to a variable
var slicedArray = sortAscendingArray.slice[0, 5];
console.log(slicedArray);