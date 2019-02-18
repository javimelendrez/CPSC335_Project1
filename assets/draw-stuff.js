// Draw stuff
// Time-stamp: <2019-01-21 20:08:33 Chuck Siska>
// ------------------------------------------------------------

// FUN. Draw filled rect.
function draw_rect( ctx, stroke, fill ) 
{
    stroke = stroke || 'lightgrey';
    fill = fill || 'dimgrey';
    ctx.save( );
    ctx.strokeStyle = stroke;
    ctx.fillStyle = fill;
    ctx.lineWidth = 5;
    ctx.rect(75, 50, canvas.width - 150, canvas.height - 100);
    ctx.stroke();
    ctx.fill();
    ctx.restore( );
}

// =====================================================  draw_grid ====
function draw_grid( rctx, rminor, rmajor, rstroke, rfill  ) 
{
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
        if ( ix % rmajor == 0 ) { rctx.fillText( ix, ix, 10 ); }
    }
    for ( var iy = 0; iy < height; iy += rminor )
    {
        rctx.beginPath( );
        rctx.moveTo( 0, iy );
        rctx.lineTo( width, iy );
        rctx.lineWidth = ( iy % rmajor == 0 ) ? 0.5 : 0.25;
        rctx.stroke( );
        if ( iy % rmajor == 0 ) {rctx.fillText( iy, 0, iy + 10 );}
    }
    rctx.restore( );
}

//Draw one cell.
function draw_cell (ctx, x, y)
{
	var stroke = 'transparent';
	var  fill = 'red';
	ctx.save();
	ctx.strokeStyle = stroke;
	ctx.fillStyle = fill;
	ctx.lineWidth = 0;
	var gen = 0;
	width = canvas.width - 210;
	ctx.rect(width,10,10,10);
	ctx.fill();
	ctx.restore();
}

function pick_next_cell(ctx,gen,x,y) {
	ctx.save();
	//ctx.fillStyle = 'red';
	//width = canvas.width - 200;
	var v_point = (gen*10) / 2;
	v_point += 10;
	var h_point = x - 5;
	console.log("h_point: ",h_point);
	console.log("v_point: ",v_point);
	console.log("x: ", x);
	console.log("y: ", y);
	var data = ctx.getImageData(h_point,v_point,1,1).data;
	console.log(data);

	while(h_point < 400) {
		console.log("h_point: ",h_point);
		data = ctx.getImageData(h_point,v_point,1,1).data;
		console.log("data: ", data);

		if(data[0]==255) {
			var words = "Red! @ h_point: "+h_point+" v_point: "+v_point;
			alert(words);
		} else {
			console.log("Black");
		}

		h_point += 10;
	}

	ctx.restore();

}

/*
function draw_many_cells(ctx) {
	var num_rows = 400;
	var counter = 0;
	var column = 0;
	var is_even = true;
	var counter1 = 0;


     

	while(counter < num_rows)
	{

       

		 

		 
		
        if(is_even){ 

        	 draw_cell(ctx, 'transparent', 'blue', column, counter);

		column  +=20;
		 

	}     


	    if(is_even == false){
	    	console.log(column);
	    	 draw_cell(ctx, 'transparent', 'blue', column, counter);
	    	column += 20;
	    	counter1++; 
	    	 
	    }

		 
		 
		if(is_even == true && column == 400) {
			counter +=10;
            
			column = 10;
			is_even = false;
			 
		}

		if(is_even == false && counter1 == 30){
			counter += 10;
			column = 0;
			is_even = true;
			counter1 = 0;
			 
			 

		}


	}
}
*/
/*
function draw_alt_cell (ctx)
{
	ctx.save();
	gen = 0;
	alt = 20;
	fill = 'red';
	while(gen < 40) {
		console.log("Gen: " + gen);

		for(var ix = 0; ix < canvas.width - 10; ix += alt)
		{
			var prev_gen = (gen > 10 && gen % 10 == 0) ? (gen*10-10) : (gen*10);
			console.log("Prev_gen: " + prev_gen);

			ctx.fillStyle = fill;
			ctx.rect(ix, prev_gen, 10, 10);
			ctx.fill();
		}
		gen++;
		
	}
	ctx.restore();
}
*/
/*
var prv_gen = gen > 0 ? gen - 10 : gen;
console.log(prv_gen);
*/