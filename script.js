const makeChange = (c) => {
  c = parseInt(c, 10); // Ensure input is treated as an integer
  return {
    q: Math.floor(c / 25),       // Number of quarters
    d: Math.floor((c % 25) / 10), // Number of dimes
    n: Math.floor((c % 25 % 10) / 5), // Number of nickels
    p: c % 5  // Remaining pennies
  };
};
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
// Test cases
console.log(makeChange(47)); // Expected: { q: 1, d: 2, n: 0, p: 2 }
console.log(makeChange(24)); // Expected: { q: 0, d: 2, n: 0, p: 4 }
console.log(makeChange(92)); // Expected: { q: 3, d: 1, n: 1, p: 2 }
console.log(makeChange(99)); // Expected: { q: 3, d: 2, n: 0, p: 4 }

