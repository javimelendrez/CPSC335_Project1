//if grid were to be represented by an array
//create array 
var array = new Array(400);
//use a for loop to make array of arrays
for (var i = 0; i < 400; i++) {
	array[i] = new Array(400);
}
//initialize the array to all 0's
for (var i = 0; i < 400; i++) {
	for (var j = 0; i < 400; j++) {
		array[i][j] = 0;
	}
}
//initialize first cell to 1
arrays[0][200] = 1;