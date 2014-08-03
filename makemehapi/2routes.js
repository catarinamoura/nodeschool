var hapi = require('hapi');

server = hapi.createServer('localhost',Number(process.argv[2]||8080));

server.route({
	path:'/{name}',
	method:'GET',
	handler: handler
});


function handler(request,reply){
	reply('Hello ' + request.params.name);

}
server.start();