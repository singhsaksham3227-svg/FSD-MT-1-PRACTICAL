
const fs = require('fs');

// create a new file 
fs.writeFileSync('demo.txt', 'Hello Node.js!');
console.log('File created successfully');

// read the created file 
let data = fs.readFileSync('demo.txt', 'utf8');
console.log('File Content:', data);

// update the created file
fs.appendFileSync('demo.txt', '\nWelcome to FS Module!');
console.log('File updated successfully');

// read the updated file 
data = fs.readFileSync('demo.txt', 'utf8');
console.log('Updated Content:', data);

//delete the Updated File
fs.unlinkSync('demo.txt');
console.log('File deleted successfully');