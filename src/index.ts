// Tuple : Fixed length array with particular type of elements (good enough to use up to 2 types)

let array = [1, "horse"];
array[3] = 1; // An element of an array can be added by assigning value using index
console.log(array); // [ 1, 'horse', <1 empty item>, 1 ]

let array1: [number, string] = [1, "horse"];
array1[2] = 1; // error, not assignable
console.log(array1);

let array2: [number, string] = [1, "horse"];
array2.push(2); // array2 is tuple, but its length can be changed through push method.
console.log(array2); // [ 1, 'horse', 2 ]

let array3: [number, string, undefined] = [1, "horse", undefined];
console.log(array3); // [ 1, 'horse', undefined ]
