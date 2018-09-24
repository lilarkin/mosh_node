// Node's modular structure creates modules that remove you from the global scope.  
// Modules are encapsulated in their local scope. aka They are private and can be made public with export.

const EventEmitter = require('events'); //class

const Logger = require('./logger');
const logger = new Logger;

// listener
logger.on('messageLogged', (e) => {
    console.log('Listener called', e);
}) // on = addListener method

logger.log('message');

// order matters.  need to register the listener before raising the event.

