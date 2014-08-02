fs = require('fs');
path = require('path');

module.exports = function(dir,ext,callback){

	fs.readdir(dir, function(err,list){
		if(err){
			return callback(err);
		}else{
				var list_filtered = [];
				for(var i=0; i<list.length;i++){
					if( path.extname(list[i]) === "." + ext){
						list_filtered.push(list[i]);
					}
				}
				 return callback(null,list_filtered);
		}
	});
};



	
