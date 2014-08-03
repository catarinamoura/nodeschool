hapi = require('hapi');
path = require('path');

var options ={
	views: {
		//path: 'templates',
		path: path.join(__dirname,'templates'),
		 engines: {
            html: require('handlebars')
        },
		//helpersPath: 'helpers'
		helpersPath: path.join(__dirname,'helpers')
	}
};

server = hapi.createServer('localhost',Number(process.argv[2])||8080,options);

server.route({
	method:'GET',
	path:'/',
	handler: {
		view:'index.html'
	}
});

server.start();