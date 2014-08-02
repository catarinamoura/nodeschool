var modular = require('./6modular.js');

modular(process.argv[2],process.argv[3],function(err,list){
	if(err){
		console.error('Error:',err);
	}else{
		list.forEach(function(element){
			console.log(element);
		});
	}
});
