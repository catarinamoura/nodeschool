function test(a){

	
var obj1 = {};
var obj2 = {};
var obj3 = {};
var obj4 = {};
var obj5 = {};

for(i=0;i<3;i++){
	//iterate three times increase from the base +2
obj1[a] = (obj1[a]+1) || 100 ;
obj2.a = (obj2.a+1) || 100 ;
obj3[a] = (obj3.a+1) || 100;
obj4.a = (obj4[a]+1) || 100;
obj5.orEvaluation = NaN || false || 0 || null ||undefined || "yeah I understood! " || 100 ;
}

console.log("\n" +"Suppose value for all the objects: " + "{ " + a + " :102"+ " }" + "\n");
for(var key in obj1){
	console.log("obj1 [] [] "+"{ "+ key + ":"+ obj1[key]+" }");
}


for(var key2 in obj2){
	console.log("obj2 . . "+ "{ " + key2 + ":"+ obj2.key2+" }");

}


for(var key3 in obj3){
	console.log("obj3 [] . "+"{ " + key3+ ":"+ obj3[key3]+" }");
}

for(var key4 in obj4){
	console.log("obj4 . [] "+ "{ " + key4 + ":"+ obj4.key4+" }"+"\n");
}

for(var key5 in obj5){
	console.log("obj5 orEvaluation "+ "{ " + key5 + ":"+ obj5[key5] +" }"+"\n");
}

}

var testing = new test("B");

/*
Suppose value for all the objects: { B :102 }

obj1 [] [] { B:102 }
obj2 . . { a:undefined }
obj3 [] . { B:100 }
obj4 . [] { a:undefined }

obj5 orEvaluation { orEvaluation:yeah I understood!  }

First case obj[a] analyses the 'a' as a value so adds to the empty obj "B", in the second part obj1[a] will analyse as 
Not a Number -> NaN (B != Number) therefore gives false and false || 100 will insert the value 100 and after the subsequent +1
for each iteration.

Second case obj.a analyses the 'a' as a string therefore adds to the empty obj "a" in the second part will analyse 
obj2.a as NaN therefore will put the 100 value too however notice to print the console.log obj2.key2 this means is
analysing the key2 as a string and NOT as value that's why gives undefinied because does not have in the obj2
a property called 'key2'.

Third case obj3 will have property called {B: --} and each iteration analyses that 'a' is not a number and always insert 100.

Fourth case obj4 has a property called 'a' and for each iteration will insert always the value 100 because in each iteration analyses that 'B' is not a number 
and will went for the 100 value. Hoewever gives undefined because on console.log obj4.key4 tries to analyse the property 'key4' instead of 'a'.

On the trial of obj5 the values given NaN, FALSE, null, undefined and 0 has an output of FALSE so will insert the next value of the or that gives true = ""yeah I understood!"
________

TO KEEP IN MIND 

a = "B"
obj1.a = 100 ->  will analyse 'a'  as a string therefore obj1{a:100}
obj2[a] = 100 -> will analyse 'a' as a value hence obj2{B:100}
 
 OR operation NaN, undefined, null, 0 are all false values thus will analyse the next value nonfalse and insert it.
 If all values are false insert the last false value in this case undefined

*/