// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


let integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// let newInteger = [];
newInteger = integers.sort(function(a, b) {return b - a}).filter(function(x) {return x < 19;}).map(function(x) { return (x * 1.5) - 1}).reduce(function(a, b) { return a + b});
// .forEach(function(item) {item * 1.5});

console.log(newInteger);

// integers.forEach(function(item){ return item * 1.5 });
// integers.forEach(function(item){ console.log(item * 1.5) });

