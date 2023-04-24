let string = "Javascript";
//Rotate the String n Times in the Left Direction
// expected outcome: vascriptja

let n = 1;

let rotatedString = string.slice(n) + string.slice(0, n);

console.log(rotatedString);
