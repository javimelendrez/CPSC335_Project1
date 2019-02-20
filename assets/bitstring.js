<script>

var columns = 9;

var bitstr = [0,0,0,0,1,0,0,0];

for(var col = 0; col < columns; col++)
{
	console.log(bitstr[col]);
}

for(var col = 0; col < columns; col++)
{
	if(col == 0)
		left = 0;
	else
		left = bitstr[col-1];

	center = bitstr[col];

	if(col == 9)
		right = 0;
	else
		right = bitstr[col+1];

	console.log("L: ",left);
	console.log("C: ",center);
	console.log("R: ",right);
}

</script>