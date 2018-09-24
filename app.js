// Node's modular structure creates modules that remove you from the global scope.  
// Modules are encapsulated in their local scope. aka They are private and can be made public with export.

const EventEmitter = require('events'); //class
const emitter = new EventEmitter(); //object

// listener
emitter.on('messageLogged', function(){
    console.log('Listener called');
}) // onn = addListener method

// an event needs a listener
emitter.emit('messageLogged');

// order matters.  need to register the listener before raising the event.

