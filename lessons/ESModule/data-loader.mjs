//data-loader.mjs
//simulating a top-level await example

//Starting the module execution
console.log('loading data');

//This would normally be an actual fetch, but for demonstration:
async function fetchData() {
    return new Promise((resolve) => {
        resolve({
            userId: 1,
            id: 1,
            title: 'delectus aut autem',
            completed: false
        });
    }, 1500);
}

// Top level await - the module`s execution pauses here
//In a real ESM module, this code would be at the top level without the async function wrapper
//const response = await fetch('https://jsonlaceholder.typicode.com/todos/1);
//const data = await response.json();

//For demonstration? we`ll show the flow with a simulated await
const data = await fetchData();

console.log('Data loaded!');
console.log('Todo item:', data);

//These would be the exports from this module
//export { data };

//A module that imports this would only receive the exports
//after all the top-level await operaitions have completed
console.log('\nModule initialization complete!');
console.log('Any module that imports this one would only proceed after this point');