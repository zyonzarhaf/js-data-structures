/*
============================
ARRAY DATA STRUCTURE
============================
*/
//Array initialization expressions
let array = new Array(1, 2, 3, 4); //using the Array constructor
let literalArray = [1, 2, 3, 4]; //array literal notation
let arrayFrom = Array.from('123'); //create a new array from an array-like object or an iterable object
let arrayOf = Array.of(1, 2, 3, 4); //create a new array w/ a variable n of args

//Property access expression to get the desired array element
console.log(array[0]); //1
console.log(array[1]); //2

//Adding new elements to an array (different approaches)
//to the start of the array
const addToStart = function (arr, value) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1];
  }
  arr[0] = value;
}; //manual approach

addToStart(array, 5);
console.log(array);

array.unshift(6); //array method approach
console.log(array);

//Removing first element
const removeFirstElement = function (arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  } //manual approach
  arr.length = arr.length - 1; //removes the unoccupied position
};

removeFirstElement(array);
console.log(array);

array.shift(); //array method approach
console.log(array);

//Removing from any position
array.splice(0, 1);
console.log(array);

/*
===================================
MULTIDIMENSIONAL ARRAYS AKA MATRIX
===================================
*/
//using nested arrays && nested loops
//2 nested loops = 2d matrix, 3 nested loops = 3d matrix (...)
let matrix2dLiteral = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
]; //3x3 2d matrix

let matrix2dLoop = [];
for (let i = 0; i < 3; i++) {
  matrix2dLoop[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix2dLoop[i][j] = i * 3 + j; //populate matrix
  }
} //3x3 2d matrix

let matrix3dLoop = [];
for (let i = 0; i < 3; i++) {
  matrix3dLoop[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3dLoop[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3dLoop[i][j][z] = i * 3 + j * 9 + z;
    }
  }
} //3x3 3d matrix

console.table(matrix2dLoop);
console.table(matrix3dLoop);

//converting unidimensional array to bidimensional array
const names = [
  'jordan',
  'michael',
  'lipton',
  'winters',
  'marcus',
  'tania',
  'bella',
  'julia',
  'anna',
];

let names2dMatrix = [];
let index = 0;
for (let i = 0; i < 3; i++) {
  names2dMatrix[i] = [];
  for (let j = 0; j < 3; j++) {
    names2dMatrix[i][j] = names[index];
    index++;
  }
}

console.table(names2dMatrix);
