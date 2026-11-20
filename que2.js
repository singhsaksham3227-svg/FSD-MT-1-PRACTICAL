
const fs = require('fs');

// synchronus process example 
console.log("Synchronous Operation");

fs.writeFileSync('sync.txt', 'Hello Synchronous');

let data = fs.readFileSync('sync.txt', 'utf8');
console.log("File Content:", data);

console.log("Synchronous operation completed");



// Asynchronous process example 
console.log("\nAsynchronous Operation");

fs.writeFile('async.txt', 'Hello Asynchronous', (err) => {
    if (err) throw err;

    console.log("File created successfully");

    fs.readFile('async.txt', 'utf8', (err, data) => {
        if (err) throw err;

        console.log("File Content:", data);
    });
});

console.log("Program continues without waiting");