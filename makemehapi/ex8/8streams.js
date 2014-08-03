var hapi = require('hapi');
var fs = require('fs');
var rot13 = require('rot13-stream')();
var path = require('path');

server = hapi.createServer('localhost',Number(process.argv[2])||8080);

server.route({
	method:'GET',
	path:'/',
	//config:{
		handler: function(request,reply){
		
			readableStream = fs.createReadStream(path.join(__dirname,'/file.txt'));
			reply(readableStream.pipe(rot13));
		}
	//}
});

server.start();
