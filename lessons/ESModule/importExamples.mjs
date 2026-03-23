// Combined file for demonstration purposes
// In a real application, these would be separate files

// This would be in greetings.mjs
export function sayHello() {
  console.log('Hello');
}

export function sayGoodbye() {
  console.log('Goodbye');
}

// This would be in math.mjs
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

// This would be in main.mjs
export const VERSION = '1.0.0';

function main() {
  console.log('Main function');
}

export { main as default };

// This would be in app.mjs
// Import specific named exports
import { sayHello, sayGoodbye } from './greetings.mjs';
sayHello(); // Hello
sayGoodbye(); // Goodbye

// Rename imports to avoid naming conflicts
import { add as sum, subtract as minus } from './math.mjs';
console.log(sum(5, 3)); // 8
console.log(minus(10, 4)); // 6

// Import all named exports as an object
import * as mathUtils from './math.mjs';
console.log(mathUtils.add(7, 4)); // 11

// Import both default and named exports
import mainFunction, { VERSION } from './main.mjs';
console.log(`Version: ${VERSION}`);
mainFunction(); // Main function
