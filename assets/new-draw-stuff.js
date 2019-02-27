var global_generation = 0;
var columns = 40;

function draw_grid(rctx, rminor, rmajor, rstroke, rfill) {
    rctx.save( );
    rctx.strokeStyle = rstroke;
    rctx.fillStyle = rfill;
    let width = rctx.canvas.width;
    let height = rctx.canvas.height;
    for ( var ix = 0; ix < width; ix += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( ix, 0 );
        rctx.lineTo( ix, height );
        rctx.lineWidth = ( ix % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        //if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}

function next_bitstring(bitstr) {

    var new_bitstr = [];
    for(var col = 0; col < bitstr.length; col++)
    {
        // lines 23 -> 34 determine the rules pattern
		if(col == 0) {
			left = 0;
			center = bitstr[col];
			right = bitstr[col+1];
			//console.log("col: ", col);
		}
		else if(col == columns - 1)
		{
			left = bitstr[col-1];
			center = bitstr[col];
			right = 0;
			//console.log("col: ",col);
		} else {
			left = bitstr[col-1];
			center = bitstr[col];
			right = bitstr[col+1];
			//console.log	("col: ",)
		}

        // this block deteremines the output
        if(left == 1 && center == 1 && right == 1)
            new_bitstr[col] = 0;
        else if(left == 1 && center == 1 && right == 0)
            new_bitstr[col] = 1;
        else if(left == 1 && center == 0 && right == 1)
            new_bitstr[col] = 0;
        else if(left == 1 && center == 0 && right == 0)
            new_bitstr[col] = 1;
        else if(left == 0 && center == 1 && right == 1)
            new_bitstr[col] = 1;
        else if(left == 0 && center == 1 && right == 0)
            new_bitstr[col] = 0;
        else if(left == 0 && center == 0 && right == 1)
            new_bitstr[col] = 1;
        else if(left == 0 && center == 0 && right == 0)
            new_bitstr[col] = 0;
    }       

    return new_bitstr;
}

function draw_cell(ctx, x, y) {
    var stroke = "transparent";
    var fill = "red";
    ctx.save();
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 0;
    width = canvas.width - 210;
    ctx.rect(x,y,8.5,8.5);
    ctx.fill();
    ctx.restore();
}