function foo(a, b) {
  if (a === null && b === null) {
    return 0; // Default value if both are null
  } else if (a === null || b === null) {
    return null; // Return null if only one is null
  } else {
    return a + b; // Normal addition
  }
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: null
console.log(foo(1, null)); // Output: null
console.log(foo(null, null)); // Output: 0 // Now returns 0 instead of null