// Node's modular structure creates modules that remove you from the global scope.  
// Modules are encapsulated in their local scope. aka They are private and can be made public with export.

const log = require('./logger');

log('message');