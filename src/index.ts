function greet(name: string | null | undefined) {
  if (name) console.log(name.toUpperCase());
  else console.log("Hi");
}

// null and undefined cannot be converted to uppercase, but for js, it doesn't matter. If I wanna pass it, I can change a setting in .json file.

// console.log(greet(1)); // error
console.log(greet("Hi")); // HI
console.log(greet(null)); // Hi
console.log(greet(undefined)); // Hi
