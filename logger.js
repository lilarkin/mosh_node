const EventEmitter = require('events'); //class

const url = 'http://mylogger.io/log';

class Logger extends EventEmitter {
     log(message) {
        console.log(message);
    
        // an event needs a listener
        this.emit('messageLogged', { id: 1, url: 'http://' });
    
    }
}


module.exports = Logger;
