
var hapi = require('hapi');
var server = hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
	path: '/',
	method: 'GET',
	handler: handler
});

function handler(request,reply){
	reply("Hello Hapi");
}

server.start();



/*
var Hapi = require('hapi');
var server = Hapi.createServer('localhost', Number(process.argv[2] || 8080));
server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
        reply('Hello Hapi');
    }
});
server.start();
*/