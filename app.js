// Node's modular structure creates modules that remove you from the global scope.  
// Modules are encapsulated in their local scope. aka They are private and can be made public with export.

const os = require('os');

let totalMemory = os.totalmem();
let freeMemory = os.freemem();

console.log('Total Memory: ' + totalMemory);
console.log(`Free Memory: ${freeMemory}`);


