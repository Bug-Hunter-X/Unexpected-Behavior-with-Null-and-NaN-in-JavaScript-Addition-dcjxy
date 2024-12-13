function foo(a, b) {
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return NaN; // or another suitable error handling
  }
  return a + b; 
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN
console.log(foo(1, NaN)); // Output: NaN
console.log(foo(NaN, 2)); // Output: NaN