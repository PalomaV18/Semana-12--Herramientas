
const assert = require('assert');

function suma(a, b) {
  return a + b;
}

assert.strictEqual(suma(2, 3), 5);
console.log("Test paso: 2 + 3 = 5");