// Main application code - app.mjs
async function loadModule(moduleName) {
  try {
    // Simulate dynamic import
    console.log(`Loading ${moduleName} module...`);

    // In a real ESM implementation, this would be:
    // const module = await import(`./${moduleName}.mjs`);

    // For demonstration, we'll simulate the module loading:
    let module;
    if (moduleName === 'dev') {
      module = {
        default: function() {
          console.log('Development environment initialized');
        }
      };
    } else if (moduleName === 'prod') {
      module = {
        default: function() {
          console.log('Production environment initialized');
        }
      };
    } else if (moduleName === 'math') {
      module = {
        add: (a, b) => a + b,
        subtract: (a, b) => a - b
      };
    }

    console.log(`${moduleName} module loaded successfully`);
    return module;
  } catch (error) {
    console.error(`Failed to load ${moduleName}:`, error);
  }
}

// Set a mock environment variable for demo purposes
const NODE_ENV = 'development'; // This would normally come from process.env.NODE_ENV

// Load a module based on a condition
const moduleName = NODE_ENV === 'production' ? 'prod' : 'dev';

// First example - using promise chain
loadModule(moduleName).then(module => {
  module.default(); // Call the default export
});

// Second example - using async/await in an IIFE
(async () => {
  console.log('\nLoading math module with await syntax:');
  const mathModule = await loadModule('math');
  console.log(`10 + 5 = ${mathModule.add(10, 5)}`);
  console.log(`20 - 8 = ${mathModule.subtract(20, 8)}`);
})();
