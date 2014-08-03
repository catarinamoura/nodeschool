hapi = require('hapi');

server = hapi.createServer('localhost',Number(process.argv[2])|| 8080);

server.route({
	method:'GET',
	path:'/',
	handler:{
		file:"index.html" //more complex path.join(__dirname,'/index.html')
		/* path.join merge the two arguments and __dirname gives the path 
		of the directory the file is being executed */
	}

});

server.start();