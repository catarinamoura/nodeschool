	var fs = require('fs');

	// It will read the file path on the first command line
	fs.readFile( process.argv[2], function(err, buffer){
				if(err){
					console.error('Error:',err);
				}else{
					var text = buffer.toString();
				array_str = text.split("\n");
				console.log(array_str.length-1); // print out the number of lines of the file
				}
});



