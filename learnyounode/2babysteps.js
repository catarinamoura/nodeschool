var sum = 0;
/* process.argv array is always 'node', and the second element is always 
the path to your program.js file, so you need to start at the 
3rd element (index 2) */
for(var i=2; i < process.argv.length ; i++ ){
	sum += Number(process.argv[i]); // the same as Number(process.argv[i])
}
console.log(sum);