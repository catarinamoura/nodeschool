fs=require("fs");
path = require("path");

ext = process.argv[3]; // file extension

fs.readdir(process.argv[2], function(err,list){
		if(err){
			console.error('Error:',err);
		}else{
				for(var i=0; i<list.length;i++){
					if( path.extname(list[i]) === "." + ext){
						console.log(list[i]);
					}
				}
		}
});