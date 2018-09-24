// Node's modular structure creates modules that remove you from the global scope.  
// Modules are encapsulated in their local scope. aka They are private and can be made public with export.

const http = require ('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('Hello World');
        res.end();
    }

    if(req.url === '/api/courses') {
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000); //port

console.log('Listening on port 3000...');

